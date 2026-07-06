import { useEffect } from 'react';
import TopNavigator from './TopNavigator';
import sky2 from './assets/sky2.jpg';
import './Contact.css';

function Contact() {
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
    <div className="ct-root">
      <TopNavigator />

      {/* ── HERO ── */}
      <section
        className="ct-hero"
        id="ct-home"
        style={{ backgroundImage: `url(${sky2})` }}
      >
        <div className="container ct-hero-inner">
          <div className="row">
            <div className="col-lg-8">
              <div className="ct-eyebrow">Get In Touch</div>
              <h1>
                Let's talk about your <em>financial goals.</em>
              </h1>
              <p className="ct-hero-sub">
                Whether you need a quick answer or a long-term partner, we're here.
                Reach out and a member of our team will respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section className="ct-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">

              <div className="ct-info-panel">

                <div className="ct-panel-header">
                  <div className="ct-panel-heading">Contact Information</div>
                  <p className="ct-panel-sub">
                    Use any of the options below to reach us. We look forward to hearing from you.
                  </p>
                </div>

                <div className="ct-info-block">
                  <div className="ct-info-icon"><i className="bi bi-envelope" /></div>
                  <div>
                    <div className="ct-info-label">Email</div>
                    <a href="mailto:tlenterprisellp@gmail.com" className="ct-info-value">
                      tlenterprisellp@gmail.com
                    </a>
                    <p className="ct-info-note">We respond within one business day.</p>
                  </div>
                </div>

                <div className="ct-info-block">
                  <div className="ct-info-icon"><i className="bi bi-telephone" /></div>
                  <div>
                    <div className="ct-info-label">Phone</div>
                    <a href="tel:+19089062789" className="ct-info-value">
                      +1 (908) 906-2789
                    </a>
                    <p className="ct-info-note">9 AM – 5 PM EST. By Appointment</p>
                  </div>
                </div>
                {/* 
                <div className="ct-info-block">
                  <div className="ct-info-icon"><i className="bi bi-telephone" /></div>
                  <div>
                    <div className="ct-info-label">IT Phone</div>
                    <a href="tel:+19089062079" className="ct-info-value">
                      +1 (908) 906-2079
                    </a>
                    <p className="ct-info-note">Mon – Fri, 9 AM – 5 PM EST.</p>
                  </div>
                </div>*/}

                <div className="ct-info-block">
                  <div className="ct-info-icon"><i className="bi bi-geo-alt" /></div>
                  <div>
                    <div className="ct-info-label">Office</div>
                    <p className="ct-info-note">South Plainfield, NJ 07080</p>
                  </div>
                </div>

                <div className="ct-info-block">
                  <div className="ct-info-icon"><i className="bi bi-clock" /></div>
                  <div>
                    <div className="ct-info-label">Business Hours</div>
                    <div className="ct-hours">
                      <span className="ct-hours-day">Mon – Sat</span>
                      <span className="ct-hours-time">9:00 AM – 5:00 PM By appointment</span>
                      <span className="ct-hours-day">Sunday</span>
                      <span className="ct-hours-time">Closed</span>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;