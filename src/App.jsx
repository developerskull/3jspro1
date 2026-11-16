import React, { useState, useRef, useCallback } from 'react';
import Scene from './components/Scene';
import ColorPanel from './components/ColorPanel';
import ControlsOverlay from './components/ControlsOverlay';
import Loader from './components/Loader';
import { PRODUCTS, LIGHTING_PRESETS } from './data/products';
import { useScreenshot } from './hooks/useScreenshot';

export default function App() {
  // Current active product
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0]);

  // Customizable colors state per product: { [productId]: { [partId]: hex } }
  const [colorsState, setColorsState] = useState(() => {
    const initial = {};
    PRODUCTS.forEach((prod) => {
      initial[prod.id] = {};
      prod.parts.forEach((part) => {
        initial[prod.id][part.id] = part.defaultColor;
      });
    });
    return initial;
  });

  // Selected part for recoloring
  const [selectedPartId, setSelectedPartId] = useState(PRODUCTS[0].parts[0]?.id);

  // Hovered part on the 3D model
  const [hoveredPart, setHoveredPart] = useState(null);

  // 3D scene display controls
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isWireframe, setIsWireframe] = useState(false);
  const [lightingPreset, setLightingPreset] = useState(LIGHTING_PRESETS[0]);
  const [resetTrigger, setResetTrigger] = useState(0);

  // Color customization side panel visibility
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  // Canvas element reference for screenshot capture
  const canvasElementRef = useRef(null);
  const { capture, toastMessage } = useScreenshot();

  // Current active product's customized colors
  const activePartColors = colorsState[activeProduct.id] || {};

  // Switch product and initialize its active part
  const handleSelectProduct = useCallback((product) => {
    setActiveProduct(product);
    if (product.parts && product.parts.length > 0) {
      setSelectedPartId(product.parts[0].id);
    }
    // Auto-open panel if collapsed
    setIsPanelOpen(true);
  }, []);

  // Update color for a specific part
  const handleColorChange = useCallback(
    (partId, newHex) => {
      setColorsState((prev) => ({
        ...prev,
        [activeProduct.id]: {
          ...prev[activeProduct.id],
          [partId]: newHex,
        },
      }));
    },
    [activeProduct.id]
  );

  // Reset all parts of the current product to default colors
  const handleResetColors = useCallback(() => {
    setColorsState((prev) => {
      const resetProdColors = {};
      activeProduct.parts.forEach((part) => {
        resetProdColors[part.id] = part.defaultColor;
      });
      return {
        ...prev,
        [activeProduct.id]: resetProdColors,
      };
    });
  }, [activeProduct]);

  // Surprise random finish
  const handleRandomizeColors = useCallback(() => {
    setColorsState((prev) => {
      const randomProdColors = {};
      activeProduct.parts.forEach((part) => {
        const randomIndex = Math.floor(Math.random() * part.palette.length);
        randomProdColors[part.id] = part.palette[randomIndex];
      });
      return {
        ...prev,
        [activeProduct.id]: randomProdColors,
      };
    });
  }, [activeProduct]);

  // Reset camera view
  const handleResetView = useCallback(() => {
    setResetTrigger((prev) => prev + 1);
  }, []);

  // Trigger high-res screenshot
  const handleTakeScreenshot = useCallback(() => {
    if (canvasElementRef.current) {
      capture(canvasElementRef.current, activeProduct.name);
    }
  }, [capture, activeProduct.name]);

  return (
    <div className="relative w-full h-full min-h-screen bg-[#090a0f] overflow-hidden select-none">
      {/* Dynamic studio ambient background gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-1000"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${lightingPreset.bg || '#131522'} 0%, #08090d 100%)`,
        }}
      />

      {/* Subtle background studio floor grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 3D WebGL Canvas Scene */}
      <Scene
        product={activeProduct}
        partColors={activePartColors}
        selectedPartId={selectedPartId}
        onSelectPart={setSelectedPartId}
        hoveredPart={hoveredPart}
        setHoveredPart={setHoveredPart}
        isAutoRotating={isAutoRotating}
        isWireframe={isWireframe}
        lightingPreset={lightingPreset}
        resetTrigger={resetTrigger}
        onCanvasReady={(domElement) => {
          canvasElementRef.current = domElement;
        }}
      />

      {/* UI Overlays */}
      <ControlsOverlay
        products={PRODUCTS}
        activeProduct={activeProduct}
        onSelectProduct={handleSelectProduct}
        isAutoRotating={isAutoRotating}
        onToggleAutoRotate={() => setIsAutoRotating((prev) => !prev)}
        isWireframe={isWireframe}
        onToggleWireframe={() => setIsWireframe((prev) => !prev)}
        lightingPreset={lightingPreset}
        onSelectLightingPreset={setLightingPreset}
        onResetView={handleResetView}
        onTakeScreenshot={handleTakeScreenshot}
        hoveredPart={hoveredPart}
        toastMessage={toastMessage}
      />

      {/* Floating Color Customization Panel */}
      <ColorPanel
        product={activeProduct}
        partColors={activePartColors}
        onColorChange={handleColorChange}
        selectedPartId={selectedPartId}
        onSelectPart={setSelectedPartId}
        onResetColors={handleResetColors}
        onRandomizeColors={handleRandomizeColors}
        isOpen={isPanelOpen}
        onToggleOpen={() => setIsPanelOpen((prev) => !prev)}
      />

      {/* Drei useProgress Fullscreen Loading Experience */}
      <Loader />
    </div>
  );
}
