import React from 'react';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import { Reveal } from './Reveal';
import Image from 'next/image';

export default function Hero() {
  return (
    <section style={{ padding: '5rem 0 6rem', position: 'relative', overflow: 'hidden', background: '#fff' }}>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div className="container grid grid-2 items-center" style={{ gap: '3.5rem', position: 'relative', zIndex: 1 }}>
        {/* Left */}
        <div>
          <Reveal delay={0.05}>
            <span className="pill" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} />
              Relax. You're in Expert Hands
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 style={{ marginBottom: '1.25rem', letterSpacing: '-1px' }}>
              Best Dental<br />
              <span style={{ color: '#2563eb' }}>Clinic</span> in<br />
              Coimbatore
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <p style={{ fontSize: '1.05rem', maxWidth: '460px', marginBottom: '2rem', lineHeight: 1.85 }}>
              Sheriff Dental is known for its friendly, personalised approach, experienced dentists, and a calm, welcoming environment helping patients feel comfortable from the moment they arrive.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="tel:+918072523346" className="btn btn-accent">
                Call Now
              </a>
              <a href="#services" className="btn btn-outline">
                Our Services <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { value: '15,000+', label: 'Happy Patients' },
                { value: '4.9★', label: '250 Reviews' },
                { value: '11+', label: 'Years Exp.' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#1a2235' }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — doctor photo */}
        <Reveal delay={0.2} direction="right">
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.13)',
              border: '5px solid white',
            }}>
              <Image
                src="/dr-sheriff.png"
                alt="Dr. Sheriff – Best Dentist in Coimbatore"
                width={580}
                height={620}
                style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: '1.75rem', right: '1.75rem',
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              padding: '1rem 1.5rem',
              boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
              animation: 'fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s both',
            }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#1a2235' }}>Dr. Sheriff</div>
              <div style={{ fontSize: '0.75rem', color: '#647186', marginTop: '2px' }}>Dental Implant Specialist</div>
              <div style={{ display: 'flex', gap: '2px', marginTop: '0.5rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />
                ))}
                <span style={{ fontSize: '0.75rem', color: '#647186', marginLeft: '4px' }}>4.9</span>
              </div>
            </div>

            {/* Accent dot decoration */}
            <div style={{
              position: 'absolute', top: '-20px', left: '-20px',
              width: '120px', height: '120px',
              borderRadius: '50%',
              background: 'rgba(37,99,235,0.08)',
              zIndex: -1,
            }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
