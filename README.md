# Portfolio — Vansh Patel

A modern, performant single-page portfolio built with React and Vite. Showcases projects, features smooth animations powered by Framer Motion, and provides an excellent user experience across all devices.

## ✨ Key Features

- **Modern Stack**: React 19 + Vite for fast development and optimized builds
- **Smooth Animations**: Framer Motion library for fluid, professional transitions
- **Responsive Design**: Mobile-first approach optimized for all screen sizes
- **Performance Focused**: Optimized build with lazy loading and code splitting
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Project Showcase**: Gallery featuring LeafCure and other key projects

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm (or yarn/pnpm)

### Installation & Development

```bash
# Clone and setup
git clone https://github.com/vanshpatel-017/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Development server runs on `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── CONTRIBUTING.md         # Contribution guidelines
└── src/
    ├── main.jsx            # React root initialization
    ├── App.jsx             # Main application component
    ├── styles.css          # Global styles and animations
└── public/
    └── assets/
        ├── images/         # Project screenshots and media
        └── Vansh_Patel_Resume.pdf  # Resume download
```

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Animation Library**: Framer Motion 12
- **Routing**: React Router DOM 7
- **Styling**: Modern CSS with CSS Variables
- **Development**: Node.js environment

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |

## 🌐 Deployment

This project builds to a static bundle that can be deployed to:
- **GitHub Pages** - Free hosting directly from repository
- **Vercel** - One-click deployment with automatic builds
- **Netlify** - Continuous deployment with custom domain support
- **Any static host** - Drop-in the `dist/` folder

### Deploy to GitHub Pages

```bash
npm run build
# Push the dist/ folder to gh-pages branch
```

## 🎨 Customization

The portfolio uses CSS Variables for easy theme customization. Update the `:root` section in `src/styles.css`:

```css
:root {
  --primary-color: #0f172a;
  --secondary-color: #1e293b;
  --accent-color: #0ea5e9;
  --text-light: #e2e8f0;
  --text-muted: #94a3b8;
}
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.
- Update `public/assets/images/leafcure/` and resume link in the app to keep content current.

Contributing
- Feel free to open issues or PRs—keep changes small and focused.

License
- MIT

Author
- Vansh Patel — vanshpatel-017 (GitHub)

Contact
- GitHub: https://github.com/vanshpatel-017
