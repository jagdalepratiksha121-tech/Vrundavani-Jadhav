import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { PROFILE } from '../data/portfolioData';

export function ContactAndFooter() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formNotice, setFormNotice] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Clipboard fallback ignored
    }
  };

  const handleComposeMail = (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormNotice(null);

    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setFormError('Please fill in your name, email address, and message.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName.trim()}`);
    const body = encodeURIComponent(
      `Hi Vrundavani,\n\n${message.trim()}\n\nBest regards,\n${senderName.trim()}\n(${senderEmail.trim()})`
    );

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setFormNotice('Opening your default email client with your prepared message.');
  };

  return (
    <>
      <section id="contact" className="border-t border-white/10 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Connect Intro & Direct Channels */}
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-[#B6ADFF]">Get in Touch</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Let&apos;s Connect
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#C2C0D8]">
                I&apos;m always glad to connect around student projects, AI &amp; Data Science
                collaborations, UI/UX learning opportunities, or thoughtful conversations about
                technology.
              </p>

              <div className="mt-8 space-y-5 border-t border-white/10 pt-8">
                <div>
                  <p className="text-xs font-medium text-[#9E9BB8]">Email</p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="inline-flex items-center gap-2 font-display text-base font-semibold text-white transition-colors hover:text-[#C4BAFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF] rounded-sm"
                    >
                      <Mail className="h-4 w-4 text-[#A89BFF]" aria-hidden="true" />
                      {PROFILE.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex min-h-[34px] items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1 text-xs font-medium text-[#D4D2E6] transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
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
                </div>

                <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium text-[#9E9BB8]">GitHub</p>
                    <a
                      href={PROFILE.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1.5 font-display text-base font-semibold text-white transition-colors hover:text-[#C4BAFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF] rounded-sm"
                    >
                      Repositories
                      <ArrowUpRight className="h-4 w-4 text-[#A89BFF]" aria-hidden="true" />
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#9E9BB8]">LinkedIn</p>
                    <a
                      href={PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1.5 font-display text-base font-semibold text-white transition-colors hover:text-[#C4BAFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF] rounded-sm"
                    >
                      Vrundavani Jadhav
                      <ArrowUpRight className="h-4 w-4 text-[#A89BFF]" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Interactive Message Composer */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleComposeMail}
                className="rounded-2xl border border-white/10 bg-[#131222] p-6 md:p-8"
              >
                <h3 className="font-display text-xl font-bold text-white">
                  Send a Message
                </h3>
                <p className="mt-1 text-sm text-[#B6B3CC]">
                  Prepare a direct email to {PROFILE.email}.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[#D4D2E6]"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Enter your name"
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B0B14] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#8E7BFF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[#D4D2E6]"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B0B14] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#8E7BFF] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[#D4D2E6]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your note here..."
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B0B14] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#8E7BFF] focus:outline-none"
                  />
                </div>

                {formError && (
                  <p role="alert" className="mt-3 text-xs font-medium text-rose-300">
                    {formError}
                  </p>
                )}
                {formNotice && (
                  <p role="status" className="mt-3 text-xs font-medium text-[#C4BAFF]">
                    {formNotice}
                  </p>
                )}

                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#5D4CE6] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6E5EF2] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A89BFF]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-white/10 bg-[#090910] py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-6 text-xs text-[#9E9BB8] sm:flex-row sm:items-center md:px-10">
          <p>
            © {new Date().getFullYear()} {PROFILE.name} · B.Tech AI &amp; Data Science
          </p>
          <div className="flex items-center gap-6">
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition-colors hover:text-white">
              Projects
            </a>
            <a href="#certificates" className="transition-colors hover:text-white">
              Certificates
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
