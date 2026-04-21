import React from 'react';
import { Reveal } from './Reveal';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: "Senthour Sen", review: "This was my first experience at a dental clinic, and it was a great one. Dr. Sheriff was friendly and caring. He constantly check to ensure I wasn't feeling any pain." },
    { name: "Nivedha Achuthan", review: "I had several dental problems and didn't know what to do. I decided to visit Dr. Sheriff and it turned out to be the best decision I made. Highly recommended." },
    { name: "JOEL GEMARIAH", review: "A wonderful experience at the Sheriff Dental clinic. The staff were friendly and welcoming, making me feel comfortable right away. Clean and well-organized." },
    { name: "Reshma", review: "Exceptional experience! Dr. Sheriff greeted me warmly and thoroughly explained everything, ensuring I was well-informed and comfortable." }
  ];

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--primary-color)' }}>
      <div className="container">
        <Reveal>
          <div className="text-center mb-6">
            <h2 className="mb-2">Hear What Our Patients Say</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Over 250+ reviews with a 4.9/5 rating.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-4 text-center">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="card" style={{
                background: 'var(--bg-color)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '2rem', height: '100%',
                position: 'relative'
              }}>
                <Quote size={32} color="var(--primary-color)" style={{ marginBottom: '1rem', opacity: 0.5 }} />
                <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '1.5rem', flexGrow: 1 }}>
                  "{t.review}"
                </p>
                <div style={{ fontWeight: 600, color: 'var(--text-muted)' }}>
                  - {t.name}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
