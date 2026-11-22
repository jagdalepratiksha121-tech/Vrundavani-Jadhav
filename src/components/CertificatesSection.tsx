import { Award, ExternalLink, Eye, FileText, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CERTIFICATES, CertificateItem } from '../data/portfolioData';

function PdfCredentialVisual({ cert }: { cert: CertificateItem }) {
  if (cert.id === 'imarticus-cpp') {
    return (
      <div className="flex aspect-[4/3] w-full flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-br from-[#F7FAF9] to-[#E6F1ED] p-5 text-[#12382E]">
        <div className="flex items-center justify-between border-b border-[#12382E]/15 pb-3">
          <span className="font-display text-xs font-bold tracking-wide text-[#0F513E]">
            IMARTICUS LEARNING
          </span>
          <span className="font-mono text-[11px] font-medium text-[#12382E]/75">
            {cert.grade}
          </span>
        </div>

        <div className="my-auto text-center">
          <p className="text-[11px] font-semibold tracking-wider text-[#0F513E]/80">
            CERTIFICATE OF PROFICIENCY
          </p>
          <p className="mt-2 font-display text-lg font-bold text-[#0E241E]">
            C &amp; C++ Programming
          </p>
          <p className="mt-1 text-xs font-medium text-[#2A4D43]">
            Awarded to {cert.recipient}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-[#12382E]/15 pt-3 text-[11px] text-[#2A4D43]">
          <span>Skill India · NSDC</span>
          <span className="font-mono tabular-nums">ID: {cert.credentialId}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex aspect-[4/3] w-full flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-br from-[#FFFFFF] to-[#F3F5F8] p-5 text-[#1B2240]">
      <div className="flex items-center justify-between border-b border-[#1B2240]/10 pb-3">
        <span className="font-display text-xs font-bold tracking-wide text-[#1B2240]">
          BRAIN FOUNDATION
        </span>
        <span className="text-[11px] font-semibold text-[#D96B27]">2026 Membership</span>
      </div>

      <div className="my-auto text-center">
        <p className="text-[11px] font-semibold tracking-wider text-[#D96B27]">
          CERTIFICATE OF MEMBERSHIP
        </p>
        <p className="mt-2 font-display text-base font-bold text-[#142366]">
          {cert.recipient}
        </p>
        <p className="mt-1 text-xs text-[#47506E]">
          Bharat Research in AI and NextGen Foundation
        </p>
      </div>

      <div className="flex items-center justify-between border-t-4 border-[#1B9E4B] pt-2.5 text-[11px] text-[#35405C]">
        <span>{cert.platformOrPartner}</span>
        <span className="font-mono tabular-nums">{cert.credentialId}</span>
      </div>
    </div>
  );
}

export function CertificatesSection() {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);
  const [imgErrorIds, setImgErrorIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCert(null);
    };
    if (activeCert) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [activeCert]);

  return (
    <section id="certificates" className="border-t border-white/10 py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#B6ADFF]">
            Verified Learning &amp; Memberships
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Certificates
          </h2>
          <p className="mt-3 text-base text-[#C2C0D8]">
            Coursework, programming proficiency, and academic foundation credentials earned along
            my engineering journey.
          </p>
        </div>

        {/* 3-Column Certificates Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert) => {
            const hasImageError = imgErrorIds[cert.id];
            return (
              <article
                key={cert.id}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#131222] p-5 transition-colors hover:border-white/20"
              >
                <div>
                  {/* Visual Preview */}
                  {cert.assetType === 'image' && !hasImageError ? (
                    <button
                      type="button"
                      onClick={() => setActiveCert(cert)}
                      aria-label={`Inspect ${cert.title} certificate`}
                      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0D0D19] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                    >
                      <img
                        src={cert.assetPath}
                        alt={`${cert.title} certificate issued by ${cert.issuer}`}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setImgErrorIds((prev) => ({ ...prev, [cert.id]: true }))
                        }
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </button>
                  ) : cert.assetType === 'image' ? (
                    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-xl border border-white/10 bg-[#19172E] p-6 text-center">
                      <Award className="h-8 w-8 text-[#B6ADFF]" aria-hidden="true" />
                      <p className="mt-3 font-display text-sm font-semibold text-white">
                        {cert.title}
                      </p>
                      <p className="mt-1 text-xs text-[#9E9BB8]">{cert.issuer}</p>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveCert(cert)}
                      aria-label={`Inspect ${cert.title} certificate PDF`}
                      className="block w-full text-left transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF] rounded-xl"
                    >
                      <PdfCredentialVisual cert={cert} />
                    </button>
                  )}

                  {/* Metadata Line (Zero Pills) */}
                  <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#B6ADFF]">
                    <span className="font-medium">{cert.issuer}</span>
                    {cert.platformOrPartner && (
                      <>
                        <span aria-hidden="true" className="text-white/30">
                          ·
                        </span>
                        <span className="text-[#C8C6DC]">{cert.platformOrPartner}</span>
                      </>
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white">
                    {cert.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#C2C0D8]">
                    {cert.summary}
                  </p>

                  <div className="mt-4 space-y-1 border-t border-white/10 pt-3.5 text-xs text-[#9E9BB8] tabular-nums">
                    <p>
                      Issued: <span className="text-[#EAE8F8]">{cert.issuedDate}</span>
                      {cert.validUntil && (
                        <>
                          {' '}
                          · Valid until:{' '}
                          <span className="text-[#EAE8F8]">{cert.validUntil}</span>
                        </>
                      )}
                    </p>
                    {cert.credentialId && (
                      <p>
                        Credential ID:{' '}
                        <span className="font-mono text-[#EAE8F8]">{cert.credentialId}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-white/[0.08] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#5D4CE6] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A89BFF]"
                  >
                    <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    View Certificate
                  </button>

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-2 text-xs font-medium text-[#D4D2E6] transition-colors hover:border-white/30 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                    >
                      Verify
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <a
                      href={cert.assetPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-2 text-xs font-medium text-[#D4D2E6] transition-colors hover:border-white/30 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                    >
                      <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      Open PDF
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Certificate Lightbox / PDF Viewer Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#131222] shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
              <div className="min-w-0">
                <h3
                  id="certificate-modal-title"
                  className="truncate font-display text-lg font-bold text-white"
                >
                  {activeCert.title}
                </h3>
                <p className="truncate text-xs text-[#B6B3CC]">
                  {activeCert.issuer} · {activeCert.issuedDate}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {activeCert.verifyUrl ? (
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#5D4CE6] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#6E5EF2]"
                  >
                    Verify Online
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <a
                    href={activeCert.assetPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#5D4CE6] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#6E5EF2]"
                  >
                    Open Original PDF
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  aria-label="Close certificate viewer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto bg-[#0B0B14] p-4 md:p-6">
              {activeCert.assetType === 'image' ? (
                <img
                  src={activeCert.assetPath}
                  alt={activeCert.title}
                  referrerPolicy="no-referrer"
                  className="mx-auto max-h-[72vh] w-auto rounded-lg border border-white/10 object-contain"
                />
              ) : (
                <iframe
                  title={`${activeCert.title} PDF`}
                  src={activeCert.assetPath}
                  className="h-[72vh] w-full rounded-lg border border-white/10 bg-white"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
