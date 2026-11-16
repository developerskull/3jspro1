/**
 * Product catalog configuration for 3D Interactive Product Viewer
 * Each product specifies model paths, scale, camera defaults, and customizable parts with color palettes.
 */

export const PRODUCTS = [
  {
    id: 'shoe',
    name: 'Aerostride Pro Runner',
    category: 'Footwear & Athletics',
    badge: 'Popular',
    price: '$189.00',
    rating: 4.9,
    reviews: 384,
    description:
      'Engineered for maximum velocity and responsive cushioning. Featuring breathable adaptive mesh, multi-directional traction, and high-rebound midsole technology.',
    specs: [
      { label: 'Weight', value: '235g (Men 9)' },
      { label: 'Midsole', value: 'Dual-Density Foam' },
      { label: 'Drop', value: '8mm' },
      { label: 'Terrain', value: 'Road / Track' },
    ],
    modelPath: '/models/shoe.glb',
    scale: 2.2,
    position: [0, -0.2, 0],
    rotation: [0, Math.PI / 4, 0],
    defaultCameraPosition: [2.6, 1.6, 2.8],
    minDistance: 1.2,
    maxDistance: 6.5,
    parts: [
      {
        id: 'shoe_body',
        name: 'Shoe Upper & Body',
        description: 'Main breathable fabric mesh and outer overlay',
        meshNames: ['Shoe', 'shoe'],
        defaultColor: '#f1f5f9',
        palette: [
          '#f1f5f9', // Clean White
          '#0f172a', // Midnight Black
          '#ef4444', // Crimson Red
          '#3b82f6', // Electric Cobalt
          '#10b981', // Emerald Mint
          '#f59e0b', // Sunset Amber
          '#8b5cf6', // Cyber Violet
          '#ec4899', // Hot Pink
        ],
      },
    ],
  },
  {
    id: 'chair',
    name: 'Nordic Sheen Lounge Chair',
    category: 'Interior & Furniture',
    badge: 'Design Award',
    price: '$649.00',
    rating: 4.8,
    reviews: 142,
    description:
      'Refined Scandinavian lounge chair wrapped in plush sheen velvet. Features steam-bent solid American walnut legs and precision-machined brass accents.',
    specs: [
      { label: 'Upholstery', value: 'Mystere Velvet' },
      { label: 'Frame', value: 'Solid Walnut Wood' },
      { label: 'Hardware', value: 'Brushed Brass / Steel' },
      { label: 'Warranty', value: '10 Years Structural' },
    ],
    modelPath: '/models/chair.glb',
    scale: 2.6,
    position: [0, -0.65, 0],
    rotation: [0, -Math.PI / 5, 0],
    defaultCameraPosition: [2.8, 1.9, 3.2],
    minDistance: 1.5,
    maxDistance: 7.0,
    parts: [
      {
        id: 'fabric',
        name: 'Seat & Cushion Velvet',
        description: 'Plush velvet upholstery on seat and backrest',
        meshNames: ['SheenChair_fabric'],
        defaultColor: '#f59e0b',
        palette: [
          '#f59e0b', // Golden Mustard
          '#0d9488', // Nordic Teal
          '#e11d48', // Royal Carmine
          '#334155', // Slate Charcoal
          '#1e1b4b', // Deep Indigo
          '#4d7c0f', // Forest Olive
          '#78350f', // Cognac Brown
          '#f8fafc', // Oyster White
        ],
      },
      {
        id: 'wood',
        name: 'Wood Legs & Frame',
        description: 'Tapered solid hardwood legs and supportive base',
        meshNames: ['SheenChair_wood'],
        defaultColor: '#78350f',
        palette: [
          '#78350f', // Warm Walnut
          '#3b2210', // Dark Espresso
          '#1c1917', // Ebonized Ash
          '#d97706', // Natural Oak
          '#fed7aa', // Nordic Bleached Beech
        ],
      },
      {
        id: 'metal',
        name: 'Hardware & Accents',
        description: 'Supportive metal brackets and joinery accents',
        meshNames: ['SheenChair_metal'],
        defaultColor: '#cbd5e1',
        palette: [
          '#cbd5e1', // Brushed Steel
          '#fbbf24', // Champagne Gold
          '#0f172a', // Matte Black
          '#94a3b8', // Gunmetal Grey
          '#b45309', // Antique Bronze
        ],
      },
    ],
  },
  {
    id: 'watch',
    name: 'Acro Chronograph Timepiece',
    category: 'Luxury Horology',
    badge: 'Limited Edition',
    price: '$1,299.00',
    rating: 5.0,
    reviews: 96,
    description:
      'Swiss precision automatic chronograph housed in aero-grade titanium with carbon fiber strap accents and anti-reflective sapphire crystal face.',
    specs: [
      { label: 'Case Diameter', value: '42mm' },
      { label: 'Movement', value: 'Swiss Calibre Auto' },
      { label: 'Glass', value: 'Sapphire Crystal' },
      { label: 'Water Rating', value: '10 ATM (100m)' },
    ],
    modelPath: '/models/watch.glb',
    scale: 0.75,
    position: [0, 0, 0],
    rotation: [0, Math.PI / 4, 0],
    defaultCameraPosition: [2.2, 1.6, 2.6],
    minDistance: 1.0,
    maxDistance: 5.5,
    parts: [
      {
        id: 'strap',
        name: 'Carbon & Rubber Strap',
        description: 'Articulated textured strap and locking clasp',
        meshNames: ['Band Carbon Fiber', 'Band Plastic', 'Clasp DGG'],
        defaultColor: '#1e293b',
        palette: [
          '#1e293b', // Stealth Onyx
          '#991b1b', // Racing Scarlet
          '#1e40af', // Deep Oceanic
          '#065f46', // British Racing Green
          '#d97706', // Saddle Tan
          '#f8fafc', // Polar White
        ],
      },
      {
        id: 'bezel',
        name: 'Bezel Ring & Outer Case',
        description: 'Sculpted bezel frame and backplate casing',
        meshNames: ['Bezel Frame', 'Backplate Khronos'],
        defaultColor: '#e2e8f0',
        palette: [
          '#e2e8f0', // Satin Silver
          '#fbbf24', // 18K Yellow Gold
          '#f43f5e', // Rose Gold
          '#0f172a', // DLC Diamond Black
          '#64748b', // Titanium Grey
        ],
      },
      {
        id: 'dial',
        name: 'Chronograph Dial Face',
        description: 'Sunburst textured main dial and subdial faces',
        meshNames: ['Watch Face'],
        defaultColor: '#0f172a',
        palette: [
          '#0f172a', // Deep Obsidian
          '#1e3a8a', // Midnight Blue
          '#14532d', // Emerald Green
          '#7f1d1d', // Burgundy Red
          '#f8fafc', // Arctic Silver
        ],
      },
      {
        id: 'buttons',
        name: 'Crown & Chrono Pushers',
        description: 'Side winding crown and stopwatch push buttons',
        meshNames: ['Button Metal', 'Button Plastic'],
        defaultColor: '#e2e8f0',
        palette: [
          '#e2e8f0', // Polished Steel
          '#fbbf24', // Gilded Gold
          '#ef4444', // Anodized Crimson
          '#10b981', // Racing Green
          '#0f172a', // Tactical Black
        ],
      },
      {
        id: 'hands',
        name: 'Precision Hands & Accents',
        description: 'Hours, minutes, subdial and sweeping seconds hands',
        meshNames: ['Hand Hours', 'Hand Minutes', 'Hand Seconds', 'Hand Setting'],
        defaultColor: '#ef4444',
        palette: [
          '#ef4444', // High-Viz Red
          '#fbbf24', // Gold Leaf
          '#38bdf8', // Cyan Electric
          '#f8fafc', // Pure White
          '#22c55e', // Lime Pulse
        ],
      },
    ],
  },
  {
    id: 'sunglasses',
    name: 'Spectra Avant Sunglasses',
    category: 'Eyewear & Accessories',
    badge: 'New Arrival',
    price: '$249.00',
    rating: 4.9,
    reviews: 118,
    description:
      'Precision-engineered Italian acetate frames with polarized UV400 lenses, stainless steel 5-barrel spring hinges, and ergonomic non-slip earhooks.',
    specs: [
      { label: 'Lens Tech', value: 'Polarized UV400' },
      { label: 'Frame', value: 'Handcrafted Acetate' },
      { label: 'Hinges', value: '5-Barrel Stainless' },
      { label: 'Weight', value: '32g Featherlight' },
    ],
    modelPath: '/models/sunglasses.glb',
    scale: 16.0,
    position: [0, -0.05, 0],
    rotation: [-Math.PI / 2, 0, Math.PI / 6],
    defaultCameraPosition: [2.2, 1.4, 2.4],
    minDistance: 0.9,
    maxDistance: 4.5,
    parts: [
      {
        id: 'frames',
        name: 'Front Frame & Rims',
        description: 'Sculpted front acetate eyewear silhouette',
        meshNames: ['Frames', 'frames'],
        defaultColor: '#0f172a',
        palette: [
          '#0f172a', // Classic Obsidian
          '#78350f', // Havana Tortoiseshell
          '#e2e8f0', // Crystal Clear
          '#fbbf24', // Champagne Gold
          '#991b1b', // Bordeaux Amber
          '#1e3a8a', // Midnight Indigo
          '#15803d', // Racing Emerald
          '#f8fafc', // Polar White
        ],
      },
      {
        id: 'lenses',
        name: 'Polarized Lenses',
        description: 'Multi-coat anti-reflective tinted lenses',
        meshNames: ['Lenses', 'lenses', 'LensesInterior', 'LensesExterior'],
        defaultColor: '#1e293b',
        palette: [
          '#1e293b', // Deep Smoke
          '#0284c7', // Sapphire Blue Mirror
          '#d97706', // Sunset Amber Gradient
          '#7c3aed', // Purple Violet Iridescent
          '#059669', // Emerald Green Flash
          '#be123c', // Ruby Rose
          '#000000', // Pitch Black 100%
        ],
      },
      {
        id: 'temples',
        name: 'Temples & Arms',
        description: 'Metallic side arms and precision hinge core',
        meshNames: ['Temple', 'temple', 'TempleLeft', 'TempleRight'],
        defaultColor: '#fbbf24',
        palette: [
          '#fbbf24', // Gilded Gold
          '#e2e8f0', // Polished Chrome
          '#0f172a', // Matte Black
          '#94a3b8', // Brushed Gunmetal
          '#b45309', // Vintage Bronze
          '#dc2626', // Anodized Red
        ],
      },
      {
        id: 'earhooks',
        name: 'Comfort Ear Hooks',
        description: 'Silicone comfort tips for secure grip',
        meshNames: ['Earhook', 'earhook', 'EarhookLeft', 'EarhookRight', 'Nosepads', 'nose_pads'],
        defaultColor: '#0f172a',
        palette: [
          '#0f172a', // Matte Onyx
          '#e2e8f0', // Frosted White
          '#ef4444', // Racing Red
          '#3b82f6', // Neon Blue
          '#f59e0b', // Amber Orange
        ],
      },
    ],
  },
  {
    id: 'helmet',
    name: 'Apex Cyber Combat Helmet',
    category: 'Tactical & Sci-Fi Gear',
    badge: 'Collector Edition',
    price: '$899.00',
    rating: 5.0,
    reviews: 210,
    description:
      'Full-enclosure ballistic tactical helmet with dynamic HUD visor, reinforced ceramic composite plating, and integrated communications array.',
    specs: [
      { label: 'Shell Material', value: 'Carbon Kevlar Matrix' },
      { label: 'Visor', value: 'Electrochromic HUD' },
      { label: 'Rating', value: 'MIL-SPEC Ballistic' },
      { label: 'Weight', value: '1.2 kg' },
    ],
    modelPath: '/models/helmet.glb',
    scale: 1.35,
    position: [0, -0.05, 0],
    rotation: [0, Math.PI / 4, 0],
    defaultCameraPosition: [2.5, 1.8, 2.8],
    minDistance: 1.2,
    maxDistance: 6.0,
    parts: [
      {
        id: 'helmet_shell',
        name: 'Armor Shell & Visor',
        description: 'Battle-hardened composite outer armor and optics',
        meshNames: ['damagedHelmet', 'helmet', 'node_damagedHelmet'],
        defaultColor: '#ffffff',
        palette: [
          '#ffffff', // Factory Clean
          '#0f172a', // Stealth Ops Black
          '#ef4444', // Hazard Crimson
          '#3b82f6', // Cyber Cobalt
          '#10b981', // Neon Acid Green
          '#f59e0b', // Solar Flare Amber
          '#8b5cf6', // Deep Void Purple
          '#e2e8f0', // Titanium Silver
        ],
      },
    ],
  },
];

export const LIGHTING_PRESETS = [
  { id: 'studio', name: 'Studio Neutral', icon: 'Sun', environment: 'studio', bg: '#0c0d14' },
  { id: 'city', name: 'Urban City', icon: 'Building2', environment: 'city', bg: '#0a0d14' },
  { id: 'sunset', name: 'Sunset Warmth', icon: 'Sunset', environment: 'sunset', bg: '#140c10' },
  { id: 'apartment', name: 'Interior Warm', icon: 'Home', environment: 'apartment', bg: '#0f0e12' },
];
