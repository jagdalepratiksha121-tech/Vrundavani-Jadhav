import { Check, Copy, ExternalLink, Mail } from 'lucide-react';
import { useState } from 'react';
import {
  APPROACH_SKILLS,
  DESIGN_SKILL_SET,
  PROFILE,
  TECHNOLOGY_SKILLS,
} from '../data/portfolioData';

export function AboutAndSkillsSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  return (
    <>
      {/* About Me Section */}
      <section id="about" className="relative py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Editorial Section Header */}
            <div className="lg:col-span-4">
              <div className="inline-flex items-center rounded-r-full bg-gradient-to-r from-[#5D4CE6] to-[#7A68F6] px-7 py-3 shadow-sm">
                <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  About me
                </h2>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-medium text-[#9E9BB8]">Education</p>
                <p className="mt-2 font-display text-lg font-semibold text-white">
                  B.Tech in Artificial Intelligence &amp; Data Science
                </p>
                <p className="mt-1 text-sm text-[#C8C6DC]">
                  2nd Year Engineering Student
                </p>
              </div>
            </div>

            {/* Natural, Grounded Introduction & Direct Contact */}
            <div className="lg:col-span-8">
              <div className="space-y-5 text-base leading-[1.75] text-[#DAD8EA] md:text-[17px]">
                <p>
                  I&apos;m Vrundavani Jadhav, a second-year B.Tech student specializing in{' '}
                  <span className="font-medium text-white">
                    Artificial Intelligence and Data Science
                  </span>
                  . Alongside building a strong foundation in programming and analytical thinking, I
                  am deeply interested in how people actually experience the tools they use.
                </p>
                <p>
                  What excites me most is sitting at the intersection of{' '}
                  <span className="font-medium text-white">creativity and technology</span> —
                  taking time to understand user needs, breaking down complex problems into clear
                  steps, and shaping interfaces and ideas that feel purposeful, legible, and
                  genuinely helpful.
                </p>
                <p className="text-[#BEBBD4]">
                  Right now, I&apos;m strengthening my core fundamentals in C, C++, AI concepts,
                  and Data Science while working on hands-on projects like FinWise to turn
                  classroom concepts into practical work.
                </p>
              </div>

              {/* Direct Contact Coordinates */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <h3 className="font-display text-lg font-semibold text-white">
                  Direct Coordinates
                </h3>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center justify-between gap-3 py-1">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="inline-flex min-w-0 items-center gap-2.5 text-sm text-[#DAD8EA] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF] rounded-sm"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-[#A89BFF]" aria-hidden="true" />
                      <span className="truncate">{PROFILE.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border border-white/15 px-2.5 text-xs font-medium text-[#D4D2E6] transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-6 py-1">
                    <a
                      href={PROFILE.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#DAD8EA] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF] rounded-sm whitespace-nowrap shrink-0"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#A89BFF]" aria-hidden="true" />
                    </a>
                    <span className="text-white/25" aria-hidden="true">
                      /
                    </span>
                    <a
                      href={PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#DAD8EA] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF] rounded-sm whitespace-nowrap shrink-0"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#A89BFF]" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section — Signature Iris Monograph Panel (inspired by reference image) */}
      <section id="skills" className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#5B4CE0] via-[#4D3EC9] to-[#3B2FA6] px-7 py-12 text-white shadow-xl md:px-14 md:py-16">
            {/* Subtle internal light wash */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Education & Technology Monogram Tiles */}
              <div className="lg:col-span-6">
                <div>
                  <p className="text-xs font-medium tracking-wide text-white/75">
                    Skills &amp; Foundations
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
                    Technology
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                    Core technical disciplines I am actively building across my engineering
                    coursework and personal study.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {TECHNOLOGY_SKILLS.map((skill) => (
                    <div key={skill.code} className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${skill.accentBg} font-display ${
                          skill.code.length > 3 ? 'text-xs' : 'text-lg'
                        } font-bold tracking-tight ${skill.accentText} shadow-md`}
                      >
                        {skill.code}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-base font-semibold text-white">
                          {skill.name}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/80">
                          {skill.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Design & Problem-Solving Columns with Clean Hairline Dividers */}
              <div className="flex flex-col justify-between gap-10 border-t border-white/20 pt-10 lg:col-span-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                    Design &amp; Problem Solving
                  </h3>
                  <div className="mt-6 space-y-4">
                    {DESIGN_SKILL_SET.map(([left, right], index) => (
                      <div
                        key={left}
                        className={`grid grid-cols-2 items-center gap-4 text-sm font-medium text-white/95 ${
                          index !== DESIGN_SKILL_SET.length - 1
                            ? 'border-b border-white/15 pb-4'
                            : ''
                        }`}
                      >
                        <span>{left}</span>
                        <span className="border-l border-white/25 pl-4">{right}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                    Approach &amp; Mindset
                  </h3>
                  <div className="mt-5 space-y-4">
                    {APPROACH_SKILLS.map(([left, right], index) => (
                      <div
                        key={left}
                        className={`grid grid-cols-2 items-center gap-4 text-sm font-medium text-white/95 ${
                          index !== APPROACH_SKILLS.length - 1
                            ? 'border-b border-white/15 pb-4'
                            : ''
                        }`}
                      >
                        <span>{left}</span>
                        <span className="border-l border-white/25 pl-4">{right}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/85">
                  <span>
                    Interests: <strong className="font-semibold text-white">UI/UX Clarity</strong>{' '}
                    · <strong className="font-semibold text-white">AI Systems</strong> ·{' '}
                    <strong className="font-semibold text-white">Creative Technology</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
