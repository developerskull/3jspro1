import React, { useRef, useMemo, useEffect } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PRODUCTS } from '../data/products';

// Preload all 3D models upfront for instant switching
PRODUCTS.forEach((p) => {
  if (p.modelPath) {
    useGLTF.preload(p.modelPath);
  }
});

/**
 * Helper to match a mesh name to a configured customizable product part
 */
function findPartForMesh(meshName, parts = []) {
  if (!meshName || !parts.length) return null;
  const lowerName = meshName.toLowerCase();
  return (
    parts.find((part) =>
      part.meshNames.some((targetName) =>
        lowerName.includes(targetName.toLowerCase()) || targetName.toLowerCase().includes(lowerName)
      )
    ) || null
  );
}

/**
 * Interactive 3D Model component with:
 * - Isolated cloned materials for per-instance recoloring
 * - 60fps smooth color lerping via useFrame
 * - Dynamic part hover & click selection
 * - Smooth scale-in transition on product switch
 * - Proper Three.js memory disposal
 */
export default function Model({
  product,
  partColors,
  selectedPartId,
  onSelectPart,
  hoveredPart,
  setHoveredPart,
  isWireframe,
}) {
  const groupRef = useRef();
  const currentScaleRef = useRef(0.01);
  const targetScale = product.scale || 1.0;

  // Load GLB model
  const { scene } = useGLTF(product.modelPath);

  // Clone scene to avoid mutating cached GLTF across switches
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    // Deep clone materials so recoloring is isolated
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material = child.material.map((m) => m.clone());
          } else {
            child.material = child.material.clone();
          }
        }
      }
    });

    return clone;
  }, [scene]);

  // Clean up geometries and materials on unmount
  useEffect(() => {
    return () => {
      clonedScene.traverse((child) => {
        if (child.isMesh) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else if (child.material) {
            child.material.dispose();
          }
        }
      });
    };
  }, [clonedScene]);

  // Reset scale entrance animation whenever active product changes
  useEffect(() => {
    currentScaleRef.current = 0.05;
  }, [product.id]);

  // Map each mesh in the cloned scene to its customizable part
  const meshPartMap = useMemo(() => {
    const map = new Map();
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        const matchedPart = findPartForMesh(child.name, product.parts);
        if (matchedPart) {
          map.set(child, matchedPart);
        }
      }
    });
    return map;
  }, [clonedScene, product.parts]);

  // Pre-instantiate reusable THREE.Color objects for smooth 60fps lerping
  const targetColorObjects = useMemo(() => {
    const obj = {};
    product.parts.forEach((part) => {
      const hex = partColors[part.id] || part.defaultColor;
      obj[part.id] = new THREE.Color(hex);
    });
    return obj;
  }, [product.parts, partColors]);

  const emissiveHighlight = useMemo(() => new THREE.Color('#38bdf8'), []);
  const emissiveBlack = useMemo(() => new THREE.Color('#000000'), []);

  // Frame loop: smooth scale transition, color lerping, and hover highlight
  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // 1. Smooth scale-in transition on product switch
    const clampedDelta = Math.min(delta, 0.1);
    currentScaleRef.current = THREE.MathUtils.lerp(
      currentScaleRef.current,
      targetScale,
      clampedDelta * 8
    );
    groupRef.current.scale.setScalar(currentScaleRef.current);

    // 2. Smooth color lerp and hover feedback
    meshPartMap.forEach((part, mesh) => {
      const targetColor = targetColorObjects[part.id];
      const mat = mesh.material;
      if (!mat) return;

      // Handle wireframe toggle
      mat.wireframe = !!isWireframe;

      // Smooth color lerp
      if (targetColor && mat.color) {
        mat.color.lerp(targetColor, clampedDelta * 9);
      }

      // Subtle emissive glow on hover or when selected
      if (mat.emissive) {
        const isHovered = hoveredPart?.id === part.id;
        const isSelected = selectedPartId === part.id;
        const targetEmissive = isHovered || isSelected ? emissiveHighlight : emissiveBlack;
        mat.emissive.lerp(targetEmissive, clampedDelta * 10);
        mat.emissiveIntensity = isHovered ? 0.35 : isSelected ? 0.2 : 0;
      }
    });
  });

  return (
    <group ref={groupRef} position={product.position || [0, 0, 0]} rotation={product.rotation || [0, 0, 0]}>
      <Center top={false} bottom={true}>
        <primitive
          object={clonedScene}
          onPointerOver={(e) => {
            e.stopPropagation();
            const part = meshPartMap.get(e.object) || findPartForMesh(e.object.name, product.parts);
            if (part) {
              setHoveredPart(part);
              document.body.style.cursor = 'pointer';
            }
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHoveredPart(null);
            document.body.style.cursor = 'auto';
          }}
          onPointerDown={(e) => {
            e.stopPropagation();
            const part = meshPartMap.get(e.object) || findPartForMesh(e.object.name, product.parts);
            if (part) {
              onSelectPart(part.id);
            }
          }}
        />
      </Center>
    </group>
  );
}

