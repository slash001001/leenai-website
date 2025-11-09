'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('leenai-theme');
    const initial = stored ? stored === 'dark' : prefers;
    setDark(initial);
    document.documentElement.classList.toggle('dark', initial);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('leenai-theme', dark ? 'dark' : 'light');
  }, [dark, mounted]);

  if (!mounted) return null;
  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setDark(v => !v)}
      className="btn"
      style={{marginLeft: 8, background: dark ? '#0B3D5C' : '#00AEBF'}}
      data-ga="toggle_theme"
      data-label={dark ? 'dark' : 'light'}
    >
      {dark ? 'Dark' : 'Light'}
    </button>
  );
}

