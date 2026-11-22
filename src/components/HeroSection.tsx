import { ArrowDownRight, ImagePlus, Trash2, Upload } from 'lucide-react';
import { ChangeEvent, DragEvent, useEffect, useRef, useState } from 'react';
import { PROFILE } from '../data/portfolioData';

const PORTRAIT_STORAGE_KEY = 'vrundavani_portfolio_portrait_v1';

export function HeroSection() {
  const [portraitUrl, setPortraitUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem(PORTRAIT_STORAGE_KEY);
    } catch {
      return null;
    }
  });
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      if (portraitUrl) {
        localStorage.setItem(PORTRAIT_STORAGE_KEY, portraitUrl);
      } else {
        localStorage.removeItem(PORTRAIT_STORAGE_KEY);
      }
    } catch {
      // Ignore storage quota errors gracefully
    }
  }, [portraitUrl]);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    setUploadError(null);

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file (JPG, PNG, or WebP).');
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setUploadError('Please choose an image smaller than 4 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPortraitUrl(reader.result);
      }
    };
    reader.onerror = () => {
      setUploadError('Could not read the selected image.');
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0]);
    e.target.value = '';
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const handleClearPortrait = () => {
    setPortraitUrl(null);
    setUploadError(null);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-[#0B0B14] pt-14 pb-16 md:pt-20 md:pb-20"
    >
      {/* Subtle Creative Background Elements (inspired by reference contour aesthetics) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(93,76,230,0.22)_0%,rgba(45,168,175,0.10)_42%,transparent_72%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(122,104,246,0.14)_0%,transparent_70%)] blur-2xl"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
        preserveAspectRatio="none"
      >
        <path
          d="M920 -40C980 120 1130 220 1320 235C1410 242 1470 285 1490 340"
          stroke="url(#heroContourA)"
          strokeWidth="1"
        />
        <path
          d="M840 620C930 430 1120 340 1340 370C1420 381 1465 420 1495 455"
          stroke="url(#heroContourB)"
          strokeWidth="1"
        />
        <path
          d="M-60 470C140 390 290 450 430 560"
          stroke="url(#heroContourB)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="heroContourA" x1="920" y1="0" x2="1460" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7A68F6" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#8E7BFF" stopOpacity="0.6" />
            <stop offset="1" stopColor="#4BC8D4" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="heroContourB" x1="0" y1="450" x2="1440" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7A68F6" stopOpacity="0.25" />
            <stop offset="1" stopColor="#8E7BFF" stopOpacity="0.45" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Editorial Intro & CTAs */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-sm font-medium tracking-wide text-[#B6ADFF]">
              {PROFILE.degree}
              <span className="mx-2 text-white/35" aria-hidden="true">
                ·
              </span>
              <span className="text-[#D4D2E6]">{PROFILE.year}</span>
            </p>

            <h1 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.15rem)] font-semibold leading-[1.06] tracking-tight text-white">
              Hi, I&apos;m{' '}
              <span className="font-serif font-normal italic text-[#C4BAFF]">
                Vrundavani Jadhav.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#C8C6DC] md:text-[17px]">
              An engineering student exploring how thoughtful design and structured technology come
              together. I enjoy understanding real user needs, shaping intuitive digital
              experiences, and building practical solutions with C, C++, Artificial Intelligence,
              and Data Science.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#5D4CE6] px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#6E5EF2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A89BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B14] whitespace-nowrap shrink-0"
              >
                Explore My Work
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-[#F4F3FA] transition-colors duration-150 hover:border-white/35 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A89BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B14] whitespace-nowrap shrink-0"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Oval Portrait Placeholder */}
          <div className="flex flex-col items-center justify-center lg:col-span-5 lg:items-end">
            <div className="relative flex flex-col items-center">
              {/* Signature Oval Arch Frame with Offset Hairline Ring */}
              <div className="relative p-3">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 translate-x-2 -translate-y-1 rounded-full border border-[#7A68F6]/55"
                />
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`group relative flex h-[360px] w-[270px] sm:h-[400px] sm:w-[300px] flex-col items-center justify-center overflow-hidden rounded-full border transition-colors duration-200 ${
                    isDragging
                      ? 'border-[#A89BFF] bg-[#1D1A38]'
                      : 'border-white/15 bg-gradient-to-b from-[#17162B] to-[#11101E]'
                  }`}
                >
                  {portraitUrl ? (
                    <>
                      <img
                        src={portraitUrl}
                        alt="Portrait of Vrundavani Jadhav"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pt-10 pb-5 opacity-95 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:focus-within:opacity-100">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-[#0B0B14] transition-colors hover:bg-[#EAE7FF] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                        >
                          <Upload className="h-3.5 w-3.5" aria-hidden="true" />
                          Change Photo
                        </button>
                        <button
                          type="button"
                          onClick={handleClearPortrait}
                          aria-label="Remove uploaded portrait"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 bg-black/60 text-white transition-colors hover:bg-rose-600/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex h-full w-full cursor-pointer flex-col items-center justify-center px-8 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#A89BFF]"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#7A68F6]/40 bg-[#5D4CE6]/15 text-[#C4BAFF] transition-transform duration-200 group-hover:scale-105">
                        <ImagePlus className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="mt-5 font-display text-base font-semibold text-white">
                        Portrait Placeholder
                      </span>
                      <span className="mt-2 text-xs leading-relaxed text-[#B6B3CC]">
                        Click or drag &amp; drop your photograph here to personalize your portfolio
                      </span>
                      <span className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/[0.05] px-4 py-2 text-xs font-medium text-white transition-colors group-hover:border-[#8E7BFF] group-hover:bg-[#5D4CE6]/25">
                        <Upload className="h-3.5 w-3.5" aria-hidden="true" />
                        Upload Photograph
                      </span>
                    </button>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="sr-only"
                    aria-label="Upload portrait photograph"
                  />
                </div>
              </div>

              {uploadError && (
                <p role="alert" className="mt-3 text-center text-xs font-medium text-rose-300">
                  {uploadError}
                </p>
              )}
              {!portraitUrl && !uploadError && (
                <p className="mt-2 text-center text-xs text-[#9E9BB8]">
                  Saved locally in your browser · JPG, PNG, or WebP
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width Editorial Summary Strip Below Hero Split */}
        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-medium text-[#9E9BB8]">Degree Program</p>
            <p className="mt-1.5 font-display text-base font-semibold text-white">
              B.Tech in AI &amp; Data Science
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#9E9BB8]">Academic Standing</p>
            <p className="mt-1.5 font-display text-base font-semibold text-white">
              2nd Year Engineering Student
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#9E9BB8]">Core Focus</p>
            <p className="mt-1.5 font-display text-base font-semibold text-white">
              C · C++ · AI · Data Science
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#9E9BB8]">Featured Repository</p>
            <a
              href="https://github.com/vrundavanijadhav65-ui/FinWise"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1 font-display text-base font-semibold text-[#C4BAFF] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF] rounded-sm"
            >
              FinWise on GitHub
              <ArrowDownRight className="h-4 w-4 -rotate-90" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
