# English with Sarah - Blog Website

A sleek, modern, and accessible blog website for an English language teacher, built with Vite + React.

## Features
- **Sleek Interface**: Clean, professional design with a Slate-50 background and Blue-600 accents.
- **Dark Mode**: Fully supported with persistence in localStorage.
- **Dynamic Routing**: Implementation of Home, Article, Contact, and 404 pages using `react-router-dom`.
- **Content Management**: Local JSON data for blog posts with Markdown body support.
- **SEO Ready**: Dynamic title and meta tag updates for every page.
- **Responsive**: Mobile-first design using Flexbox and CSS Grid.
- **Performance**: Code-splitting and lazy-loading for a fast user experience.

## Colors Used
| Role | Color | Hex | Justification |
|------|-------|-----|---------------|
| Primary | Blue-600 | `#2563eb` | Trustworthy, professional, and associated with education. |
| Background | Slate-50 | `#f8fafc` | Clean, easy on the eyes, and modern. |
| Text | Slate-900 | `#0f172a` | High contrast for maximum readability. |
| Surface | White | `#ffffff` | Clearly defines card and section boundaries. |

## Folder Structure
- `src/components`: Reusable UI elements (Header, Footer, PostCard, etc.)
- `src/pages`: Main page components (Home, Article, Contact, NotFound)
- `src/context`: Global application state (Theme, Pagination)
- `src/data`: JSON files containing blog content
- `src/lib`: Shared utilities and helpers
- `src/types`: TypeScript interfaces and types

## Running Locally
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start development server**:
   ```bash
   npm run dev
   ```
3. **Build for production**:
   ```bash
   npm run build
   ```

## Adding More Posts
To add a new article, simply update `src/data/posts.json` with a new object following the `Post` interface. The app automatically maps the `slug` to the URL.
