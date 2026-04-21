import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function updateMeta(title: string, description: string) {
  document.title = `${title} | English with Sarah`;
  
  // Find or create description meta
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.setAttribute('content', title);
  if (!ogTitle.parentNode) document.head.appendChild(ogTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
  ogDesc.setAttribute('property', 'og:description');
  ogDesc.setAttribute('content', description);
  if (!ogDesc.parentNode) document.head.appendChild(ogDesc);
}
