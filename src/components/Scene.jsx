import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import Model from './Model';
import ErrorBoundary from './ErrorBoundary';

/**
 * Controller to smoothly glide OrbitControls and Camera between preset view angles
 * (Perspective, Front, Side, Top)
 */
function CameraController({ targetPosition, resetTrigger, controlsRef }) {
  const isTransitioningRef = useRef(false);
  const targetPosVec = useRef(new THREE.Vector3());

  useEffect(() => {
    if (targetPosition) {
      targetPosVec.current.set(...targetPosition);
      isTransitioningRef.current = true;
    }
  }, [targetPosition, resetTrigger]);

  useFrame((state, delta) => {
    if (!controlsRef.current || !isTransitioningRef.current) return;
    const camera = state.camera;
    const controls = controlsRef.current;

    // Smooth lerp camera position towards target
    const step = Math.min(1, delta * 6);
    camera.position.lerp(targetPosVec.current, step);
    controls.target.lerp(new THREE.Vector3(0, 0, 0), step);
    controls.update();

    // End transition when close enough
    if (camera.position.distanceTo(targetPosVec.current) < 0.05) {
      camera.position.copy(targetPosVec.current);
      isTransitioningRef.current = false;
    }
  });

  return null;
}

/**
 * Main 3D WebGL Canvas Scene with studio lighting, grounded contact shadows,
 * smooth camera transitions, and PBR environments
 */
export default function Scene({
  product,
  partColors,
  selectedPartId,
  onSelectPart,
  hoveredPart,
  setHoveredPart,
  isAutoRotating,
  isWireframe,
  lightingPreset,
  cameraAngle,
  resetTrigger,
  onCanvasReady,
}) {
  const controlsRef = useRef();

  // Compute camera positions for each preset angle based on product defaults
  const cameraTargetPosition = React.useMemo(() => {
    const def = product.defaultCameraPosition || [2.6, 1.6, 2.8];
    const radius = Math.hypot(def[0], def[2]);
    const height = def[1];

    switch (cameraAngle) {
      case 'front':
        return [0, height * 0.9, radius * 1.05];
      case 'side':
        return [radius * 1.1, height * 0.95, 0];
      case 'top':
        return [0.01, radius * 1.35, 0.01];
      case 'perspective':
      default:
        return def;
    }
  }, [product.defaultCameraPosition, cameraAngle]);

  return (
    <div className="relative w-full h-full">
      <Canvas
        shadows
        dpr={[1, 2]} // Clamp pixel ratio for optimal 60fps performance
        camera={{
          position: product.defaultCameraPosition || [2.6, 1.6, 2.8],
          fov: 40,
          near: 0.1,
          far: 50,
        }}
        gl={{
          preserveDrawingBuffer: true, // Needed for screenshot capture
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        onCreated={({ gl }) => {
          if (onCanvasReady) onCanvasReady(gl.domElement);
        }}
        className="touch-none"
      >
        {/* Realistic Studio Lighting Setup */}
        <ambientLight intensity={0.45} />
        
        {/* Key Light (casts sharp yet soft directional shadow) */}
        <directionalLight
          position={[6, 9, 6]}
          intensity={1.3}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
          shadow-camera-near={1}
          shadow-camera-far={20}
        />

        {/* Rim Light / Back Light for crisp edge definition */}
        <directionalLight position={[-6, 6, -6]} intensity={0.45} color="#93c5fd" />
        <directionalLight position={[0, -3, 3]} intensity={0.2} color="#ffffff" />
        <pointLight position={[3, 1, -3]} intensity={0.25} color="#fbbf24" />

        {/* HDRI Environment Reflections */}
        <Environment
          preset={lightingPreset.environment || 'studio'}
          background={false}
          environmentIntensity={0.85}
        />

        {/* Constrained Orbit Controls with smooth damping */}
        <OrbitControls
          ref={controlsRef}
          makeDefault
          enablePan={false}
          enableZoom={true}
          minDistance={product.minDistance || 1.0}
          maxDistance={product.maxDistance || 7.0}
          enableDamping={true}
          dampingFactor={0.06}
          autoRotate={isAutoRotating}
          autoRotateSpeed={1.2}
          maxPolarAngle={Math.PI / 2 + 0.04}
        />

        {/* Smooth Camera Glide Controller */}
        <CameraController
          targetPosition={cameraTargetPosition}
          resetTrigger={resetTrigger}
          controlsRef={controlsRef}
        />

        {/* Product Model with Error Boundary */}
        <ErrorBoundary>
          <Model
            key={product.id}
            product={product}
            partColors={partColors}
            selectedPartId={selectedPartId}
            onSelectPart={onSelectPart}
            hoveredPart={hoveredPart}
            setHoveredPart={setHoveredPart}
            isWireframe={isWireframe}
          />
        </ErrorBoundary>

        {/* Soft Grounded Contact Shadows */}
        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={0.7}
          scale={11}
          blur={2.5}
          far={3.8}
          resolution={1024}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}
