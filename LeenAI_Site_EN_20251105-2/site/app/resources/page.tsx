
  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'LeenAI — Resources & Downloads',
    openGraph: { images: ['/og/resources.png'] }
  };

export default function Page() {
  return (
    <div className="container section">
      <h1>Resources & Downloads</h1>
      <p>One‑pagers and SOW templates to help you evaluate the pilot. (Downloads fire <code>doc_download</code> events.)</p>
      <ul>
        <li><a href="/downloads/LeenAI_CompanyProfile_2BMasterSOW_EN_11Oct2025.docx" download data-ga="download" data-label="LeenAI_CompanyProfile_2BMasterSOW_EN_11Oct2025.docx">LeenAI_CompanyProfile_2BMasterSOW_EN_11Oct2025.docx</a></li><li><a href="/downloads/LeenAI_Master_SOW_EN.docx" download data-ga="download" data-label="LeenAI_Master_SOW_EN.docx">LeenAI_Master_SOW_EN.docx</a></li><li><a href="/downloads/LeenAI_AI_Factory_Build_Spec_EN_v1.1.docx" download data-ga="download" data-label="LeenAI_AI_Factory_Build_Spec_EN_v1.1.docx">LeenAI_AI_Factory_Build_Spec_EN_v1.1.docx</a></li><li><a href="/downloads/AI_.docx" download data-ga="download" data-label="AI_.docx">AI_.docx</a></li>
      </ul>
    </div>
  );
}