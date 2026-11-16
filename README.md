# 🌟 3D Interactive Product Studio

A portfolio-quality, modern interactive 3D product configurator and viewer built with **React**, **Three.js**, **React Three Fiber (R3F)**, **Drei**, and **Tailwind CSS**.

Featuring dynamic 3D model switching, 60fps color transition (lerping), interactive multi-part selection on mouse click/hover, realistic PBR lighting environments, contact shadows, auto-turntable mode, wireframe inspection, and instant high-resolution PNG screenshot exports.

---

## 📸 Screenshots & Showcase

<!-- SCREENSHOTS PLACEHOLDER -->
| 👟 Shoe Customizer | 🪑 Lounge Chair | ⌚ Chronograph Timepiece |
| :---: | :---: | :---: |
| ![Shoe Viewer](https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80) | ![Chair Viewer](https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=80) | ![Watch Viewer](https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80) |

> *Tip: Replace the placeholder images above with your own captured screenshots using the in-app **Take Screenshot (📸)** button!*

---

## ✨ Features

### 1. 3D WebGL Viewer
- **GLTF/GLB Streaming**: High-fidelity 3D model loading via `@react-three/drei`'s `useGLTF`.
- **Preloading**: Models are preloaded upfront using `useGLTF.preload` for instantaneous switching without lag.
- **Constrained OrbitControls**: Smooth damping, zoom limits (`minDistance` / `maxDistance`), rotation limits, and panning disabled for a focused product showcase.
- **Auto-Rotate (Turntable)**: Toggle continuous slow presentation rotation.
- **Realistic PBR Lighting**:
  - Soft grounded contact shadows via `ContactShadows`.
  - Dynamic HDRI Environment map presets (*Studio*, *Urban City*, *Sunset Warmth*, *Interior Warm*).
  - Multi-directional key, rim, and fill lighting.
- **Wireframe Topology View**: Inspect 3D polygon meshes and geometry with one click.
- **Reset Camera**: Instantly animate camera and focal target back to default framing.

### 2. Product Switcher
- **3 Sample CC0 Products**:
  1. **Aerostride Pro Runner**: Athletic sneaker with customizable upper body.
  2. **Nordic Sheen Lounge Chair**: Scandinavian accent chair with customizable velvet fabric, solid hardwood legs, and brass hardware.
  3. **Acro Chronograph Watch**: Luxury timepiece with customizable carbon strap, bezel ring, dial face, pushers, and hands.
- **Smooth Switch Transitions**: Animated entrance scaling and camera recalibration when alternating between items.
- **Centralized Data Config**: Configured cleanly in [`src/data/products.js`](src/data/products.js) with specs, pricing, camera limits, and material palettes.

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
