import React from 'react';
import { Reveal } from './Reveal';
import Image from 'next/image';

export default function ClinicGallery() {
  const highlights = [
    { title: 'OPG Facility', desc: 'Advanced digital X-ray and OPG imaging for precise, accurate diagnosis before every treatment.' },
    { title: 'Modern Treatment Rooms', desc: 'State-of-the-art dental chairs and equipment designed for your comfort and safety.' },
    { title: 'Premium Ambience', desc: 'A calm, welcoming space thoughtfully designed to make every patient feel instantly at ease.' }
  ];

  return (
    <section id="gallery" className="section section-light">
      <div className="container">
        <Reveal>
          <div className="text-center mb-6">
            <span className="pill" style={{ fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '1rem', display: 'inline-block' }}>
              GALLERY
            </span>
            <h2 style={{ marginTop: '1rem', textTransform: 'uppercase' }}>Our Clinic Tour</h2>
            <p style={{ maxWidth: '520px', margin: '0.5rem auto 0' }}>
              Step inside The Sheriff Dental — where comfort, precision, and modern technology come together.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.10)',
            border: '1px solid var(--bg-tertiary)',
            marginBottom: '2.5rem'
          }}>
            <Image
              src="/clinic-tour.png"
              alt="The Sheriff Dental Clinic Tour - Modern Facility"
              width={1200}
              height={560}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </Reveal>

        <div className="grid grid-3" style={{ gap: '1.5rem' }}>
          {highlights.map((item, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}>
              <div className="card" style={{ background: 'white', textAlign: 'center', padding: '2rem' }}>
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '14px',
                  background: 'var(--bg-secondary)',
                  margin: '0 auto 1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem'
                }}>
                  {['🦷', '🏥', '✨'][i]}
                </div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
