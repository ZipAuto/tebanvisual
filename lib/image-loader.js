/**
 * Custom Next.js image loader for GitHub Pages static export.
 * next/image with output:'export' does NOT auto-prepend basePath to local src.
 * This loader does it explicitly.
 */
export default function imageLoader({ src }) {
  // External URLs (Vercel Blob, CDN, YouTube thumbnails) — return as-is
  if (src.startsWith('http') || src.startsWith('//') || src.startsWith('data:')) {
    return src
  }
  // Local paths — prepend GitHub Pages basePath
  return `/tebanvisual${src}`
}
