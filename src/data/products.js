/**
 * Flipkart 3D Studio - Product Catalog Configuration
 * Detailed e-commerce metadata with Indian Rupee (₹) pricing, Flipkart Assured badges,
 * bank offers, delivery estimates, specs, and customizable 3D parts.
 */

export const FLIPKART_CATEGORIES = [
  { id: 'all', name: 'All 3D Products', icon: 'Sparkles' },
  { id: 'footwear', name: 'Footwear', icon: 'Footprints' },
  { id: 'furniture', name: 'Home & Furniture', icon: 'Armchair' },
  { id: 'watches', name: 'Watches', icon: 'Watch' },
  { id: 'eyewear', name: 'Eyewear', icon: 'Glasses' },
  { id: 'tech', name: 'Tech & Gaming', icon: 'Shield' },
];

export const PRODUCTS = [
  {
    id: 'shoe',
    brand: 'AEROSTRIDE',
    name: 'Aerostride Pro Runner Sneaker (Men)',
    category: 'footwear',
    categoryLabel: "Men's Footwear",
    badge: 'Trending in Running',
    fAssured: true,
    price: 2499,
    originalPrice: 5999,
    discount: '58% off',
    rating: 4.4,
    ratingCount: '18,429 Ratings & 2,314 Reviews',
    delivery: 'Free delivery by Tomorrow, 9 PM',
    deliveryPincode: '400001',
    offers: [
      'Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
      'Special Price: Get extra ₹500 off (price inclusive of discount)',
      'Partner Offer: Sign up for Flipkart Pay Later & get ₹500 Gift Voucher',
      'No Cost EMI available from ₹417/month on major credit cards',
    ],
    highlights: [
      'Interactive 3D real-time color customizer',
      'Engineered multi-layer breathable knit upper',
      'Dual-density high-rebound responsive foam sole',
      '7 Days Replacement Policy • Cash on Delivery Available',
    ],
    specs: [
      { label: 'Type', value: 'Running / Sports Shoes' },
      { label: 'Weight', value: '235 g (UK 8)' },
      { label: 'Upper Material', value: 'Engineered Adaptive Mesh' },
      { label: 'Sole Material', value: 'EVA Dual-Density Rebound' },
      { label: 'Closure', value: 'Lace-Ups' },
      { label: 'Warranty', value: '6 Months Brand Warranty' },
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
        name: 'Shoe Upper Body',
        description: 'Breathable engineered textile mesh and overlays',
        meshNames: ['Shoe', 'shoe'],
        defaultColor: '#f1f5f9',
        palette: [
          '#f1f5f9', // Cloud White
          '#0f172a', // Midnight Black
          '#2874f0', // Flipkart Blue
          '#ef4444', // Crimson Pulse
          '#10b981', // Sport Mint
          '#ffe500', // Electric Volt
          '#8b5cf6', // Cyber Lavender
          '#ea580c', // Sunset Neon
        ],
      },
    ],
  },
  {
    id: 'chair',
    brand: 'NORDIC LIVING',
    name: 'Nordic Sheen Accent Velvet Lounge Chair',
    category: 'furniture',
    categoryLabel: 'Living Room Furniture',
    badge: 'Bestseller in Chairs',
    fAssured: true,
    price: 14999,
    originalPrice: 32999,
    discount: '54% off',
    rating: 4.6,
    ratingCount: '4,892 Ratings & 612 Reviews',
    delivery: 'Free delivery by Friday, 2 PM',
    deliveryPincode: '400001',
    offers: [
      'Bank Offer: ₹1,500 Instant Discount on HDFC Bank Credit Card EMI',
      'Special Price: Extra ₹2,000 Off on Furniture Mega Sale',
      'Combo Offer: Buy 2 or more get additional 5% off',
      'No Cost EMI from ₹1,250/month',
    ],
    highlights: [
      'Customizable upholstery velvet and solid wood legs in 3D',
      'Plush high-density foam cushion with micro-sheen velvet',
      'Solid kiln-dried hardwood tapered legs with brass accents',
      'Free Installation by Flipkart Jeeves Technician',
    ],
    specs: [
      { label: 'Upholstery', value: 'Mystere Sheen Velvet' },
      { label: 'Frame', value: 'Solid Sheesham & Walnut Wood' },
      { label: 'Seating Capacity', value: '1 Seater' },
      { label: 'Hardware', value: 'Brushed Brass Joinery' },
      { label: 'Assembly', value: 'Delivered Assembled / DIY Leg Fit' },
      { label: 'Warranty', value: '5 Years Structural Warranty' },
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
        description: 'Plush velvet upholstery on seat and ergonomic backrest',
        meshNames: ['SheenChair_fabric'],
        defaultColor: '#f59e0b',
        palette: [
          '#f59e0b', // Royal Mustard
          '#2874f0', // Flipkart Royal Blue
          '#0d9488', // Nordic Teal
          '#e11d48', // Ruby Carmine
          '#334155', // Charcoal Slate
          '#1e1b4b', // Midnight Navy
          '#4d7c0f', // Forest Olive
          '#f8fafc', // Pearl White
        ],
      },
      {
        id: 'wood',
        name: 'Wood Legs & Base',
        description: 'Solid tapered kiln-dried wooden legs',
        meshNames: ['SheenChair_wood'],
        defaultColor: '#78350f',
        palette: [
          '#78350f', // Warm Walnut
          '#3b2210', // Dark Teak
          '#1c1917', // Ebonized Charcoal
          '#d97706', // Natural Oak
          '#fed7aa', // Honey Pine
        ],
      },
      {
        id: 'metal',
        name: 'Hardware & Accents',
        description: 'Metal brackets and reinforcement joints',
        meshNames: ['SheenChair_metal'],
        defaultColor: '#cbd5e1',
        palette: [
          '#cbd5e1', // Polished Chrome
          '#fbbf24', // Champagne Gold
          '#0f172a', // Matte Black
          '#94a3b8', // Gunmetal Grey
          '#b45309', // Antique Brass
        ],
      },
    ],
  },
  {
    id: 'watch',
    brand: 'ACRO SWISS',
    name: 'Acro Chronograph Automatic Analog Watch (Men)',
    category: 'watches',
    categoryLabel: 'Luxury Horology',
    badge: 'Flipkart Choice',
    fAssured: true,
    price: 8999,
    originalPrice: 24999,
    discount: '64% off',
    rating: 4.7,
    ratingCount: '7,318 Ratings & 984 Reviews',
    delivery: 'Free delivery by Tomorrow, 11 AM',
    deliveryPincode: '400001',
    offers: [
      'Bank Offer: 10% Instant Discount on SBI Credit Cards up to ₹1,500',
      'Special Price: Extra ₹1,000 Off applied at checkout',
      'Partner Offer: Free 1-Year Extended Warranty Certificate',
      'No Cost EMI starting from ₹750/month',
    ],
    highlights: [
      'Multi-part customizable 3D horology studio',
      'Precision automatic chronograph movement',
      'Anti-reflective scratch-resistant sapphire crystal lens',
      'Water Resistant up to 100 meters (10 ATM)',
    ],
    specs: [
      { label: 'Dial Shape', value: 'Round 42 mm' },
      { label: 'Movement', value: 'Swiss Calibre Auto' },
      { label: 'Strap Material', value: 'Carbon Weave & Silicone' },
      { label: 'Water Resistance', value: '100 m (10 ATM)' },
      { label: 'Clasp Type', value: 'Deployant Push Button' },
      { label: 'Warranty', value: '2 Years International Warranty' },
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
        name: 'Strap & Clasp',
        description: 'Textured carbon strap and security buckle',
        meshNames: ['Band Carbon Fiber', 'Band Plastic', 'Clasp DGG'],
        defaultColor: '#1e293b',
        palette: [
          '#1e293b', // Stealth Onyx
          '#2874f0', // Flipkart Blue
          '#991b1b', // Racing Maroon
          '#1e40af', // Deep Ocean
          '#065f46', // British Green
          '#d97706', // Cognac Leather
          '#f8fafc', // Arctic White
        ],
      },
      {
        id: 'bezel',
        name: 'Bezel Ring & Outer Casing',
        description: 'Brushed metal bezel and back casing',
        meshNames: ['Bezel Frame', 'Backplate Khronos'],
        defaultColor: '#e2e8f0',
        palette: [
          '#e2e8f0', // Stainless Silver
          '#fbbf24', // 18K Yellow Gold
          '#f43f5e', // Rose Gold
          '#0f172a', // DLC Matte Black
          '#64748b', // Space Titanium
        ],
      },
      {
        id: 'dial',
        name: 'Dial Face',
        description: 'Sunray textured chronograph main dial',
        meshNames: ['Watch Face'],
        defaultColor: '#0f172a',
        palette: [
          '#0f172a', // Obsidian Black
          '#1e3a8a', // Midnight Blue
          '#14532d', // Emerald Forest
          '#7f1d1d', // Burgundy
          '#f8fafc', // Sunburst Silver
        ],
      },
      {
        id: 'buttons',
        name: 'Crown & Push Buttons',
        description: 'Stopwatch pushers and winding crown',
        meshNames: ['Button Metal', 'Button Plastic'],
        defaultColor: '#e2e8f0',
        palette: [
          '#e2e8f0', // Steel Chrome
          '#fbbf24', // Gilded Gold
          '#ef4444', // Anodized Red
          '#10b981', // Neon Green
          '#0f172a', // Midnight
        ],
      },
      {
        id: 'hands',
        name: 'Watch Hands & Accents',
        description: 'Chronograph hours, minutes and seconds hands',
        meshNames: ['Hand Hours', 'Hand Minutes', 'Hand Seconds', 'Hand Setting'],
        defaultColor: '#ef4444',
        palette: [
          '#ef4444', // High-Viz Red
          '#fbbf24', // Golden Arrow
          '#38bdf8', // Cyan Luminescent
          '#f8fafc', // Pure White
          '#22c55e', // Toxic Lime
        ],
      },
    ],
  },
  {
    id: 'sunglasses',
    brand: 'SPECTRA AVANT',
    name: 'Spectra Polarized UV400 Wayfarer Sunglasses',
    category: 'eyewear',
    categoryLabel: 'Eyewear & Accessories',
    badge: 'Trending Eyewear',
    fAssured: true,
    price: 1899,
    originalPrice: 4999,
    discount: '62% off',
    rating: 4.5,
    ratingCount: '9,120 Ratings & 1,140 Reviews',
    delivery: 'Free delivery by Tomorrow, 5 PM',
    deliveryPincode: '400001',
    offers: [
      'Bank Offer: Flat ₹200 off on Axis Bank Cards above ₹1,500',
      'Special Price: Extra 15% off on Sunglasses & Watches combo',
      'Buy 2 Get 10% Off on select fashion accessories',
      'COD & 7 Days Return Available',
    ],
    highlights: [
      'Real-time 3D frame & lens tint customizer',
      'Polarized UV400 protective anti-glare lenses',
      'Lightweight Italian handcrafted acetate frame',
      'Includes premium leather case & microfiber cloth',
    ],
    specs: [
      { label: 'Frame Shape', value: 'Wayfarer / Square' },
      { label: 'Lens Feature', value: 'Polarized, UV400' },
      { label: 'Frame Material', value: 'Italian Acetate' },
      { label: 'Hinge Type', value: '5-Barrel Stainless Spring' },
      { label: 'Size', value: 'Medium (54-18-145)' },
      { label: 'Warranty', value: '1 Year Manufacturer Warranty' },
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
        name: 'Front Acetate Frames',
        description: 'Acetate frame rim and bridge silhouette',
        meshNames: ['Frames', 'frames'],
        defaultColor: '#0f172a',
        palette: [
          '#0f172a', // Glossy Black
          '#78350f', // Havana Tortoiseshell
          '#2874f0', // Flipkart Royal Blue
          '#e2e8f0', // Crystal Clear
          '#fbbf24', // Honey Amber
          '#991b1b', // Wine Red
          '#1e3a8a', // Dark Navy
          '#15803d', // Bottle Green
        ],
      },
      {
        id: 'lenses',
        name: 'Polarized Lenses',
        description: 'UV400 reflective gradient polarized lenses',
        meshNames: ['Lenses', 'lenses', 'LensesInterior', 'LensesExterior'],
        defaultColor: '#1e293b',
        palette: [
          '#1e293b', // Smoke Grey 100%
          '#0284c7', // Sapphire Blue Mirror
          '#d97706', // Sunset Amber
          '#7c3aed', // Purple Haze
          '#059669', // Emerald Flash
          '#be123c', // Sunset Ruby
          '#000000', // Pitch Black Polarized
        ],
      },
      {
        id: 'temples',
        name: 'Side Temples & Arms',
        description: 'Metal core acetate temple arms',
        meshNames: ['Temple', 'temple', 'TempleLeft', 'TempleRight'],
        defaultColor: '#fbbf24',
        palette: [
          '#fbbf24', // Warm Gold
          '#e2e8f0', // Silver Chrome
          '#0f172a', // Matte Black
          '#94a3b8', // Gunmetal
          '#b45309', // Vintage Bronze
          '#dc2626', // Ferrari Red
        ],
      },
      {
        id: 'earhooks',
        name: 'Ear Hooks & Nose Pads',
        description: 'Non-slip ergonomic rubber comfort tips',
        meshNames: ['Earhook', 'earhook', 'EarhookLeft', 'EarhookRight', 'Nosepads', 'nose_pads'],
        defaultColor: '#0f172a',
        palette: [
          '#0f172a', // Deep Black
          '#e2e8f0', // Frosted White
          '#ef4444', // Sport Red
          '#2874f0', // Blue
          '#f59e0b', // Amber
        ],
      },
    ],
  },
  {
    id: 'helmet',
    brand: 'APEX CYBER',
    name: 'Apex Cyber Strike Ballistic Helmet & HUD Visor',
    category: 'tech',
    categoryLabel: 'Tech & Gaming Gear',
    badge: 'Exclusive Launch',
    fAssured: true,
    price: 4999,
    originalPrice: 12999,
    discount: '61% off',
    rating: 4.8,
    ratingCount: '3,215 Ratings & 489 Reviews',
    delivery: 'Free delivery by Thursday, 8 PM',
    deliveryPincode: '400001',
    offers: [
      'Bank Offer: Flat ₹750 off on ICICI Bank Credit Card Transactions',
      'Gaming Special: 1 Year Free Discord Nitro & Game Pass voucher',
      'No Cost EMI from ₹416/month on Flipkart Pay Later',
      '10 Days Replacement Policy',
    ],
    highlights: [
      'Explore full 360° armor plating & battle damage in 3D',
      'Reinforced Kevlar composite shell construction',
      'Electrochromic tinted HUD visor optics',
      'Integrated Bluetooth audio & active noise suppression',
    ],
    specs: [
      { label: 'Shell Material', value: 'Carbon Kevlar Matrix' },
      { label: 'Optics', value: 'Electrochromic HUD Glass' },
      { label: 'Impact Rating', value: 'MIL-STD-810G Certified' },
      { label: 'Weight', value: '1.25 kg' },
      { label: 'Connectivity', value: 'Bluetooth 5.3 Low Latency' },
      { label: 'Warranty', value: '2 Years Manufacturer Warranty' },
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
        name: 'Armor Shell & Optics',
        description: 'Battle-hardened composite outer armor and optics',
        meshNames: ['damagedHelmet', 'helmet', 'node_damagedHelmet'],
        defaultColor: '#ffffff',
        palette: [
          '#ffffff', // Arctic Factory
          '#0f172a', // Tactical Black Ops
          '#2874f0', // Cyber Flipkart Blue
          '#ef4444', // Hazard Red
          '#10b981', // Toxic Acid
          '#ffe500', // Warning Yellow
          '#8b5cf6', // Quantum Violet
          '#e2e8f0', // Titanium Silver
        ],
      },
    ],
  },
];

export const LIGHTING_PRESETS = [
  { id: 'studio', name: 'Studio White', icon: 'Sun', environment: 'studio', bg: '#0b111e' },
  { id: 'city', name: 'Showroom', icon: 'Building2', environment: 'city', bg: '#080d17' },
  { id: 'sunset', name: 'Sunset Warm', icon: 'Sunset', environment: 'sunset', bg: '#140f13' },
  { id: 'apartment', name: 'Interior', icon: 'Home', environment: 'apartment', bg: '#0d1116' },
];
