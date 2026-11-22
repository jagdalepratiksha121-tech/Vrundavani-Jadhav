import {
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  ImagePlus,
  Pencil,
  Plus,
  RotateCcw,
  X,
} from 'lucide-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { INITIAL_PROJECTS, ProjectItem } from '../data/portfolioData';

const PROJECTS_STORAGE_KEY = 'vrundavani_portfolio_projects_v2';

function FinWiseGraphicPreview() {
  return (
    <div className="relative flex h-full min-h-[260px] w-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#16152B] via-[#121122] to-[#0D0D19] p-6">
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#5D4CE6]/25 blur-2xl"
      />

      {/* Minimal App Window Top Frame */}
      <div className="relative flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <span className="font-mono text-[11px] text-[#B6ADFF]">FinWise · Workspace</span>
      </div>

      {/* Clean Schematic Interface Preview */}
      <div className="relative my-5 grid grid-cols-12 gap-4">
        <div className="col-span-7 rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-[11px] font-medium text-[#9E9BB8]">Monthly Overview</p>
          <div className="mt-4 flex items-end gap-2 h-20">
            <div className="w-full rounded-t bg-[#5D4CE6]/40 h-[45%]" />
            <div className="w-full rounded-t bg-[#5D4CE6]/60 h-[70%]" />
            <div className="w-full rounded-t bg-[#7A68F6]/75 h-[55%]" />
            <div className="w-full rounded-t bg-[#8E7BFF] h-[88%]" />
            <div className="w-full rounded-t bg-[#5D4CE6]/55 h-[62%]" />
            <div className="w-full rounded-t bg-[#4BC8D4]/70 h-[78%]" />
          </div>
        </div>
        <div className="col-span-5 flex flex-col justify-between gap-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] text-[#9E9BB8]">Budget Categories</p>
            <div className="mt-2.5 space-y-2">
              <div className="h-1.5 w-full rounded bg-white/15">
                <div className="h-1.5 w-3/4 rounded bg-[#8E7BFF]" />
              </div>
              <div className="h-1.5 w-full rounded bg-white/15">
                <div className="h-1.5 w-1/2 rounded bg-[#4BC8D4]" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] text-[#9E9BB8]">Expense Clarity</p>
            <p className="mt-1 font-display text-xs font-semibold text-white">
              Structured Tracking
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Caption */}
      <div className="relative flex items-center justify-between text-xs text-[#9E9BB8]">
        <span>Personal Finance Interface</span>
        <span className="font-mono text-[11px] text-[#C4BAFF]">vrundavanijadhav65-ui/FinWise</span>
      </div>
    </div>
  );
}

function PlaceholderGraphicPreview({ label }: { label?: string }) {
  return (
    <div className="flex h-full min-h-[210px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-[#121120] p-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7A68F6]/35 bg-[#5D4CE6]/15 text-[#C4BAFF]">
        <ImagePlus className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="mt-4 font-display text-sm font-semibold text-white">
        {label || 'Project Preview Placeholder'}
      </p>
      <p className="mt-1 max-w-xs text-xs text-[#9E9BB8]">
        Edit this card to upload a project preview screenshot and link your repository or live demo.
      </p>
    </div>
  );
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem(PROJECTS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // Ignore parse errors
    }
    return INITIAL_PROJECTS;
  });

  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formTools, setFormTools] = useState('');
  const [formGithub, setFormGithub] = useState('');
  const [formDemo, setFormDemo] = useState('');
  const [formImage, setFormImage] = useState<string | undefined>(undefined);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
    } catch {
      // Ignore storage quota errors
    }
  }, [projects]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setEditingProject(null);
    };
    if (editingProject) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [editingProject]);

  const openEditor = (project: ProjectItem) => {
    setEditingProject(project);
    setFormTitle(project.title);
    setFormDescription(project.description);
    setFormTools(project.tools.join(', '));
    setFormGithub(project.githubUrl);
    setFormDemo(project.demoUrl);
    setFormImage(project.imageUrl);
    setFormError(null);
  };

  const openNewProjectEditor = () => {
    const newProject: ProjectItem = {
      id: `project-${Date.now()}`,
      title: 'New Project',
      description: 'Describe what problem this project solves and what you built.',
      tools: ['C++', 'Artificial Intelligence'],
      githubUrl: '',
      demoUrl: '',
      isPlaceholder: false,
      previewVariant: 'placeholder',
      slotLabel: 'Custom Project',
    };
    openEditor(newProject);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setFormError('Please select a valid image file.');
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      setFormError('Preview image must be smaller than 3 MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setFormImage(reader.result);
        setFormError(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProject = (e: FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    const trimmedTitle = formTitle.trim();
    if (!trimmedTitle) {
      setFormError('Project title is required.');
      return;
    }

    const parsedTools = formTools
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const updatedItem: ProjectItem = {
      ...editingProject,
      title: trimmedTitle,
      description: formDescription.trim() || 'Project details added.',
      tools: parsedTools.length > 0 ? parsedTools : ['Technology'],
      githubUrl: formGithub.trim(),
      demoUrl: formDemo.trim(),
      imageUrl: formImage,
      isPlaceholder: false,
    };

    setProjects((prev) => {
      const exists = prev.some((p) => p.id === updatedItem.id);
      if (exists) {
        return prev.map((p) => (p.id === updatedItem.id ? updatedItem : p));
      }
      return [...prev, updatedItem];
    });
    setEditingProject(null);
  };

  const handleResetProjects = () => {
    setProjects(INITIAL_PROJECTS);
  };

  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section id="projects" className="border-t border-white/10 py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-[#B6ADFF]">Selected Work &amp; Showcase</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Projects
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#C2C0D8]">
              Featured work and a customizable showcase ready to grow as I build new solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={openNewProjectEditor}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#5D4CE6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#6E5EF2] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A89BFF]"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Add Project
            </button>
            {projects.length > 1 && (
              <button
                type="button"
                onClick={handleResetProjects}
                title="Restore default projects"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-2 text-xs font-medium text-[#D4D2E6] transition-colors hover:border-white/30 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Flagship Featured Project Card (FinWise) */}
        {featuredProject && (
          <article className="mt-12 grid grid-cols-1 items-stretch gap-8 rounded-2xl border border-white/10 bg-[#131222] p-6 transition-colors hover:border-white/20 md:p-8 lg:grid-cols-12">
            {/* Visual Preview */}
            <div className="lg:col-span-6">
              {featuredProject.imageUrl ? (
                <div className="h-full min-h-[260px] overflow-hidden rounded-xl border border-white/10 bg-[#0D0D19]">
                  <img
                    src={featuredProject.imageUrl}
                    alt={`${featuredProject.title} preview`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <FinWiseGraphicPreview />
              )}
            </div>

            {/* Project Copy & Actions */}
            <div className="flex flex-col justify-between lg:col-span-6 lg:py-2">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium text-[#B6ADFF]">
                    Featured Repository
                  </span>
                  <button
                    type="button"
                    onClick={() => openEditor(featuredProject)}
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 text-xs font-medium text-[#D4D2E6] transition-colors hover:border-white/30 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                  >
                    <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                    Edit / Add Demo Link
                  </button>
                </div>

                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#C8C6DC]">
                  {featuredProject.description}
                </p>

                {/* Tools Metadata (Zero-Pill Clean Typographic List) */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs font-medium text-[#9E9BB8]">Technologies &amp; Focus</p>
                  <p className="mt-1.5 text-sm font-medium text-[#EAE8F8]">
                    {featuredProject.tools.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Project Links */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#5D4CE6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6E5EF2] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A89BFF]"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}

                {featuredProject.demoUrl ? (
                  <a
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/[0.06] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => openEditor(featuredProject)}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-[#B6B3CC] transition-colors hover:border-white/30 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                  >
                    Add Demo Link
                  </button>
                )}
              </div>
            </div>
          </article>
        )}

        {/* Secondary / User-Added Project Cards */}
        {secondaryProjects.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {secondaryProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#131222] p-6 transition-colors hover:border-white/20"
              >
                <div>
                  {project.imageUrl ? (
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0D0D19]">
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} preview`}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <PlaceholderGraphicPreview label={project.slotLabel} />
                  )}

                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      {project.isPlaceholder && (
                        <p className="text-xs font-medium text-[#B6ADFF]">
                          Editable Project Placeholder
                        </p>
                      )}
                      <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-white">
                        {project.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => openEditor(project)}
                      aria-label={`Edit ${project.title}`}
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 text-[#D4D2E6] transition-colors hover:border-white/30 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                    >
                      <Pencil className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#C2C0D8]">
                    {project.description}
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs text-[#9E9BB8]">
                      Tools:{' '}
                      <span className="font-medium text-[#E5E4F3]">
                        {project.tools.join(' · ')}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {project.githubUrl || project.demoUrl ? (
                    <>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#5D4CE6] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6E5EF2] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A89BFF]"
                        >
                          <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                          View Project
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/[0.06] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                        >
                          Live Demo
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => openEditor(project)}
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-white/20 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#8E7BFF] hover:bg-[#5D4CE6]/20 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E7BFF]"
                    >
                      <Pencil className="h-4 w-4" aria-hidden="true" />
                      Customize Project
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Project Editor Modal */}
      {editingProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-editor-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
        >
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/15 bg-[#131222] p-6 shadow-2xl md:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <h3
                id="project-editor-title"
                className="font-display text-xl font-bold text-white"
              >
                Edit Project Details
              </h3>
              <button
                type="button"
                onClick={() => setEditingProject(null)}
                aria-label="Close editor"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-[#D4D2E6] transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="proj-title"
                  className="block text-xs font-medium text-[#D4D2E6]"
                >
                  Project Title
                </label>
                <input
                  id="proj-title"
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B0B14] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#8E7BFF] focus:outline-none"
                  placeholder="e.g. FinWise"
                />
              </div>

              <div>
                <label
                  htmlFor="proj-desc"
                  className="block text-xs font-medium text-[#D4D2E6]"
                >
                  Short Description
                </label>
                <textarea
                  id="proj-desc"
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B0B14] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#8E7BFF] focus:outline-none"
                  placeholder="Briefly describe the goal and user value of your project."
                />
              </div>

              <div>
                <label
                  htmlFor="proj-tools"
                  className="block text-xs font-medium text-[#D4D2E6]"
                >
                  Technologies or Tools Used (comma-separated)
                </label>
                <input
                  id="proj-tools"
                  type="text"
                  value={formTools}
                  onChange={(e) => setFormTools(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B0B14] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#8E7BFF] focus:outline-none"
                  placeholder="e.g. C++, Python, UI/UX Design"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="proj-github"
                    className="block text-xs font-medium text-[#D4D2E6]"
                  >
                    Repository / Project URL
                  </label>
                  <input
                    id="proj-github"
                    type="url"
                    value={formGithub}
                    onChange={(e) => setFormGithub(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B0B14] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#8E7BFF] focus:outline-none"
                    placeholder="https://github.com/..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="proj-demo"
                    className="block text-xs font-medium text-[#D4D2E6]"
                  >
                    Live Demo URL (optional)
                  </label>
                  <input
                    id="proj-demo"
                    type="url"
                    value={formDemo}
                    onChange={(e) => setFormDemo(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B0B14] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#8E7BFF] focus:outline-none"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <span className="block text-xs font-medium text-[#D4D2E6]">
                  Project Preview Image (optional)
                </span>
                <div className="mt-1.5 flex items-center gap-3">
                  <label className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white transition-colors hover:border-[#8E7BFF]">
                    <ImagePlus className="h-4 w-4" aria-hidden="true" />
                    <span>{formImage ? 'Replace Image' : 'Upload Preview'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="sr-only"
                    />
                  </label>
                  {formImage && (
                    <button
                      type="button"
                      onClick={() => setFormImage(undefined)}
                      className="text-xs font-medium text-rose-300 hover:text-rose-200"
                    >
                      Remove Image
                    </button>
                  )}
                </div>
              </div>

              {formError && (
                <p role="alert" className="text-xs font-medium text-rose-300">
                  {formError}
                </p>
              )}

              <div className="flex items-center justify-end gap-3 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="min-h-[42px] rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-[#D4D2E6] transition-colors hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="min-h-[42px] rounded-lg bg-[#5D4CE6] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6E5EF2]"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
