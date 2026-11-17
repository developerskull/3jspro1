# 🛍️ Flipkart 3D Studio - Interactive 3D Product Experience

An authentic, portfolio-quality **Flipkart 3D E-Commerce Product Studio & Configurator** built with **React**, **Three.js**, **React Three Fiber (R3F)**, **Drei**, and **Tailwind CSS**.

Featuring Flipkart's iconic branding, real-time 3D model inspection, 60fps color transition (lerp), interactive multi-part selection on click/hover, Indian Rupee (₹) pricing, Flipkart Assured badges, live bank offers, pin-code delivery check, and an interactive **Add to Cart** & **Buy Now** checkout flow.

---

## 📸 Screenshots & Showcase

<!-- SCREENSHOTS PLACEHOLDER -->
| 👟 Nike Running Shoes | 🪑 Velvet Lounge Chair | ⌚ Chronograph Watch | 🕶️ Polarized Sunglasses | 🛡️ Cyber Combat Helmet |
| :---: | :---: | :---: | :---: | :---: |
| ![Shoe Viewer](https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80) | ![Chair Viewer](https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&auto=format&fit=crop&q=80) | ![Watch Viewer](https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80) | ![Sunglasses](https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&auto=format&fit=crop&q=80) | ![Helmet](https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400&auto=format&fit=crop&q=80) |

---

## 🛍️ Flipkart E-Commerce Features

### 1. Flipkart Brand Header & Navigation
- **Flipkart Logo & Plus Zone**: Iconic Flipkart branding with *Explore Plus ✦* and **3D** studio badge.
- **Search Bar**: Real-time product search by name, brand, or category.
- **Category Ribbon**: Instant filtering across *All 3D Products*, *Footwear*, *Home & Furniture*, *Watches*, *Eyewear*, and *Tech & Gaming*.
- **Interactive Cart**: Live badge count that updates on adding items, opening an authentic Flipkart checkout modal.

### 2. Flipkart Product Detail Panel
- **Indian Rupee (₹) Pricing**: Special discounted price, strikethrough original MRP, and discount percentage tags (e.g. `₹2,499` ~~₹5,999~~ `58% off`).
- **Flipkart Assured Badge**: The official `fAssured ✦` trust mark.
- **Ratings & Reviews**: Green star rating pill (`4.4 ★`) with review counts.
- **Bank & Special Offers**: Collapsible bank discounts (Flipkart Axis Bank 5% cashback, HDFC/SBI card discounts, No Cost EMI).
- **Delivery & PIN Code Checker**: Live checker for delivery estimates (e.g. *Free delivery by Tomorrow, 9 PM*).
- **Specifications & Highlights**: Technical specs and warranty information.
- **Action Buttons**:
  - 🛒 **ADD TO CART** (Flipkart Yellow `#FF9F00`)
  - ⚡ **BUY NOW** (Flipkart Orange `#FB641B`)

### 3. Interactive 3D WebGL Viewer
- **360° Free Rotation & Zoom**: Smooth OrbitControls with rotate and zoom limits, pan locked for a focused product showcase.
- **Click & Hover to Customize**: Click directly on parts of the 3D model to select and recolor them, with subtle emissive hover highlighting.
- **Smooth 60fps Color Lerp**: Color changes smoothly interpolate in `useFrame` rather than snapping abruptly.
- **Turntable Mode**: Auto-rotate toggle for automatic 360° presentation.
- **Lighting Environments**: Studio, Showroom, Sunset, and Interior presets with soft contact shadows.
- **Wireframe Topology**: Inspect 3D polygon geometry with one click.
- **High-Res Snapshot**: Download crisp PNG snapshots of customized products.

---

## 📦 5 Curated 3D Products in the Catalog

| Product | Brand | Category | Price (₹) | Discount | 3D Customizable Parts |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Aerostride Pro Runner** | AEROSTRIDE | Men's Footwear | ₹2,499 | 58% off | Upper Mesh Body |
| **Nordic Lounge Chair** | NORDIC LIVING | Home & Furniture | ₹14,999 | 54% off | Velvet Cushion, Wood Legs, Metal Hardware |
| **Acro Chronograph Watch** | ACRO SWISS | Luxury Horology | ₹8,999 | 64% off | Strap & Clasp, Bezel Casing, Dial Face, Crown Pushers, Hands |
| **Spectra Avant Sunglasses** | SPECTRA AVANT | Eyewear | ₹1,899 | 62% off | Acetate Frames, Polarized Lenses, Temples, Ear Hooks |
| **Apex Cyber Combat Helmet** | APEX CYBER | Tech & Gaming | ₹4,999 | 61% off | Armor Plating & HUD Visor |

### 3. Real-Time Color Customization
- **Multi-Part Isolation**: Recolors individual meshes and materials independently (e.g. Chair Fabric vs. Wood Frame vs. Metal Accents).
- **Smooth 60fps Color Lerp**: Color changes smoothly interpolate in the `useFrame` render loop rather than abruptly snapping.
- **Interactive 3D Click & Hover**: Click directly on parts of the 3D model to select and recolor them, with subtle emissive hover highlighting.
- **Curated Finishes & Custom Picker**: Preset color swatches plus a native HTML5 color picker and hex code input.
- **Shuffle & Reset**: Surprise randomize button and reset-to-factory buttons.

### 4. UI/UX & Quality
- **Glassmorphism Theme**: Sleek dark aesthetic with backdrop blur, glowing badges, and subtle radial gradient lighting.
- **Responsive Layout**: Floating side panel that collapses cleanly on smaller screens.
- **Loading Screen**: Real-time loading percentage and asset counter via `@react-three/drei`'s `useProgress`.
- **High-Res Snapshot**: Download crisp PNG screenshots with sanitized timestamp filenames.
- **Memory Management**: Deep-cloned materials prevent cache contamination; all geometries and materials properly dispose on unmount.
- **Performance**: Clamped DPR (`dpr={[1, 2]}`) to maintain a rock-solid 60 FPS across high-DPI displays.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **React 3D Engine**: [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- **3D Helpers**: [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [lucide-react](https://lucide.dev/)

---

## 📁 Project Structure

```text
3js/
├── public/
│   ├── models/
│   │   ├── shoe.glb             # MaterialsVariantsShoe (Khronos)
│   │   ├── chair.glb            # SheenChair (Khronos)
│   │   └── watch.glb            # ChronographWatch (Khronos)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Scene.jsx            # Canvas, OrbitControls, Environment, Shadows
│   │   ├── Model.jsx            # GLTF loader, lerp color engine, part raycaster
│   │   ├── ColorPanel.jsx       # Floating swatch drawer & hex picker
│   │   ├── ProductSelector.jsx  # Bottom pill tabs for product switching
│   │   ├── ControlsOverlay.jsx  # Header, toolbar, specs modal, toast notifications
│   │   ├── Loader.jsx           # Animated progress overlay with useProgress
│   │   └── ErrorBoundary.jsx    # Graceful fallback for 3D load errors
│   ├── data/
│   │   └── products.js          # Products config, camera targets, palettes, specs
│   ├── hooks/
│   │   └── useScreenshot.js     # Canvas WebGL PNG export hook
│   ├── App.jsx                  # Main application state & orchestration
│   ├── index.css                # Tailwind CSS v4 & custom scrollbars
│   └── main.jsx                 # React root entry
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
- `npm` or `pnpm`

### Installation
1. Clone or download the repository:
   ```bash
   git clone <repo-url>
   cd 3js
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser at:
   ```
   http://localhost:5173
   ```

---

## 📦 3D Model Files Included

The 3D assets are already bundled in the `/public/models/` folder:

| File Name | Asset Name | Source | License |
| :--- | :--- | :--- | :--- |
| `shoe.glb` | MaterialsVariantsShoe | [KhronosGroup glTF-Sample-Assets](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/MaterialsVariantsShoe) | CC0 / Sample Asset |
| `chair.glb` | SheenChair | [KhronosGroup glTF-Sample-Assets](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/SheenChair) | CC0 / Sample Asset |
| `watch.glb` | ChronographWatch | [KhronosGroup glTF-Sample-Assets](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/ChronographWatch) | CC0 / Sample Asset |
| `sunglasses.glb` | SunglassesKhronos | [KhronosGroup glTF-Sample-Assets](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/SunglassesKhronos) | CC0 / Sample Asset |
| `helmet.glb` | DamagedHelmet | [KhronosGroup glTF-Sample-Assets](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/DamagedHelmet) | CC0 / Sample Asset |

*Note: All models are downloaded and ready to use out-of-the-box. No manual downloads are required.*

---

## 🌐 Deployment to Vercel

You can deploy this project to [Vercel](https://vercel.com/) in less than a minute:

### Option A: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B: Via Git / GitHub
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.

---

## 📜 License

MIT License. Free to use for personal, portfolio, and commercial showcases.
