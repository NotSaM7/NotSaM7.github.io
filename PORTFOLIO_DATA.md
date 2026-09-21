# Portfolio Content Inventory

Single source of truth for all portfolio data, synced directly with the official resume.

---

## Personal Info
- **Name**: Swayam Jain
- **Title**: Full-Stack Developer & AI Builder
- **Headline**: Full-Stack Development · AI Products · Quantitative Systems
- **Email**: swayamjain58@gmail.com
- **GitHub**: https://github.com/NotSaM7
- **LinkedIn**: https://www.linkedin.com/in/swayam-jain-8402a0277/
- **Portfolio**: https://notsam7.github.io/
- **Resume PDF**: /resume.pdf

---

## About Me

### Full-Stack Developer & AI Builder
I build products of value to the end-users. I typically start with a practical problem in mind and iterate towards the simplest possible solution that can be shipped as a product.

I like to call it vibe coding; building applications using AI-assisted development while understanding the internals, the architectural decisions, the APIs, implementations, edge cases, constraints, and limitations. The AI helps with faster prototyping, but I get to understand what I build.

My interests lie in the intersection of software, AI, and quantitative systems. I have built an autonomous AI research agent for quantitative trading, a WhatsApp-based personal expense tracker, and a paper-trading platform for NSE. Most of my learning comes from first principles and implementing my own understanding of a concept.

Debugging is as interesting as building for me; I am always looking to simplify a system, optimize a process, and automate a mundane task that can be turned into a product.

> **“I build to learn and learn to build. I believe in shipping over thinking.”**

---

## Projects

### 1. Quant Trading App (June 2026)
- **Live Demo**: https://quant-trading-zeta.vercel.app/
- **GitHub**: https://github.com/NotSaM7/quant_trading
- **Tech Stack**: React, TypeScript, Python, FastAPI, SQLAlchemy, PostgreSQL (Supabase), LangGraph, Pandas, NumPy
- **Key Points**:
  - Architected an autonomous LLM research agent using LangGraph (ReAct framework) orchestrating 5 specialized financial tools to generate cited buy/hold/sell trade theses, cutting query latency from ~2 minutes to ~30 seconds via pipeline optimization.
  - Engineered a parallel stock-screening engine processing 134 NSE-listed equities via a multi-threaded worker pool, computing real-time SMA, RSI, and ATR technical indicators to rank momentum candidates in under 2 seconds per scan pass.
  - Implemented a multi-tenant backend with FastAPI, SQLAlchemy, and PostgreSQL, incorporating JWT authentication, bcrypt password hashing, and row-level data isolation for user portfolios, execution logs, and live position metrics.
  - Developed an automated backtesting engine computing Sharpe ratio, maximum drawdown, and win rate against historical benchmarks; built a responsive, dark-mode analytics dashboard with automated risk controls and deployed to Vercel and Supabase.

### 2. Expense Tracker via WhatsApp (August 2026)
- **GitHub**: https://github.com/NotSaM7/expense-tracker-via-whatsapp
- **Tech Stack**: TypeScript, React, Node.js, Meta Cloud API, Gemini AI, PostgreSQL (Supabase), Vercel
- **Key Points**:
  - Built a conversational financial tracking agent integrating Meta Cloud API (WhatsApp Webhooks) and Gemini AI to parse unstructured natural-language inputs (e.g., "rs 247 debit food") and execute zero-friction transaction logging.
  - Designed a multi-bucket balance tracking architecture (bank accounts, liquid cash, custom funds) featuring auto-resetting monthly budget thresholds and an automated start-of-month salary-confirmation reconciliation workflow.
  - Developed a full-stack financial dashboard in React and TypeScript with a Node.js/Supabase backend, supporting real-time transaction auditing, bucket lifecycle operations (add/edit/delete), and historical debit/credit visualizations.

### 3. Stock Trading Simulation Game (2026)
- **GitHub**: https://github.com/NotSaM7/stock_sim
- **Tech Stack**: Python, FastAPI, React, TypeScript, Vite, Material UI, yfinance
- **Key Points**:
  - Built an Indian equity (NSE) paper-trading platform integrating real-time market data streams via yfinance, allowing users to execute simulated limit/market orders with virtual currency and zero capital exposure.
  - Engineered a client-side portfolio management engine rendering interactive line and candlestick charts to compute dynamic asset allocation, total position valuation, and real-time unrealized/realized P&L calculations.

---

## Technical Skills

- **Languages**: Python, SQL, Java, TypeScript, JavaScript
- **Frameworks & Libraries**: FastAPI, React, Node.js, LangGraph, SQLAlchemy, Pandas, NumPy, Scikit-Learn, Matplotlib, Vite, Material UI
- **Databases**: PostgreSQL, Supabase, MySQL, SQLite, MongoDB
- **APIs & Cloud**: REST APIs, Meta Cloud API, Vercel
- **Developer Tools**: Git, GitHub, Power BI, Tableau

---

## Education

- **Institution**: SRM Institute of Science and Technology - Ghaziabad
- **Degree**: Bachelor of Technology (B.Tech) in Computer Science and Engineering
- **Duration**: 2023 – 2027
- **CGPA**: 8.17 / 10.0
- **Relevant Coursework**: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Object-Oriented Design & Programming (OOP), Computer Networks, Artificial Intelligence, Data Science, Data Mining & Analytics

---

## Certifications

1. **Tata Group - Data Analytics Job Simulation (Tata iQ)** (August 2026)
   - Conducted exploratory data analysis (EDA) and credit risk indicator modeling; architected an agentic AI delinquency recovery and collections strategy.
2. **NPTEL - Natural Language Processing (IIT)** (April 2026)
   - Completed rigorous curriculum covering tokenization, statistical language models, sequence-to-sequence networks, and transformer-based NLP pipelines.

---

## Extracurricular Activities

- **Competitive Programming & Technical Exploration**: Independently research quantitative trading strategies and financial markets beyond the academic curriculum.
- **Strategic Gaming & Esports**: Compete in multiplayer and strategy-based games requiring analytical thinking and fast decision-making under pressure.