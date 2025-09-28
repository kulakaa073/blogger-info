# Blogger Info - Video Course Landing Page

A modern, responsive landing page for an online video course "Секрети вірусних відео" (Secrets of Viral Videos), built with Next.js 15 and optimized for performance.

## 🚀 Features

- **Multi-language Support**: Ukrainian (default) and English
- **Responsive Design**: Optimized for mobile (393px) and desktop (1280px+) viewports
- **Performance Optimized**:
  - Next.js Image optimization with WebP/AVIF formats
  - Server-side compression
  - Minimal redirects
  - Optimized font loading
- **Modern UI/UX**:
  - Smooth scroll navigation
  - Gradient effects and blur overlays
  - Custom SVG sprite system
  - Accessible design with ARIA labels

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: 
  - Google Fonts (Raleway, Manrope)
  - Custom font (Sansation)
- **Image Optimization**: Next.js Image component

## 📦 Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Run development server
npm run dev
```
Open http://localhost:3000 to view it in the browser.

## 🏗 Project Structure

```bash
├── app/
│   ├── [lang]/           # Localized routes
│   ├── globals.css       # Global styles
│   ├── robots.ts         # SEO robots configuration
│   └── api/         
│       └── telegram/     # Backend route for Telegram bot integration
├── components/
│   ├── Hero/             # Hero section
│   ├── PlanBlock/        # Pricing plans
│   ├── PromoBlock/       # CTA section
│   ├── Header/           # Navigation header
│   ├── BackgroundEffects/ # Decorative elements
│   └── ui/               # Reusable UI components
├── lib/
│   ├── api/              # External API integrations
│   ├── fonts/            # Connecting custom fonts
│   ├── translations.ts   # i18n content
│   └── utils/            # Utility functions
├── hooks/                # Custom hooks 
├── public/
│   ├── images/           # Optimized images (WebP)
│   └── fonts/            # Custom fonts
└── middleware.ts         # Language detection & routing
```

## 🌐 Internationalization

The site supports language switching between Ukrainian and English:

Default: Ukrainian (``/`` or ``/uk``)
English: ``/en``
Language preference is stored in cookies

## ⚡ Performance Optimizations

Images: Converted to WebP format, responsive sizing with srcset
Compression: Gzip enabled for all text assets
Caching: Optimized middleware for language detection
Critical CSS: Inlined for above-the-fold content
Font Loading: Optimized with font-display: swap

## 🎨 Customization

# Tailwind Configuration
Custom breakpoints:
```bash
screens: {
  'ds': '1280px', // Desktop
  'mb': '393px',  // Mobile
}
```
# Image Sizes
Configured for specific breakpoints:
```bash
deviceSizes: [393, 1280, 1920]
imageSizes: [313, 644]
```

## 📝 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
optimize-images    # Convert images to webp format using sharp, see scripts/covert-images.js
```

## 🔧 Configuration
Key configurations in ``next.config.ts``:

Image optimization settings
Compression enabled
Custom device sizes for responsive images

## 👤 Author

Kulak Oleksii

## 🐛 Known Issues

Sansation font may show browser warnings (harmless, font still renders correctly)

## 📄 License

MIT License

Copyright (c) 2025 Kulak Oleksii

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
