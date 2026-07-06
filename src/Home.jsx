import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopNavigator from './TopNavigator';
import './Home.css';
import sky1 from './assets/sky1.jpg';
/* ─── Data ──────────────────────────────────────────────────────── */
const STATS = [
  { number: '$4.2B', label: 'Assets Advised' },
  { number: '340+', label: 'Client Engagements' },
  { number: '28yr', label: 'Combined Experience' },
  { number: '97%',  label: 'Client Retention' },
];

const SERVICES = [
  {
    icon: 'bi-bar-chart-line',
    title: 'Financial Reporting & Compliance',
    desc:  'Accurate, audit-ready financial statements that meet GAAP, IFRS, and SEC standards — filed on time, every time.',
  },
  {
    icon: 'bi-receipt-cutoff',
    title: 'Tax Strategy & Planning',
    desc:  'Proactive tax planning that reduces liability and aligns with your long-term business objectives, not just this year\'s return.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Audit & Assurance',
    desc:  'Independent audits performed with rigor and discretion, giving your stakeholders confidence in every number.',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'CFO Advisory Services',
    desc:  'Fractional and project-based CFO support for companies that need executive-level financial leadership without the full-time cost.',
  },
  {
    icon: 'bi-building',
    title: 'M&A Due Diligence',
    desc:  'Deep financial analysis on both sides of a transaction — buy-side, sell-side, or restructuring — to protect your position at the table.',
  },
  {
    icon: 'bi-cpu',
    title: 'Finance Systems & Automation',
    desc:  'ERP selection, implementation, and workflow automation that cuts month-end close from weeks to days.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Discovery & Diagnostic',
    desc:  'We spend the first session understanding your current state: systems, pain points, near-term obligations, and strategic ambitions.',
  },
  {
    num: '02',
    title: 'Scope & Engagement Design',
    desc:  'We propose a clearly scoped engagement with defined deliverables, timelines, and fees — no retainer ambiguity or scope creep.',
  },
  {
    num: '03',
    title: 'Analysis & Execution',
    desc:  'Our team works inside your numbers with the depth of a forensic accountant and the pragmatism of an operator. Weekly check-ins, no surprises.',
  },
  {
    num: '04',
    title: 'Delivery & Knowledge Transfer',
    desc:  'We hand over polished deliverables and walk your team through every finding, so the insights outlast the engagement.',
  },
];



/* ─── Smooth-scroll helper ──────────────────────────────────────── */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ─── Sub-components ────────────────────────────────────────────── */
function SectionEyebrow({ children }) {
  return <div className="af-eyebrow">{children}</div>;
}

function Stars() {
  return (
    <div className="af-stars">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="bi bi-star-fill me-1" />
      ))}
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */
function AccountingFirm() {
  /* Load external fonts + Bootstrap Icons once */
  useEffect(() => {
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
      'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css',
    ];
    fonts.forEach((href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel  = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);

  return (
    <div className="af-root">
      {/* ── Top Nav (your shared component) ── */}
      <TopNavigator />
      {/* ── Hero ── */}
      <section className="af-hero" id="af-home" style={{ backgroundImage: `url(${sky1})` }}>
        <div className="container af-hero-inner">
          <div className="row">
            <div className="col-lg-8">
              <SectionEyebrow>Accounting &amp; Financial Consulting</SectionEyebrow>
              <h1>
                Clarity in every <em>figure,</em> strategy in every decision.
              </h1>
              <div className="af-hero-actions">
                 {/*
                <a
                  href="#af-contact"
                  className="af-btn-gold"
                  onClick={(e) => { e.preventDefault(); scrollTo('af-contact'); }}
                >
                  Book a Consultation
                </a>*/}

                <a
                  href="#af-services"
                  className="af-btn-ghost"
                  onClick={(e) => { e.preventDefault(); scrollTo('af-services'); }}
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="af-section af-services" id="af-services">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <SectionEyebrow>What We Do</SectionEyebrow>
              <h2 className="af-section-title">Precision services for every stage of growth.</h2>
              <p className="af-section-lead">
                We are a Certified Public Accounting (CPA) firm providing accounting, tax, business consulting, and IT solutions to small businesses, nonprofit organizations, government entities, and service-based businesses. <br></br>With over 24 years of experience, we deliver customized services including bookkeeping, tax preparation and planning, payroll, financial reporting, audit support, IRS representation, QuickBooks consulting, accounting system implementation, technology integration, and business IT support. <br></br>Our goal is to help clients improve financial management, maintain compliance, and leverage technology to operate more efficiently.

              </p>
            </div>
          </div>
          <div className="row g-4">
            {SERVICES.map((svc) => (
              <div className="col-md-6 col-lg-4" key={svc.title}>
                <div className="af-service-card">
                  <div className="af-service-icon">
                    <i className={`bi ${svc.icon}`} />
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="af-section af-approach" id="af-approach">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <SectionEyebrow>Our Process</SectionEyebrow>
              <h2 className="af-section-title">How we work — and why it holds up.</h2>
              <p className="af-section-lead">
                Every engagement begins with listening. We study your business before
                we prescribe anything. The result is advice that fits — not a template.
              </p>
            </div>
            <div className="col-lg-6 offset-lg-1">
              {STEPS.map((step) => (
                <div className="af-step" key={step.num}>
                  <div className="af-step-num">{step.num}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>




    </div>
  );
}

export default AccountingFirm;