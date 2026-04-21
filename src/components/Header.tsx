'use client';

import React from 'react';
import Image from 'next/image';
import { Reveal } from './Reveal';

export default function Header() {
  return (
    <header style={{
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid #edf0f5',
      padding: '0.9rem 0',
    }}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '42px', height: '42px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #1a2235, #2563eb)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 800, fontSize: '1rem',
            fontFamily: 'Outfit, sans-serif',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
          }}>
            SD
          </div>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#1a2235', lineHeight: 1.1 }}>
              The Sheriff Dental
            </div>
            <div style={{ fontSize: '0.7rem', color: '#9ca3af', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Coimbatore
            </div>
          </div>
        </a>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {[
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Results', href: '#results' },
            { label: 'Testimonials', href: '#testimonials' },
          ].map(({ label, href }) => (
            <a key={href} href={href} style={{
              fontWeight: 500, fontSize: '0.9rem', color: '#647186',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#2563eb')}
            onMouseLeave={e => (e.currentTarget.style.color = '#647186')}
            >
              {label}
            </a>
          ))}
          <a
            href="https://www.thesheriffdental.com/testimonials/"
            className="btn btn-accent"
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.875rem' }}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
