'use client';
import { usePathname } from 'next/navigation';

export default function LangSwitch() {
  const pathname = usePathname() || '/';
  const isAR = pathname.startsWith('/ar');
  const to = isAR ? pathname.replace(/^\/ar/, '') || '/' : '/ar' + (pathname === '/' ? '' : pathname);
  const label = isAR ? 'EN' : 'العربية';
  return <a href={to} className="lang-switch" data-ga="lang_switch" data-label={label}>{label}</a>;
}