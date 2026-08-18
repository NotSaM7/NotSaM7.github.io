# Swayam Jain — macOS Desktop Portfolio

An interactive, high-performance macOS desktop portfolio experience showcasing full-stack applications, quantitative trading tools, and data science projects.

🌐 **Live Site:** [notsam7.github.io](https://notsam7.github.io/)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static HTML Export)
- **UI & Components**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations & Physics**: [Framer Motion](https://www.framer.com/motion/) (spring physics, dock magnification, window drag/minimize/maximize)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (window lifecycle, z-indexing, active app state)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Repository Structure

```
portfolio/
├── app/                  # Next.js App Router (layout, page, globals.css)
├── components/
│   ├── apps/             # Desktop App views (AboutMe, Projects, Skills, Resume, Contact)
│   └── os/               # macOS OS UI (BootScreen, Desktop, Dock, MenuBar, Window, DesktopIcon)
├── lib/
│   ├── fileSystem.ts     # Content inventory & app registry
│   └── windowManager.ts  # Zustand store for multi-window management
├── public/
│   ├── images/           # Developer photos and visual assets
│   ├── og-image.png      # OpenGraph social preview card
│   └── resume.pdf        # PDF Résumé for viewing & downloading
└── .github/workflows/    # Automated CI/CD deployment to GitHub Pages
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18.17+ or v20+)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

```bash
# Build and export static site to /out
npm run build
```
