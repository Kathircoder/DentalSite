import React from 'react';
import { Sparkles, ShieldCheck, Smile, Target, Zap, Baby } from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  { title: 'Pediatric Dentistry', desc: 'Gentle dental care for children with routine checkups, cleanings, and preventive care for healthy growing smiles.', icon: Baby },
  { title: 'Cosmetic Dentistry', desc: 'Transform your smile with veneers, whitening, and bonding designed to boost your confidence.', icon: Sparkles },
  { title: 'Dental Implants', desc: 'Permanent, natural-looking solutions for missing teeth that restore full function and aesthetics.', icon: ShieldCheck },
  { title: 'Digital Smile Design', desc: 'Advanced smile planning using digital technology to preview, design, and achieve a confident natural looking smile.', icon: Smile },
  { title: 'Orthodontic Treatment', desc: 'Straighten your teeth with modern braces and clear aligners for a perfectly aligned bite.', icon: Target },
  { title: 'Laser Dentistry', desc: 'Minimally invasive treatments using advanced laser technology for precise, pain-free gum care.', icon: Zap },
];

export default function Services() {
  return (
    <section id="services" className="section section-light">
      <div className="container">
        <Reveal>
          <div className="text-center mb-6">
            <span className="section-label">Services</span>
            <div className="divider"></div>
            <h2>What We Offer</h2>
            <p style={{ maxWidth: '540px', margin: '0 auto' }}>
              From routine checkups to full smile makeovers — we do it all under one roof with care and precision.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={i} delay={0.07 * i}>
                <div className="card" style={{ cursor: 'pointer' }}>
                  <div className="service-icon">
                    <Icon size={26} color="#ffffff" strokeWidth={1.8} />
                  </div>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
