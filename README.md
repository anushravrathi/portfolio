# Anushrav Rathi - Portfolio

A modern, interactive portfolio website showcasing full-stack development expertise with cutting-edge animations and a sleek dark theme.

## 🎨 Features

### Interactive Elements
- **Scrolly Canvas Animation** - Seamless 500vh scroll-triggered canvas animation sequence with 120 frame transitions
- **Custom Cursor** - Smooth, interactive custom cursor with hover effects (works on desktop)
- **Parallax Text Overlays** - Dynamic text animations that sync with scroll progress

### Content Sections
- **Hero Section** - Eye-catching animated introduction with canvas background
- **Tech Stack** - Infinite scrolling marquee showcasing technologies (React, React Native, Node.js, Express, MongoDB, TypeScript, Python, C++, Docker)
- **Selected Work** - Project showcase with gradients, images, and call-to-action buttons
- **About Me** - Dual-layout section with profile image and personal background
- **Experience** - Work history and extracurricular leadership roles
- **Contact** - Email, GitHub, and LinkedIn links with hover animations

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2.2](https://nextjs.org) - React 19.2.4
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) with custom configuration
- **Animations**: [Framer Motion 12.38](https://www.framer.com/motion)
- **TypeScript**: For type-safe development
- **Icons**: [React Icons](https://react-icons.github.io/react-icons) & [Lucide React](https://lucide.dev)
- **UI Utilities**: Clsx, Tailwind Merge

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/anushravrathi/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
yarn install
pnpm install
bun install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser. The page hot-reloads when you make edits.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles
├── components/
│   ├── ScrollyCanvas.tsx  # Canvas animation component
│   ├── Overlay.tsx        # Text overlays for canvas
│   ├── CustomCursor.tsx   # Custom cursor implementation
│   ├── TechStack.tsx      # Tech stack marquee
│   ├── Projects.tsx       # Project showcase
│   ├── About.tsx          # About me section
│   ├── Experience.tsx     # Work experience & leadership
│   └── Contact.tsx        # Contact section with links
```

## 🎬 Key Components

### ScrollyCanvas
Renders a 120-frame animation sequence that responds to scroll position. Images are preloaded and rendered on a canvas element for smooth performance.

### TechStack
An infinitely scrolling marquee displaying technologies with gradient borders and hover effects.

### Projects
Grid layout showcasing 4 selected projects with images, descriptions, tags, and links.

### Experience
Timeline-style display of professional experience and leadership roles.

## 💻 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Your Information
- Edit component content in `src/components/`
- Modify colors in Tailwind config and component classes
- Replace images in `public/` folder

### Add Projects
Edit the `projectMeta` array in [Projects.tsx](src/components/Projects.tsx) to add new projects.

### Update Contact Links
Edit email and social links in [Contact.tsx](src/components/Contact.tsx).

## 📦 Dependencies

- **Production**: React, Next.js, Framer Motion, Tailwind CSS, React Icons, Lucide React
- **Development**: TypeScript, ESLint, Tailwind CSS (dev tools)

## 📝 About

I'm a Full Stack Developer and React Native specialist studying Computer Science with AI specialization at VIT Bhopal University. I specialize in building scalable applications using the MERN stack and crafting robust project architectures.

- **Email**: ranushrav@gmail.com
- **GitHub**: [@anushravrathi](https://github.com/anushravrathi)
- **LinkedIn**: [@anushravrathi](https://linkedin.com/in/anushravrathi)

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Anushrav Rathi
