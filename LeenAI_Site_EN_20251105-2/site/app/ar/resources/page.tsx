  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'لينAI — الموارد والتحميلات',
    openGraph: { images: ['/og/resources.png'] }
  };

export default function Page() {
  return (
    <div dir="rtl" className="container section">
      <h1>الموارد والتحميلات</h1>
      <p>ملفات تعريفيّة وSOW لتقييم البايلوت. (التحميلات تُسجّل كأحداث Analytics.)</p>
      <ul>
        <li><a href="/downloads/LeenAI_CompanyProfile_2BMasterSOW_EN_11Oct2025.docx" download data-ga="download" data-label="CompanyProfile+SOW">Company Profile + SOW</a></li>
        <li><a href="/downloads/LeenAI_Master_SOW_EN.docx" download data-ga="download" data-label="Master_SOW_EN">Master SOW</a></li>
        <li><a href="/downloads/LeenAI_AI_Factory_Build_Spec_EN_v1.1.docx" download data-ga="download" data-label="Build_Spec_EN_v1.1">AI Factory Build Spec</a></li>
      </ul>
    </div>
  );
}

