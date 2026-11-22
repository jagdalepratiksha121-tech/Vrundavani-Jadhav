export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tools: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl?: string;
  isPlaceholder?: boolean;
  previewVariant?: 'finwise' | 'placeholder';
  slotLabel?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  platformOrPartner?: string;
  recipient: string;
  issuedDate: string;
  validUntil?: string;
  credentialId?: string;
  grade?: string;
  verifyUrl?: string;
  assetPath: string;
  assetType: 'image' | 'pdf';
  summary: string;
}

export const PROFILE = {
  name: 'Vrundavani Jadhav',
  degree: 'B.Tech in Artificial Intelligence and Data Science (AI & DS)',
  year: '2nd Year Engineering Student',
  email: 'vrundavanijadhav65@gmail.com',
  githubUrl: 'https://github.com/vrundavanijadhav65-ui?tab=repositories',
  linkedinUrl:
    'https://www.linkedin.com/in/vrundavani-jadhav-74880042a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
};

export const TECHNOLOGY_SKILLS = [
  {
    code: 'C',
    name: 'C Programming',
    note: 'Structured programming, memory fundamentals & logic building',
    accentBg: 'bg-[#17162B]',
    accentText: 'text-[#C4BAFF]',
  },
  {
    code: 'C++',
    name: 'C++',
    note: 'Object-oriented design, problem solving & data structures',
    accentBg: 'bg-[#17162B]',
    accentText: 'text-[#C4BAFF]',
  },
  {
    code: 'SYS',
    name: 'C++ Systems',
    note: 'Modular systems logic, memory management & structured execution',
    accentBg: 'bg-[#17162B]',
    accentText: 'text-[#C4BAFF]',
  },
  {
    code: 'AI',
    name: 'Artificial Intelligence',
    note: 'Intelligent systems concepts & generative AI workflows',
    accentBg: 'bg-[#17162B]',
    accentText: 'text-[#C4BAFF]',
  },
  {
    code: 'DS',
    name: 'Data Science',
    note: 'Analytical reasoning, structured exploration & pattern insight',
    accentBg: 'bg-[#17162B]',
    accentText: 'text-[#C4BAFF]',
  },
  {
    code: 'AI&DS',
    name: 'AI & Data Science',
    note: 'Applied data modeling, analytical thinking & intelligent solutions',
    accentBg: 'bg-[#17162B]',
    accentText: 'text-[#C4BAFF]',
  },
];

export const DESIGN_SKILL_SET = [
  ['Understanding User Needs', 'Wireframing & Layout'],
  ['Problem Solving', 'Interface Clarity'],
  ['Creative Thinking', 'Prototyping'],
];

export const APPROACH_SKILLS = [
  ['Critical Thinking', 'Team Collaboration'],
  ['Clear Communication', 'Continuous Learning'],
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'finwise',
    title: 'FinWise',
    description:
      'A personal finance application crafted to make everyday expense tracking, budgeting awareness, and financial organization straightforward and approachable for users.',
    tools: ['UI/UX Design', 'Web Development', 'Problem Solving'],
    githubUrl: 'https://github.com/vrundavanijadhav65-ui/FinWise',
    demoUrl: '',
    isPlaceholder: false,
    previewVariant: 'finwise',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'adobe-genai',
    title: 'Generative AI Content Creation',
    issuer: 'Adobe',
    platformOrPartner: 'Coursera',
    recipient: 'Vrundavani Mohanrao Jadhav',
    issuedDate: 'Nov 4, 2025',
    credentialId: 'P3BGSRM7HXUP',
    verifyUrl: 'https://coursera.org/verify/P3BGSRM7HXUP',
    assetPath: '/assets/aistudio/image_4d999f4b.png',
    assetType: 'image',
    summary:
      'Online non-credit course authorized by Adobe and offered through Coursera, exploring creative workflows with generative AI.',
  },
  {
    id: 'imarticus-cpp',
    title: 'C & C++ Programming',
    issuer: 'Imarticus Learning',
    platformOrPartner: 'Skill India · NSDC',
    recipient: 'Jadhav Vrundavani',
    issuedDate: '19 May 2026',
    grade: 'Grade: A',
    credentialId: 'QRCEBMCGNDR4',
    assetPath: '/assets/aistudio/c___certificate_03faf212.pdf',
    assetType: 'pdf',
    summary:
      'Certificate of Proficiency awarded for completing C & C++ Programming with Grade A.',
  },
  {
    id: 'brain-membership',
    title: 'Certificate of Membership',
    issuer: 'Bharat Research in AI and NextGen Foundation (BRAIN)',
    platformOrPartner: 'Academic Institution Tier',
    recipient: 'Vrundavani Mohanrao Jadhav',
    issuedDate: '02 July 2026',
    validUntil: '31 December 2026',
    credentialId: 'BRAIN-DRDY261-S047',
    assetPath: '/assets/aistudio/BRAIN_Certificate_92285f1f.pdf',
    assetType: 'pdf',
    summary:
      'Official 2026 membership recognition in the Bharat Research in AI and NextGen Foundation community.',
  },
];
