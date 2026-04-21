'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

const BOOKING_URL = 'https://www.thesheriffdental.com/testimonials/';

export type InvisalignContentVariant = 'section' | 'page';

export default function InvisalignContent({ variant }: { variant: InvisalignContentVariant }) {
  const HeadingTag = variant === 'page' ? ('h1' as const) : ('h2' as const);
  const wrapperPadding = variant === 'page' ? '2.25rem 0 0' : undefined;

  return (
    <div style={{ padding: wrapperPadding }}>
      <div className={variant === 'page' ? 'mb-6' : 'text-center mb-6'}>
        <Reveal>
          <span className="pill mb-2" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>
            CLEAR ALIGNERS
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <HeadingTag style={variant === 'page' ? { marginTop: '0.75rem' } : { marginTop: '1rem' }}>
            Invisalign in Coimbatore
          </HeadingTag>
        </Reveal>

        <Reveal delay={0.14}>
          <p
            style={{
              maxWidth: variant === 'page' ? '860px' : '760px',
              margin: variant === 'page' ? '0.75rem 0 0' : '0.75rem auto 0',
              color: 'var(--text-muted)',
              lineHeight: 1.85,
            }}
          >
            Looking for a straighter, more confident smile without metal braces? At The Sheriff Dental, our Invisalign and clear
            aligner treatments are designed to be discreet, comfortable, and predictable — with digital planning and expert care
            throughout your journey.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: variant === 'page' ? 'flex-start' : 'center' }}>
            <a href={BOOKING_URL} className="btn btn-accent">
              Book Now
            </a>
            {variant === 'section' ? (
              <a href="/invisalign-coimbatore" className="btn btn-outline">
                Learn more
              </a>
            ) : (
              <a href="#faq" className="btn btn-outline">
                Invisalign FAQ
              </a>
            )}
          </div>
        </Reveal>
      </div>

      <div className="grid grid-2 items-center" style={{ gap: '3rem' }}>
        <Reveal direction="left" delay={0.05}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'white',
                border: '1px solid var(--bg-tertiary)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <Image
                src="/invisalign/hero.svg"
                alt="Clear aligners (Invisalign) illustration"
                width={1600}
                height={900}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority={variant === 'section'}
              />
            </div>

            {/* Promo banner (responsive) */}
            <a
              href={BOOKING_URL}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--bg-tertiary)',
                boxShadow: 'var(--shadow-sm)',
                display: 'block',
                transform: 'translateY(0)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              aria-label="Book Invisalign consultation"
            >
              <Image
                src="/invisalign/promo.png"
                alt="Invisalign offer at The Sheriff Dental in Coimbatore"
                width={1104}
                height={621}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />

              {/* Cover old footer text & replace with your clinic name */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '0.75rem 1rem',
                  background: 'linear-gradient(90deg, rgba(10, 93, 48, 0.92), rgba(37, 99, 235, 0.22))',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                }}
              >
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, letterSpacing: '0.2px' }}>
                  Choose Invisalign. Choose The Sheriff Dental
                </div>
                <div
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    background: 'rgba(255,255,255,0.14)',
                    border: '1px solid rgba(255,255,255,0.22)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Book now
                </div>
              </div>
            </a>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.12}>
            <h3 style={{ marginBottom: '0.5rem' }}>Why choose The Sheriff Dental for Invisalign treatment?</h3>
          </Reveal>
          <Reveal delay={0.18}>
            <p style={{ marginBottom: '1rem' }}>
              Our orthodontic team blends experience with modern dental technology to deliver Invisalign and invisible braces
              treatment with clarity and confidence. Many patients searching for Invisalign treatment in Coimbatore choose us for
              our detailed planning and patient-first approach.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p style={{ marginBottom: '1.5rem' }}>
              From advanced scanners to step-by-step progress check-ups, we focus on precision, comfort, and natural-looking
              results — so you can improve your smile without disrupting your daily life.
            </p>
          </Reveal>

          <div className="grid" style={{ gap: '1rem' }}>
            {[
              {
                title: 'Invisibility',
                desc: 'Clear aligners are nearly invisible, helping you straighten your teeth discreetly and confidently.',
              },
              {
                title: 'Comfort',
                desc: 'Smooth, custom-fit aligners reduce irritation often associated with traditional braces.',
              },
              {
                title: 'Convenience',
                desc: 'Removable aligners make it easier to eat, brush, floss, and maintain oral hygiene throughout treatment.',
              },
            ].map((b, i) => (
              <Reveal key={b.title} delay={0.3 + i * 0.08}>
                <div
                  className="card"
                  style={{
                    padding: '1.25rem 1.25rem',
                    display: 'flex',
                    gap: '0.9rem',
                    alignItems: 'flex-start',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--bg-tertiary)',
                  }}
                >
                  <div
                    style={{
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))',
                      color: 'white',
                      minWidth: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)',
                      marginTop: '2px',
                    }}
                  >
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--text-main)' }}>{b.title}</div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.7 }}>
                      {b.desc}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3.5rem' }}>
        <Reveal>
          <h3 style={{ marginBottom: '1rem' }}>Your Invisalign journey at The Sheriff Dental</h3>
        </Reveal>

        <div className="grid" style={{ gap: '1rem' }}>
          {[
            {
              step: '1',
              title: 'Schedule your FREE consultation',
              desc: 'Begin your smile transformation with a comprehensive consultation. We’ll assess your needs and discuss your Invisalign journey.',
            },
            {
              step: '2',
              title: 'Custom treatment plan',
              desc: 'Receive a personalised plan outlining the steps to achieve your dream smile, with clear timelines and expectations.',
            },
            {
              step: '3',
              title: 'Precision fitting',
              desc: 'Get started with a precise aligner fitting and learn how to wear, care for, and maximize the effectiveness of your aligners.',
            },
            {
              step: '4',
              title: 'Progress check-ups',
              desc: 'Regular check-ups help us monitor your progress and make any necessary adjustments to keep your treatment on track.',
            },
            {
              step: '5',
              title: 'Reveal your new smile',
              desc: 'Watch your smile transform over the course of treatment — a discreet journey to a straighter smile with lasting confidence.',
            },
          ].map((s, i) => (
            <Reveal key={s.step} delay={0.08 * i}>
              <div
                className="card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  background: 'white',
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    background: 'var(--accent-light)',
                    border: '1px solid rgba(37, 99, 235, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 800,
                    color: 'var(--accent)',
                    flex: '0 0 auto',
                  }}
                >
                  {s.step}
                </div>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--text-main)' }}>{s.title}</div>
                  <div style={{ marginTop: '4px', color: 'var(--text-muted)', lineHeight: 1.75 }}>{s.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {variant === 'page' ? (
        <div id="faq" style={{ marginTop: '3.5rem' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', marginBottom: '0.5rem' }}>Invisalign in Coimbatore FAQ</h2>
            <p style={{ maxWidth: '860px' }}>
              Quick answers to common questions about Invisalign treatment, clear aligners, comfort, and how we plan your case at
              The Sheriff Dental.
            </p>
          </Reveal>

          <div className="grid" style={{ gap: '1rem', marginTop: '1.25rem' }}>
            {[
              {
                q: 'Is Invisalign treatment painful?',
                a: 'Most patients feel mild pressure for a day or two when switching to a new set of aligners. It’s usually manageable and much gentler than expected.',
              },
              {
                q: 'How often do I need check-ups?',
                a: 'We schedule periodic reviews to track progress and keep your treatment on course. The exact frequency depends on your case and treatment plan.',
              },
              {
                q: 'Can I remove aligners for eating and brushing?',
                a: 'Yes. Aligners are removable, so you can eat normally and maintain brushing and flossing during treatment.',
              },
              {
                q: 'How do I know if I’m a candidate for Invisalign?',
                a: 'The best way is a consultation. We assess your bite and alignment, then recommend the most suitable plan (aligners or other orthodontic options).',
              },
            ].map((f, i) => (
              <Reveal key={f.q} delay={0.08 * i}>
                <details
                  className="card"
                  style={{
                    padding: '1.1rem 1.25rem',
                    cursor: 'pointer',
                    background: 'white',
                  }}
                >
                  <summary
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                    }}
                  >
                    <span>{f.q}</span>
                    <span
                      aria-hidden="true"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--accent-light)',
                        border: '1px solid rgba(37, 99, 235, 0.15)',
                        color: 'var(--accent)',
                        flex: '0 0 auto',
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <div style={{ marginTop: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

