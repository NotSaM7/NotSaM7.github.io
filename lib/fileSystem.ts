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
  institution?: string;
  period: string;
  gpa?: string;
  coursework: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
}

export interface ExtracurricularItem {
  title: string;
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
    portfolioUrl: 'https://notsam7.github.io/',
    resumePdfUrl: '/resume.pdf',
    resumeDownloadUrl: '/resume.pdf',
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
    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    institution: 'SRM Institute of Science and Technology - Ghaziabad',
    period: '2023 – 2027',
    gpa: 'CGPA: 8.17 / 10.0',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Object-Oriented Design & Programming (OOP)',
      'Computer Networks',
      'Artificial Intelligence',
      'Data Science',
      'Data Mining & Analytics'
    ],
  } as EducationItem,
  certificates: [
    {
      title: 'Data Analytics Job Simulation (Tata iQ)',
      issuer: 'Tata Group',
      date: 'August 2026',
      description: 'Conducted exploratory data analysis (EDA) and credit risk indicator modeling; architected an agentic AI delinquency recovery and collections strategy.'
    },
    {
      title: 'Natural Language Processing (IIT)',
      issuer: 'NPTEL',
      date: 'April 2026',
      description: 'Completed rigorous curriculum covering tokenization, statistical language models, sequence-to-sequence networks, and transformer-based NLP pipelines.'
    }
  ] as CertificateItem[],
  certificate: {
    title: 'Natural Language Processing (IIT)',
    issuer: 'NPTEL',
    date: 'April 2026',
    description: 'Completed rigorous curriculum covering tokenization, statistical language models, sequence-to-sequence networks, and transformer-based NLP pipelines.'
  } as CertificateItem,
  skills: [
    {
      title: 'Languages',
      icon: 'Code2',
      skills: ['Python', 'SQL', 'Java', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Frameworks & Libraries',
      icon: 'Layers',
      skills: ['FastAPI', 'React', 'Node.js', 'LangGraph', 'SQLAlchemy', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Vite', 'Material UI']
    },
    {
      title: 'Databases',
      icon: 'Database',
      skills: ['PostgreSQL', 'Supabase', 'MySQL', 'SQLite', 'MongoDB']
    },
    {
      title: 'APIs & Cloud',
      icon: 'Cloud',
      skills: ['REST APIs', 'Meta Cloud API', 'Vercel']
    },
    {
      title: 'Developer Tools',
      icon: 'Wrench',
      skills: ['Git', 'GitHub', 'Power BI', 'Tableau']
    }
  ] as SkillCategory[],
  extracurriculars: [
    {
      title: 'Competitive Programming & Technical Exploration',
      description: 'Independently research quantitative trading strategies and financial markets beyond the academic curriculum.'
    },
    {
      title: 'Strategic Gaming & Esports',
      description: 'Compete in multiplayer and strategy-based games requiring analytical thinking and fast decision-making under pressure.'
    }
  ] as ExtracurricularItem[],
  projects: [
    {
      id: 'quant-trading',
      title: 'Quant Trading App',
      year: 'June 2026',
      category: 'Quantitative Finance & Agentic Systems',
      description: 'A quantitative trading platform with autonomous LangGraph research agents, parallel NSE equity screening across 134 stocks, multi-tenant FastAPI/PostgreSQL architecture with row-level data isolation, and automated benchmark backtesting.',
      techStack: ['React', 'TypeScript', 'Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL (Supabase)', 'LangGraph', 'Pandas', 'NumPy'],
      features: [
        'Architected an autonomous LLM research agent using LangGraph (ReAct framework) orchestrating 5 specialized financial tools to generate cited buy/hold/sell trade theses, cutting query latency from ~2 minutes to ~30 seconds via pipeline optimization.',
        'Engineered a parallel stock-screening engine processing 134 NSE-listed equities via a multi-threaded worker pool, computing real-time SMA, RSI, and ATR technical indicators to rank momentum candidates in under 2 seconds per scan pass.',
        'Implemented a multi-tenant backend with FastAPI, SQLAlchemy, and PostgreSQL, incorporating JWT authentication, bcrypt password hashing, and row-level data isolation for user portfolios, execution logs, and live position metrics.',
        'Developed an automated backtesting engine computing Sharpe ratio, maximum drawdown, and win rate against historical benchmarks; built a responsive, dark-mode analytics dashboard with automated risk controls and deployed to Vercel and Supabase.'
      ],
      liveUrl: 'https://quant-trading-zeta.vercel.app/',
      githubUrl: 'https://github.com/NotSaM7/quant_trading',
      icon: 'TrendingUp'
    },
    {
      id: 'whatsapp-expense',
      title: 'Expense Tracker via WhatsApp',
      year: 'August 2026',
      category: 'Conversational NLP & Financial Systems',
      description: 'A zero-friction personal finance system integrating Meta Cloud API (WhatsApp Webhooks) and Gemini AI to log unstructured natural-language expenses into a multi-bucket balance tracking architecture.',
      techStack: ['TypeScript', 'React', 'Node.js', 'Meta Cloud API', 'Gemini AI', 'PostgreSQL (Supabase)', 'Vercel'],
      features: [
        'Built a conversational financial tracking agent integrating Meta Cloud API (WhatsApp Webhooks) and Gemini AI to parse unstructured natural-language inputs (e.g., "rs 247 debit food") and execute zero-friction transaction logging.',
        'Designed a multi-bucket balance tracking architecture (bank accounts, liquid cash, custom funds) featuring auto-resetting monthly budget thresholds and an automated start-of-month salary-confirmation reconciliation workflow.',
        'Developed a full-stack financial dashboard in React and TypeScript with a Node.js/Supabase backend, supporting real-time transaction auditing, bucket lifecycle operations (add/edit/delete), and historical debit/credit visualizations.'
      ],
      githubUrl: 'https://github.com/NotSaM7/expense-tracker-via-whatsapp',
      icon: 'MessageSquare'
    },
    {
      id: 'stock-sim',
      title: 'Stock Trading Simulation Game',
      year: '2026',
      category: 'Fintech Simulation',
      description: 'An Indian equity (NSE) paper-trading simulation platform with live yfinance market data feeds, zero-risk virtual order execution, and interactive candlestick portfolio analytics.',
      techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Vite', 'Material UI', 'yfinance'],
      features: [
        'Built an Indian equity (NSE) paper-trading platform integrating real-time market data streams via yfinance, allowing users to execute simulated limit/market orders with virtual currency and zero capital exposure.',
        'Engineered a client-side portfolio management engine rendering interactive line and candlestick charts to compute dynamic asset allocation, total position valuation, and real-time unrealized/realized P&L calculations.'
      ],
      githubUrl: 'https://github.com/NotSaM7/stock_sim',
      icon: 'Gamepad2'
    }
  ] as ProjectItem[]
};
