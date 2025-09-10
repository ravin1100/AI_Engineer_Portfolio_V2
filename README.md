# AI Engineer Portfolio - Ravin Kumar Jangir

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and professional design.

## Features

- 🌙 **Dark/Light Mode**: Beautiful theme toggle with smooth transitions
- 📱 **Responsive Design**: Optimized for all devices and screen sizes
- ⚡ **Performance**: Built with Next.js for optimal loading speeds
- 🎨 **Modern UI**: Clean, professional design with subtle animations
- 🚀 **Smooth Navigation**: Seamless scroll behavior between sections
- 📄 **Resume Integration**: Built-in resume viewing and download
- 💼 **Project Showcase**: Interactive project gallery
- 📧 **Contact Form**: Integrated contact functionality

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ravinkumar1/ai_engineer_portfolio.git
cd ai_engineer_portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

## Environment Variables

Create a `.env.local` file for any environment-specific variables:

```bash
# Add any API keys or configuration here
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## Customization

### Colors and Themes

The color scheme is defined in `src/app/globals.css`. Modify the CSS custom properties to change the theme:

```css
:root {
  --primary-500: 59 130 246; /* Blue */
  --gray-900: 17 24 39; /* Dark gray */
  /* Add your custom colors */
}
```

### Content

Update the following files to customize content:

- `src/components/Hero.tsx` - Hero section
- `src/app/page.tsx` - About section
- `src/components/Projects.tsx` - Projects showcase
- `src/components/Experience.tsx` - Work experience
- `src/components/Skills.tsx` - Skills and technologies

### Assets

Place your assets in the `assets/` directory:

- `profile_picture.png` - Your profile photo
- `resume.pdf` - Your resume file

## Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Font optimization with next/font
- ✅ Code splitting and lazy loading
- ✅ Compressed assets and caching headers
- ✅ SEO optimizations with proper meta tags

## Security Headers

The application includes security headers for production:

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- X-XSS-Protection: 1; mode=block

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

- **Email**: ravinkumarjangir@gmail.com
- **LinkedIn**: [linkedin.com/in/ravinkumarjangir](https://linkedin.com/in/ravinkumarjangir)
- **GitHub**: [github.com/ravinkumar1](https://github.com/ravinkumar1)

---

Built with ❤️ by Ravin Kumar Jangir
