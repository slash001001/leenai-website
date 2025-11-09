'use client';
import { useEffect } from 'react';

export default function ClientAnalytics() {
  useEffect(() => {
    const handler = (e: any) => {
      const a = (e.target as HTMLElement)?.closest?.('a');
      if (!a) return;
      const ev = a.getAttribute('data-ga') || (a.hasAttribute('download') ? 'doc_download' : null);
      if (!ev) return;
      const label = a.getAttribute('data-label') || a.getAttribute('href') || '';
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', ev, { event_label: label });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
  return null;
}