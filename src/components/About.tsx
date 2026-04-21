import React from 'react';
import { Reveal } from './Reveal';
import { UserCheck, Star, Award } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section section-light">
      <div className="container">
        <Reveal>
          <div className="text-center mb-6">
            <span className="pill mb-2" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>BEHIND THE SMILE</span>
            <h2 style={{ marginTop: '1rem' }}>Meet Our Expert Dentist</h2>
          </div>
        </Reveal>

        <div className="grid grid-2 items-center" style={{ gap: '4rem' }}>
          {/* Doctor Photo */}
          <Reveal delay={0.1}>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
              border: '4px solid white',
              maxWidth: '420px',
              margin: '0 auto'
            }}>
              <Image
                src="/dr-sheriff.png"
                alt="Dr. Sheriff - Dental Implant Surgeon"
                width={420}
                height={520}
                style={{ objectFit: 'cover', display: 'block', width: '100%', height: 'auto' }}
              />
              {/* Badge overlay */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '0.75rem 1.25rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#333' }}>Dr. Sheriff</div>
                <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '2px' }}>11+ Years Experience</div>
              </div>
            </div>
          </Reveal>

          {/* Info */}
          <div>
            <Reveal delay={0.2}>
              <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: '16px',
                padding: '1.5rem 2rem',
                marginBottom: '1.5rem',
                border: '1px solid var(--bg-tertiary)'
              }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#333', marginBottom: '0.25rem' }}>
                  Dr. Sheriff - B.D.S., MS(IMPLANTOLOGY-ITALY)., FIFD., PGDCF
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  Dental Implant Surgeon & Implant Prosthodontist - 11+ years of experience
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem', color: '#555' }}>
                Dr. Sheriff is committed towards delivering unparalleled care at one of the finest
                rated dental clinic in Coimbatore. He specializes in dental implants, alongside
                offering general and specialized services such as cosmetics and prosthetics
                dentistry. In addition, with his expertise in laser dentistry, Dr. Sheriff painlessly
                cares for his patients through minimally invasive procedures ensuring comfort during
                every visit.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
              }}>
                {[
                  { icon: <UserCheck size={22} />, value: '15,000+', label: 'Happy Smiles' },
                  { icon: <Award size={22} />, value: '1,000+', label: 'Implants Placed' },
                  { icon: <Star size={22} />, value: '4.9/5', label: 'Google Reviews' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    textAlign: 'center',
                    border: '1px solid var(--bg-tertiary)',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <div style={{ color: '#555', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#333' }}>{stat.value}</div>
                    <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '2px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
