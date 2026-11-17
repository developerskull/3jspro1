/**
 * Flipkart 3D Studio - Product Catalog Configuration
 * Detailed e-commerce metadata with Indian Rupee (₹) pricing, Flipkart Assured badges,
 * bank offers, delivery estimates, specs, customizable 3D parts, and signature curated colorways.
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
    colorways: [
      {
        id: 'flipkart_edition',
        name: 'Flipkart Signature',
        description: 'Iconic Flipkart Royal Blue with Electric Yellow volt accents',
        colors: { shoe_body: '#2874f0' },
        preview: ['#2874f0', '#ffe500'],
      },
      {
        id: 'cyberpunk_volt',
        name: 'Cyberpunk Volt',
        description: 'Electrifying neon acid green and stealth contrast',
        colors: { shoe_body: '#00ff88' },
        preview: ['#00ff88', '#0f172a'],
      },
      {
        id: 'tiffany_aqua',
        name: 'Tiffany Glacier',
        description: 'Luxurious Tiffany mint aqua with cloud white contrast',
        colors: { shoe_body: '#06b6d4' },
        preview: ['#06b6d4', '#f8fafc'],
      },
      {
        id: 'bred_chicago',
        name: 'Bred Chicago',
        description: 'Timeless basketball bred combo with bold crimson red',
        colors: { shoe_body: '#dc2626' },
        preview: ['#dc2626', '#09090b'],
      },
      {
        id: 'triple_white',
        name: 'Triple Clean White',
        description: 'Minimalist pristine aesthetic with subtle pearlescent sheen',
        colors: { shoe_body: '#ffffff' },
        preview: ['#ffffff', '#e2e8f0'],
      },
      {
        id: 'midnight_stealth',
        name: 'Midnight Stealth',
        description: 'All-black murdered-out tactical obsidian finish',
        colors: { shoe_body: '#09090b' },
        preview: ['#09090b', '#27272a'],
      },
    ],
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
          '#2874f0', // Flipkart Royal Blue
          '#00ff88', // Cyber Neon Volt
          '#06b6d4', // Tiffany Aqua
          '#dc2626', // Chicago Crimson
          '#ffe500', // Electric Yellow
          '#8b5cf6', // Cyber Lavender
          '#ea580c', // Sunset Neon Tangerine
          '#ec4899', // Hot Pink
          '#10b981', // Sport Emerald
          '#d97706', // Desert Wheat
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
    colorways: [
      {
        id: 'royal_emerald',
        name: 'Royal Emerald & Brass',
        description: 'Deep forest green velvet with dark walnut legs and brushed brass',
        colors: { fabric: '#064e3b', wood: '#3b2210', metal: '#fbbf24' },
        preview: ['#064e3b', '#3b2210', '#fbbf24'],
      },
      {
        id: 'bordeaux_luxury',
        name: 'Bordeaux Velvet & Rose Gold',
        description: 'Rich wine red velvet with ebonized legs and rose gold joinery',
        colors: { fabric: '#7f1d1d', wood: '#1c1917', metal: '#f43f5e' },
        preview: ['#7f1d1d', '#1c1917', '#f43f5e'],
      },
      {
        id: 'flipkart_royal',
        name: 'Flipkart Royal Blue',
        description: 'Signature Flipkart deep royal blue with warm walnut and gold',
        colors: { fabric: '#2874f0', wood: '#78350f', metal: '#fbbf24' },
        preview: ['#2874f0', '#78350f', '#fbbf24'],
      },
      {
        id: 'scandi_terracotta',
        name: 'Nordic Terracotta & Oak',
        description: 'Warm terracotta velvet with natural blonde oak and chrome',
        colors: { fabric: '#c2410c', wood: '#d97706', metal: '#cbd5e1' },
        preview: ['#c2410c', '#d97706', '#cbd5e1'],
      },
      {
        id: 'coastal_teal',
        name: 'Coastal Teal & Beech',
        description: 'Lush oceanic teal with Scandinavian bleached beech legs',
        colors: { fabric: '#0f766e', wood: '#fed7aa', metal: '#cbd5e1' },
        preview: ['#0f766e', '#fed7aa', '#cbd5e1'],
      },
      {
        id: 'midnight_charcoal',
        name: 'Midnight Charcoal Ops',
        description: 'Matte charcoal slate velvet with black ash legs and gunmetal',
        colors: { fabric: '#1e293b', wood: '#0f172a', metal: '#64748b' },
        preview: ['#1e293b', '#0f172a', '#64748b'],
      },
    ],
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
          '#064e3b', // Royal Emerald
          '#7f1d1d', // Bordeaux Wine
          '#0f766e', // Coastal Teal
          '#c2410c', // Terracotta Rust
          '#1e1b4b', // Midnight Navy
          '#334155', // Charcoal Slate
          '#f8fafc', // Oyster Pearl
          '#9333ea', // Royal Amethyst
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
          '#0f172a', // Midnight Ash
        ],
      },
      {
        id: 'metal',
        name: 'Hardware & Accents',
        description: 'Metal brackets and reinforcement joints',
        meshNames: ['SheenChair_metal'],
        defaultColor: '#cbd5e1',
        palette: [
          '#fbbf24', // Champagne Gold
          '#f43f5e', // Rose Gold
          '#cbd5e1', // Polished Chrome
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
    colorways: [
      {
        id: 'ferrari_corsa',
        name: 'Scuderia Corsa Racing',
        description: 'Scarlet red strap, titanium bezel, obsidian dial, and yellow racing hands',
        colors: { strap: '#dc2626', bezel: '#475569', dial: '#0f172a', buttons: '#e2e8f0', hands: '#ffe500' },
        preview: ['#dc2626', '#475569', '#0f172a', '#ffe500'],
      },
      {
        id: 'hulk_emerald',
        name: 'Rolex "Hulk" Emerald',
        description: 'British forest green dial and strap with 18K yellow gold bezel',
        colors: { strap: '#064e3b', bezel: '#fbbf24', dial: '#022c22', buttons: '#fbbf24', hands: '#fbbf24' },
        preview: ['#064e3b', '#fbbf24', '#022c22', '#fbbf24'],
      },
      {
        id: 'seamaster_blue',
        name: 'Omega Seamaster Maritime',
        description: 'Deep maritime navy dial with stainless bezel and high-viz orange hands',
        colors: { strap: '#1e3a8a', bezel: '#e2e8f0', dial: '#0f244a', buttons: '#e2e8f0', hands: '#ea580c' },
        preview: ['#1e3a8a', '#e2e8f0', '#0f244a', '#ea580c'],
      },
      {
        id: 'stealth_phantom',
        name: 'Blackout Phantom Ops',
        description: 'Complete blackout DLC finish with crimson red chronograph hands',
        colors: { strap: '#09090b', bezel: '#18181b', dial: '#09090b', buttons: '#27272a', hands: '#ef4444' },
        preview: ['#09090b', '#18181b', '#ef4444'],
      },
      {
        id: 'flipkart_chronos',
        name: 'Flipkart Velocity Edition',
        description: 'Flipkart royal blue strap with polished silver case and electric yellow hands',
        colors: { strap: '#2874f0', bezel: '#e2e8f0', dial: '#0f172a', buttons: '#2874f0', hands: '#ffe500' },
        preview: ['#2874f0', '#e2e8f0', '#0f172a', '#ffe500'],
      },
      {
        id: 'rose_gold_luxe',
        name: 'Rose Gold Royal Master',
        description: 'Gleaming rose gold bezel with sunburst silver dial and chocolate strap',
        colors: { strap: '#451a03', bezel: '#f43f5e', dial: '#f8fafc', buttons: '#f43f5e', hands: '#f43f5e' },
        preview: ['#451a03', '#f43f5e', '#f8fafc'],
      },
    ],
    parts: [
      {
        id: 'strap',
        name: 'Strap & Clasp',
        description: 'Textured carbon strap and security buckle',
        meshNames: ['Band Carbon Fiber', 'Band Plastic', 'Clasp DGG'],
        defaultColor: '#1e293b',
        palette: [
          '#1e293b', // Stealth Onyx
          '#2874f0', // Flipkart Royal Blue
          '#dc2626', // Ferrari Corsa Red
          '#064e3b', // British Racing Green
          '#1e3a8a', // Deep Ocean Navy
          '#451a03', // Chocolate Leather
          '#d97706', // Saddle Cognac
          '#f8fafc', // Arctic White
          '#ea580c', // High-Viz Tangerine
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
          '#2874f0', // Anodized Blue
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
          '#0f244a', // Maritime Blue
          '#022c22', // Deep Forest Green
          '#7f1d1d', // Burgundy
          '#f8fafc', // Sunburst Silver
          '#ffe500', // Speed Yellow
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
          '#f43f5e', // Rose Gold
          '#2874f0', // Flipkart Blue
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
          '#ffe500', // Electric Speed Yellow
          '#ef4444', // High-Viz Red
          '#ea580c', // Bright Orange
          '#fbbf24', // Golden Arrow
          '#38bdf8', // Cyan Luminescent
          '#f8fafc', // Pure White
          '#22c55e', // Toxic Lime
          '#f43f5e', // Rose Gold
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
    colorways: [
      {
        id: 'miami_sunset',
        name: 'Miami Vice Sunset',
        description: 'Havana tortoiseshell acetate with sunset amber lenses & warm gold temples',
        colors: { frames: '#78350f', lenses: '#ea580c', temples: '#fbbf24', earhooks: '#0f172a' },
        preview: ['#78350f', '#ea580c', '#fbbf24'],
      },
      {
        id: 'glacier_ice',
        name: 'Glacier Polar Ice',
        description: 'Crystal frost clear frames with polarized sapphire mirror lenses & chrome',
        colors: { frames: '#e2e8f0', lenses: '#0284c7', temples: '#cbd5e1', earhooks: '#0284c7' },
        preview: ['#e2e8f0', '#0284c7', '#cbd5e1'],
      },
      {
        id: 'matrix_noir',
        name: 'Hollywood Noir',
        description: 'Piano gloss black frames with 100% pitch black polarized lenses & gunmetal',
        colors: { frames: '#0a0a0a', lenses: '#000000', temples: '#27272a', earhooks: '#000000' },
        preview: ['#0a0a0a', '#000000', '#27272a'],
      },
      {
        id: 'cyber_vapor',
        name: 'Cyberpunk Neon Orchid',
        description: 'Deep violet acetate frames with iridescent violet lenses & cyan temples',
        colors: { frames: '#581c87', lenses: '#a855f7', temples: '#06b6d4', earhooks: '#a855f7' },
        preview: ['#581c87', '#a855f7', '#06b6d4'],
      },
      {
        id: 'flipkart_edition',
        name: 'Flipkart Signature Wave',
        description: 'Flipkart royal blue frames with yellow flash lenses and gold temples',
        colors: { frames: '#2874f0', lenses: '#ffe500', temples: '#fbbf24', earhooks: '#2874f0' },
        preview: ['#2874f0', '#ffe500', '#fbbf24'],
      },
    ],
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
          '#581c87', // Deep Violet
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
          '#ea580c', // Sunset Amber
          '#ffe500', // Flash Yellow Mirror
          '#a855f7', // Purple Haze
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
          '#06b6d4', // Electric Cyan
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
          '#a855f7', // Violet
          '#0284c7', // Aqua
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
    colorways: [
      {
        id: 'cyberpunk_2077',
        name: 'Night City Cyberpunk',
        description: 'Hazard electric yellow composite with battle scoring',
        colors: { helmet_shell: '#eab308' },
        preview: ['#eab308', '#06b6d4'],
      },
      {
        id: 'doom_crimson',
        name: 'Doom Crimson Slayer',
        description: 'Blood red military ballistic coating with blackened carbon wear',
        colors: { helmet_shell: '#991b1b' },
        preview: ['#991b1b', '#0f172a'],
      },
      {
        id: 'arctic_ghost',
        name: 'Ghost Recon Arctic',
        description: 'Pure snow camouflage with titanium alloy sheen',
        colors: { helmet_shell: '#f8fafc' },
        preview: ['#f8fafc', '#38bdf8'],
      },
      {
        id: 'flipkart_mecha',
        name: 'Flipkart Mecha Titan',
        description: 'Official Flipkart royal blue armor plating with yellow HUD glow',
        colors: { helmet_shell: '#2874f0' },
        preview: ['#2874f0', '#ffe500'],
      },
      {
        id: 'obsidian_shadow',
        name: 'Shadow Blackout Ops',
        description: 'Radar-absorbent stealth carbon obsidian shell',
        colors: { helmet_shell: '#0a0a0a' },
        preview: ['#0a0a0a', '#27272a'],
      },
    ],
    parts: [
      {
        id: 'helmet_shell',
        name: 'Armor Shell & Optics',
        description: 'Battle-hardened composite outer armor and optics',
        meshNames: ['damagedHelmet', 'helmet', 'node_damagedHelmet'],
        defaultColor: '#ffffff',
        palette: [
          '#ffffff', // Arctic Factory
          '#0a0a0a', // Tactical Black Ops
          '#2874f0', // Cyber Flipkart Blue
          '#eab308', // Cyberpunk Yellow
          '#991b1b', // Hazard Crimson
          '#06b6d4', // Neon Cyan
          '#10b981', // Toxic Acid Green
          '#8b5cf6', // Quantum Violet
          '#ea580c', // Molten Orange
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
