import React, { useState, useRef, useCallback, useMemo } from 'react';
import Scene from './components/Scene';
import FlipkartHeader from './components/FlipkartHeader';
import FlipkartProductPanel from './components/FlipkartProductPanel';
import FlipkartCartModal from './components/FlipkartCartModal';
import ControlsOverlay from './components/ControlsOverlay';
import Loader from './components/Loader';
import { PRODUCTS, LIGHTING_PRESETS } from './data/products';
import { useScreenshot } from './hooks/useScreenshot';

export default function App() {
  // Category filter and search query
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered products list based on category & search
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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

  // Flipkart Product Panel open/closed state
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  // Flipkart Cart state
  const [cartCount, setCartCount] = useState(0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [customToast, setCustomToast] = useState(null);

  // Canvas element reference for screenshot capture
  const canvasElementRef = useRef(null);
  const { capture, toastMessage: screenshotToast } = useScreenshot();

  // Current active product's customized colors
  const activePartColors = colorsState[activeProduct.id] || {};

  // Switch product and initialize its active part
  const handleSelectProduct = useCallback((product) => {
    setActiveProduct(product);
    if (product.parts && product.parts.length > 0) {
      setSelectedPartId(product.parts[0].id);
    }
    // Auto-open panel on product switch
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

  // Apply complete curated signature colorway
  const handleApplyColorway = useCallback(
    (colorsMap) => {
      setColorsState((prev) => ({
        ...prev,
        [activeProduct.id]: {
          ...prev[activeProduct.id],
          ...colorsMap,
        },
      }));
    },
    [activeProduct.id]
  );

  // Reset all parts of current product to default colors
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
      capture(canvasElementRef.current, `flipkart-3d-${activeProduct.brand}-${activeProduct.name}`);
    }
  }, [capture, activeProduct]);

  // Add to Cart handler
  const handleAddToCart = useCallback((product) => {
    setCartCount((prev) => prev + 1);
    setCustomToast(`Added 1 item to Flipkart Cart: ${product.name}`);
    setTimeout(() => setCustomToast(null), 3500);
  }, []);

  // Buy Now handler
  const handleBuyNow = useCallback((product) => {
    setCartCount((prev) => (prev === 0 ? 1 : prev));
    setIsCartModalOpen(true);
  }, []);

  // Place Order handler
  const handlePlaceOrder = useCallback(() => {
    setIsCartModalOpen(false);
    setCustomToast('🎉 Order placed successfully with Flipkart 3D Assured delivery!');
    setCartCount(0);
    setTimeout(() => setCustomToast(null), 4500);
  }, []);

  // Filter category selection
  const handleCategorySelect = useCallback((catId) => {
    setActiveCategory(catId);
    if (catId !== 'all') {
      const firstInCat = PRODUCTS.find((p) => p.category === catId);
      if (firstInCat) {
        handleSelectProduct(firstInCat);
      }
    }
  }, [handleSelectProduct]);

  return (
    <div className="relative w-full h-full min-h-screen bg-[#070b12] overflow-hidden select-none font-sans">
      {/* Flipkart Top Navigation Header */}
      <FlipkartHeader
        activeCategory={activeCategory}
        onSelectCategory={handleCategorySelect}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartCount}
        onOpenCart={() => setIsCartModalOpen(true)}
      />

      {/* Dynamic studio ambient background gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-1000"
        style={{
          background: `radial-gradient(circle at 45% 45%, ${lightingPreset.bg || '#0c1424'} 0%, #05080e 100%)`,
        }}
      />

      {/* Subtle background studio grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(40,116,240,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(40,116,240,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_45%_50%,#000_70%,transparent_100%)] pointer-events-none" />

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

      {/* Controls Overlay with 3D Tools & Bottom Product Switcher */}
      <ControlsOverlay
        products={filteredProducts.length > 0 ? filteredProducts : PRODUCTS}
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
        toastMessage={customToast || screenshotToast}
      />

      {/* Flipkart Product Detail, Pricing & 3D Color Customizer Panel */}
      <FlipkartProductPanel
        product={activeProduct}
        partColors={activePartColors}
        onColorChange={handleColorChange}
        onApplyColorway={handleApplyColorway}
        selectedPartId={selectedPartId}
        onSelectPart={setSelectedPartId}
        onResetColors={handleResetColors}
        onRandomizeColors={handleRandomizeColors}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        isOpen={isPanelOpen}
        onToggleOpen={() => setIsPanelOpen((prev) => !prev)}
      />

      {/* Flipkart Cart & Checkout Drawer Modal */}
      <FlipkartCartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        product={activeProduct}
        partColors={activePartColors}
        onPlaceOrder={handlePlaceOrder}
      />

      {/* Drei useProgress Fullscreen Loading Experience */}
      <Loader />
    </div>
  );
}
