import React from 'react';
import { Reveal } from './Reveal';
import InvisalignContent from './InvisalignContent';

export default function InvisalignSection() {
  return (
    <section id="aligners" className="section section-light" style={{ paddingTop: '5rem' }}>
      <div className="container">
        <Reveal>
          <InvisalignContent variant="section" />
        </Reveal>
      </div>
    </section>
  );
}

