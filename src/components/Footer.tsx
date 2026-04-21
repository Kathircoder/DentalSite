import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-color)', borderTop: '1px solid var(--bg-tertiary)', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div className="grid grid-3 mb-6">
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>The Sheriff Dental</h3>
            <p>Sheriff Dental is dedicated to delivering exceptional, personalised dental care with compassion, precision, and excellence.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#why-choose-us">Why Choose Us</a>
              <a href="#testimonials">Testimonials</a>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <span>8/12 Sundaresan Layout, Trichy Rd, opp. Stanes motors, Coimbatore, Tamil Nadu - 641018</span>
              <span>+91 80725 23346</span>
              <span>info@sheiffdental.com</span>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ borderTop: '1px solid var(--bg-tertiary)', paddingTop: '2rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} The Sheriff Dental Clinic. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
