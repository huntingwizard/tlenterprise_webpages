import { useEffect } from 'react';
import sky2 from './assets/sky2.jpg';
import TopNavigator from './TopNavigator';
import './Apples.css';

function App() {
  useEffect(() => {
    const links = [
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
      'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css',
    ];
    links.forEach((href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);

  return (
    <div className="as-root">
      <TopNavigator />

      {/* ── HERO with sky2 background ── */}
      <section
        className="as-hero"
        id="as-home"
        style={{ backgroundImage: `url(${sky2})` }}
      >
        <div className="container as-hero-inner">
          <div className="row">
            <div className="col-lg-9">
              <div className="as-eyebrow">Certified Public Accounting</div>
              <h1>
                Comprehensive services for every <em>financial need.</em>
              </h1>
              <p className="as-hero-sub">
                From bookkeeping and tax filing to IRS representation and technology
                consulting — we provide professional, personalized solutions that help
                your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / SUMMARY ── */}
      <section className="as-about" id="as-about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">

              <div className="as-about-block">
                <div className="as-about-icon"><i className="bi bi-building" /></div>
                <div>
                  <h2 className="as-about-title">Who We Are</h2>
                  <p>
                    We are a Certified Public Accounting (CPA) firm providing comprehensive
                    accounting, tax, business consulting, and computer consulting services to
                    small businesses, nonprofit organizations, governmental entities, churches,
                    individuals, nail salons, beauty salons, barber shops, spas, and other
                    service-based businesses.
                  </p>
                </div>
              </div>

              <div className="as-about-block">
                <div className="as-about-icon"><i className="bi bi-person-badge" /></div>
                <div>
                  <h2 className="as-about-title">Our Experience</h2>
                  <p>
                    Led by a Certified Public Accountant with over <strong>24 years of
                    experience</strong> in accounting, budgeting, payroll, financial reporting,
                    taxation, regulatory compliance, and business operations, we provide
                    customized solutions designed to meet the unique needs of each client.
                  </p>
                </div>
              </div>

              <div className="as-about-block">
                <div className="as-about-icon"><i className="bi bi-list-check" /></div>
                <div>
                  <h2 className="as-about-title">Accounting &amp; Tax Services</h2>
                  <p>
                    Our services include bookkeeping, financial statement preparation, tax
                    preparation and filing, tax planning, payroll processing, sales tax
                    compliance, accounts payable and receivable management, budgeting and
                    forecasting, business consulting, audit support, IRS representation, and
                    financial reporting. We assist clients with IRS audits, state tax
                    examinations, notices, and compliance matters, helping them navigate
                    complex tax issues and communicate effectively with tax authorities.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;