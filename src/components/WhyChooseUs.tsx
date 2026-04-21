import React from 'react';
import { Reveal } from './Reveal';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { title: "Experienced Dental Experts", desc: "Years of clinical experience and a gentle approach ensure that you're always in safe hands." },
    { title: "Personalised Care Plans", desc: "We don't believe in one-size-fits-all. Your smile gets a custom plan tailored just for you." },
    { title: "Advanced Dental Technology", desc: "From digital scans to laser tools, we use the latest tech for accurate and pain-free treatments." },
    { title: "Full Range of Services", desc: "From kids’ care to cosmetic makeovers and dental implants — we do it all under one roof." },
    { title: "Affordable & Transparent Pricing", desc: "High-quality care that fits your budget, with no surprise fees or hidden charges." },
    { title: "Trusted by Thousands", desc: "Our loyal patients and top-rated reviews speak for themselves — Coimbatore trusts Sheriff Dental." }
  ];

  return (
    <section id="why-choose-us" className="section section-light" style={{ background: 'var(--bg-color)', borderTop: '1px solid var(--bg-tertiary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Reveal>
          <div className="text-center mb-6">
            <h2 className="mb-2">Why Choose Sheriff Dental?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Quality dental care with a focus on comfort and safety.</p>
          </div>
        </Reveal>
        
        <div className="flex flex-col gap-4">
          {reasons.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card" style={{ 
                display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                background: 'var(--bg-secondary)', border: 'none' 
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary-color-dark), var(--text-main))',
                  color: 'white',
                  minWidth: '36px', height: '36px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>{r.title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
