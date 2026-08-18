export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  period: string;
  coursework: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface AppMeta {
  id: string;
  title: string;
  dockTitle: string;
  iconType: 'user' | 'folder' | 'terminal' | 'file-text' | 'mail' | 'github' | 'linkedin' | 'trash';
  defaultWidthRatio: number;
  defaultHeightRatio: number;
}

export const APPS_REGISTRY: Record<string, AppMeta> = {
  about: {
    id: 'about',
    title: 'About Me',
    dockTitle: 'About Me',
    iconType: 'user',
    defaultWidthRatio: 0.65,
    defaultHeightRatio: 0.62,
  },
  projects: {
    id: 'projects',
    title: 'Projects',
    dockTitle: 'Finder',
    iconType: 'folder',
    defaultWidthRatio: 0.68,
    defaultHeightRatio: 0.68,
  },
  skills: {
    id: 'skills',
    title: 'Skills & Stack',
    dockTitle: 'Terminal',
    iconType: 'terminal',
    defaultWidthRatio: 0.64,
    defaultHeightRatio: 0.64,
  },
  resume: {
    id: 'resume',
    title: 'Resume',
    dockTitle: 'Resume',
    iconType: 'file-text',
    defaultWidthRatio: 0.68,
    defaultHeightRatio: 0.72,
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    dockTitle: 'Messages',
    iconType: 'mail',
    defaultWidthRatio: 0.60,
    defaultHeightRatio: 0.62,
  },
};

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Swayam Jain',
    title: 'Software Engineer & Full-Stack Developer',
    headline: 'Full-Stack Development · Quantitative Systems · Data Science',
    email: 'swayamjain58@gmail.com',
    github: 'https://github.com/NotSaM7',
    linkedin: 'https://www.linkedin.com/in/swayam-jain-8402a0277/',
    instagram: 'https://www.instagram.com/jain.swayam7/',
    resumePdfUrl: 'https://drive.google.com/file/d/1DWOgrfJzX5QozvldrtmI_3nujwqLKy89/view?usp=sharing',
    resumeDownloadUrl: 'https://drive.google.com/file/d/1DWOgrfJzX5QozvldrtmI_3nujwqLKy89/view?usp=sharing',
  },
  bio: {
    lead: "Software engineer and quantitative systems builder who got into algorithmic trading out of sheer curiosity — and now can't stop backtesting strategies at 3 AM.",
    paragraphs: [
      "I build full-stack products end to end: from conversational NLP pipelines that log your expenses via WhatsApp, to high-frequency paper-trading engines with real-time candlestick charts and automated risk management.",
      "Yes, I write code — but let's be honest, modern AI writes a hefty chunk of the boilerplate. The real superpower? Knowing the exact architecture, prompt constraints, edge cases, and mathematical models to turn raw output into production-grade systems that actually ship.",
      "When I'm not tweaking ATR stop-loss multipliers or fine-tuning spring physics in Framer Motion, you'll probably find me in a Valorant lobby reading site angles and calling rotations — identical analytical instincts, just with much less tolerance for bad decision-making.",
      "Firm believer that software should be ridiculously fast, aesthetically stunning, and actually solve real problems instead of being another cookie-cutter template."
    ],
    currentFocus: 'Engineering high-throughput quantitative backtesting pipelines, alpha signal discovery, and buttery-smooth desktop-grade web applications.',
    funFacts: [
      { label: 'Obsession', value: 'Backtesting Alpha Signals & Market Data' },
      { label: 'Tech Superpower', value: 'Orchestrating Complex Full-Stack Systems with AI' },
      { label: 'Off Duty', value: 'Clicking Heads in Valorant Ranked' },
      { label: 'Design Rule', value: 'Never ship a boring MVP' },
    ]
  },
  education: {
    degree: 'B.Tech · Computer Science & Engineering',
    period: '2023 – 2027',
    coursework: [
      'DSA',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'AI',
      'Data Science',
      'Data Mining',
      'IoT'
    ],
  } as EducationItem,
  certificate: {
    title: 'Natural Language Processing',
    issuer: 'NPTEL · IIT Madras',
    date: 'April 2026',
    description: 'Text processing, language models, and sequence-to-sequence architectures — hands-on with NLP pipelines, tokenization, and transformer-based models.'
  } as CertificateItem,
  skills: [
    {
      title: 'Languages',
      icon: 'Code2',
      skills: ['Python', 'SQL', 'Java', 'TypeScript', 'JavaScript (ES6+)', 'C++']
    },
    {
      title: 'Frameworks & Libraries',
      icon: 'Layers',
      skills: ['React', 'Next.js', 'FastAPI', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Tailwind CSS', 'MUI', 'Vite']
    },
    {
      title: 'Tools & Databases',
      icon: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Supabase', 'Power BI', 'Tableau', 'Git', 'Docker']
    },
    {
      title: 'Platforms & Workflows',
      icon: 'Cpu',
      skills: ['VS Code', 'Jupyter', 'PyCharm', 'Prompt Engineering', 'REST APIs', 'WebSockets', 'Linux']
    }
  ] as SkillCategory[],
  projects: [
    {
      id: 'quant-trading',
      title: 'Quant Trading App',
      year: '2026',
      category: 'Quantitative Finance & Dashboard',
      description: 'A premium quantitative trading dashboard for NSE markets — a parallel SMA / RSI / ATR strategy engine, automated stop-loss, one-click profit booking, 6–12 month backtesting, and JWT-secured portfolios, wrapped in a Spotify-inspired dark UI.',
      techStack: ['React', 'TypeScript', 'FastAPI', 'Pandas', 'NumPy', 'Supabase', 'MUI', 'Vite'],
      features: [
        'Parallel strategy engine (SMA, RSI, ATR)',
        'Real-time NSE market data feeds',
        '6–12 month strategy backtesting',
        'Automated stop-loss & one-click profit booking',
        'JWT authentication & portfolio tracking'
      ],
      liveUrl: 'https://quant-trading-zeta.vercel.app/',
      githubUrl: 'https://github.com/NotSaM7/quant_trading',
      icon: 'TrendingUp'
    },
    {
      id: 'stock-sim',
      title: 'Stock Trading Simulation Game',
      year: '2026',
      category: 'Fintech Simulation',
      description: 'A realistic paper-trading game for NSE equity markets — live market data via FastAPI and yfinance, virtual order execution with zero financial risk, portfolio tracking with real-time P&L, and interactive line and candlestick charts.',
      techStack: ['React', 'TypeScript', 'Vite', 'MUI', 'FastAPI', 'yfinance'],
      features: [
        'Live NSE market quotes via yfinance',
        'Virtual order execution engine (Limit / Market)',
        'Real-time P&L & portfolio balance updates',
        'Interactive candlestick & area charts'
      ],
      githubUrl: 'https://github.com/NotSaM7/stock_sim',
      icon: 'Gamepad2'
    },
    {
      id: 'whatsapp-expense',
      title: 'Expense Tracker via WhatsApp',
      year: '2026',
      category: 'Conversational NLP & Tool',
      description: 'A personal expense tracker that works entirely through WhatsApp — message your expenses in natural language like "lunch 250" or "uber 150 to airport" and they are instantly categorized and logged without opening an app.',
      techStack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Vercel Serverless', 'Supabase', 'Twilio API'],
      features: [
        'Natural-language transaction parsing',
        'Instant WhatsApp webhook processing',
        'Automated spending categorization',
        'Weekly & monthly analytics dashboard'
      ],
      githubUrl: 'https://github.com/NotSaM7/expense-tracker-via-whatsapp',
      icon: 'MessageSquare'
    }
  ] as ProjectItem[]
};
