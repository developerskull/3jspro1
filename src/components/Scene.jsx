import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import Model from './Model';
import ErrorBoundary from './ErrorBoundary';

/**
 * Controller to smoothly animate OrbitControls and Camera to default view
 * when resetting or switching products
 */
function CameraController({ defaultPosition, resetTrigger, controlsRef }) {
  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      controls.target.set(0, 0, 0);
      controls.object.position.set(...defaultPosition);
      controls.update();
    }
  }, [resetTrigger, defaultPosition, controlsRef]);

  return null;
}

/**
 * Main 3D WebGL Canvas Scene
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
  resetTrigger,
  onCanvasReady,
}) {
  const controlsRef = useRef();

  return (
    <div className="relative w-full h-full">
      <Canvas
        shadows
        dpr={[1, 2]} // Clamp pixel ratio for optimal 60fps performance
        camera={{
          position: product.defaultCameraPosition || [2.5, 1.8, 3.2],
          fov: 42,
          near: 0.1,
          far: 50,
        }}
        gl={{
          preserveDrawingBuffer: true, // Needed for screenshot capture
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        onCreated={({ gl }) => {
          if (onCanvasReady) onCanvasReady(gl.domElement);
        }}
        className="touch-none"
      >
        {/* Realistic Studio / Outdoor Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#93c5fd" />
        <pointLight position={[0, -2, 2]} intensity={0.2} color="#f8fafc" />

        {/* HDRI Environment Reflections */}
        <Environment preset={lightingPreset.environment || 'studio'} background={false} environmentIntensity={0.8} />

        {/* Orbit Controls */}
        <OrbitControls
          ref={controlsRef}
          makeDefault
          enablePan={false} // Disable panning as requested
          enableZoom={true}
          minDistance={product.minDistance || 1.2}
          maxDistance={product.maxDistance || 7.0}
          enableDamping={true}
          dampingFactor={0.06}
          autoRotate={isAutoRotating}
          autoRotateSpeed={1.4}
          maxPolarAngle={Math.PI / 2 + 0.05} // Prevent camera from dipping too far below floor
        />

        <CameraController
          defaultPosition={product.defaultCameraPosition}
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

        {/* Soft Contact Shadows grounded under the product */}
        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={0.65}
          scale={10}
          blur={2.4}
          far={3.5}
          resolution={512}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}

