
import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Poppins } from 'next/font/google';

import ClientAnalytics from '../components/ClientAnalytics';
import LangSwitch from '../components/LangSwitch';
import ThemeToggle from '../components/ThemeToggle';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400','600'], subsets: ['latin'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'LeenAI — AI Pilot Studio (KSA)',
  description: 'Practical AI pilots for Saudi businesses — measurable in 6–8 weeks. PDPL-ready, on‑prem options.',
  openGraph: {
    title: 'LeenAI — AI Pilot Studio (KSA)',
    description: 'Practical AI pilots for Saudi businesses — measurable in 6–8 weeks.',
    url: 'https://leenai.sa',
    siteName: 'LeenAI',
    images: [{ url: '/og/home.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  alternates: { canonical: 'https://leenai.sa' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <header className="site-header">
          <div className="container navbar">
            <a className="logo" href="/">LeenAI</a>
            <ul className="nav">
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/use-cases">Use Cases</a></li>
              <li><a href="/architecture">Architecture</a></li>
              <li><a href="/catalog">Catalog</a></li>
              <li><a href="/integrations">Integrations</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a className="btn" href="/contact">Contact</a></li>
            </ul>
            <div style={{display:'flex',alignItems:'center'}}>
              <LangSwitch />
              <ThemeToggle />
            </div>
          </div>
          <div style={{position:"absolute",right:12,top:12,background:"#0b3d5c",color:"#fff",padding:"2px 6px",borderRadius:4,fontSize:12}}>Beta</div>
        </header>
        <main>{children}</main>
        <ClientAnalytics />
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} LeenAI • PDPL‑aware • On‑prem options</p>
          </div>
        </footer>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''}`} strategy="afterInteractive" />
<Script id="ga4-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    var GAID = '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''}';
    if (GAID) { gtag('config', GAID); }
  `}
</Script>
            <Script id="ld-org" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LeenAI",
    "url": "https://leenai.sa",
    "logo": "/logo.svg",
    "sameAs": []
  })}
</Script>
<Script id="ld-website" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://leenai.sa",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://leenai.sa/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  })}
</Script>
<Script id="ld-service" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Pilot Studio",
    "serviceType": "AI pilot (6–8 weeks)",
    "provider": {"@type":"Organization","name":"LeenAI"},
    "areaServed": {"@type":"Country","name":"Saudi Arabia"},
    "offers": {"@type":"Offer","priceCurrency":"SAR","priceSpecification":[
      {"@type":"UnitPriceSpecification","name":"Mini-Pilot","price":20000},
      {"@type":"UnitPriceSpecification","name":"Full-Pilot","price":60000}
    ]}
  })}
</Script>
      </body>
    </html>
  );
}
