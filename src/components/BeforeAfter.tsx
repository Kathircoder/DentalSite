import React from 'react';
import { Reveal } from './Reveal';
import Image from 'next/image';

const cases = [
  { label: 'Full Mouth Implant', bg: '#0f172a' },
  { label: 'Full Mouth Implant', bg: '#0f172a' },
  { label: 'Full Mouth Implant', bg: '#0f172a' },
  { label: 'Cosmetic Dentistry', bg: '#1e293b' },
];

function PlaceholderPhoto({ tag, bg, shade }: { tag: 'Before' | 'After'; bg: string; shade: string }) {
  return (
    <div style={{
      background: bg,
      borderRadius: '14px',
      overflow: 'hidden',
      aspectRatio: '1 / 1',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Abstract tooth silhouette */}
      <div style={{
        width: '60%', height: '60%',
        borderRadius: '50% 50% 40% 40%',
        background: shade,
        opacity: 0.35,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        background: 'rgba(0,0,0,0.55)',
        color: '#fff',
        fontSize: '0.7rem',
        fontWeight: 700,
        padding: '3px 10px',
        borderRadius: '6px',
        letterSpacing: '1px',
      }}>
        {tag}
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="results" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <Reveal>
          <div className="text-center mb-6">
            <span className="section-label">Before After</span>
            <div className="divider"></div>
            <h2 style={{ textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
              Real People. Real Results.<br />Remarkable Smiles.
            </h2>
          </div>
        </Reveal>

        {/* Grid of before/after pairs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
          {/* Before row */}
          {cases.map((c, i) => (
            <Reveal key={`before-${i}`} delay={0.07 * i}>
              <PlaceholderPhoto tag="Before" bg={c.bg} shade="#475569" />
            </Reveal>
          ))}
          {/* Label row */}
          {cases.map((c, i) => (
            <div key={`label-${i}`} style={{
              textAlign: 'center',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#1a2235',
              padding: '0.5rem 0',
            }}>
              {c.label}
            </div>
          ))}
          {/* After row */}
          {cases.map((c, i) => (
            <Reveal key={`after-${i}`} delay={0.07 * i + 0.2}>
              <PlaceholderPhoto tag="After" bg="#0f4c35" shade="#34d399" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#gallery" className="btn btn-outline">
              View Our Clinic Gallery →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
