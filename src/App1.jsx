import { useEffect } from 'react';
import sky3 from './assets/sky3.jpg';
import TopNavigator from './TopNavigator';
import './Apples.css';

function App1() {
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
        style={{ backgroundImage: `url(${sky3})` }}
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
                <div className="as-about-icon"><i className="bi bi-cpu" /></div>
                <div>
                  <h2 className="as-about-title">Technology Consulting</h2>
                  <p>
                    In addition to our accounting and tax services, we provide computer
                    consulting services, including software implementation, accounting system
                    setup and support, QuickBooks consulting, financial system integration,
                    data management, technology planning, cybersecurity awareness, and general
                    business technology support. We help organizations leverage technology to
                    improve efficiency, strengthen internal controls, and streamline financial
                    operations.
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

export default App1;