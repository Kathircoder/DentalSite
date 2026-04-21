import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InvisalignContent from '../../components/InvisalignContent';

export const metadata: Metadata = {
  title: 'Invisalign in Coimbatore | Clear Aligners - The Sheriff Dental',
  description:
    'Looking for Invisalign in Coimbatore? Get clear aligners with digital planning, comfortable fittings, and expert progress check-ups at The Sheriff Dental. Book your consultation.',
  keywords:
    'Invisalign in Coimbatore, clear aligners Coimbatore, invisible braces Coimbatore, aligners treatment Coimbatore, orthodontic treatment Coimbatore, The Sheriff Dental',
};

export default function InvisalignCoimbatorePage() {
  return (
    <>
      <Header />
      <main className="section section-light" style={{ paddingTop: '4.5rem' }}>
        <div className="container">
          <InvisalignContent variant="page" />

          <div style={{ marginTop: '3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', marginBottom: '0.75rem' }}>
              Clear aligners treatment in Coimbatore — planned for predictable results
            </h2>
            <p style={{ maxWidth: '900px' }}>
              Invisalign treatment is a modern orthodontic option that uses a series of custom-made, transparent aligners to move
              teeth gradually. Every case is different — that’s why we begin with a detailed evaluation and digital planning so
              you understand the steps, expected outcomes, and timelines before you start.
            </p>
            <p style={{ maxWidth: '900px' }}>
              If you’re comparing Invisalign near you, invisible braces, or clear aligners in Coimbatore, our team will help you
              choose the most suitable approach based on your bite, alignment, lifestyle, and goals.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

