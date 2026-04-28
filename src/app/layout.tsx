import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thesheriffdental.com'),
  title: 'Best Dental Clinic in Coimbatore - The Sheriff Dental',
  description:
    'Searching for the best dental clinic in Coimbatore for your family? Get quality dental care with a focus on comfort and safety.',
  keywords: 'Sheriff Dental, Best Dental Clinic Coimbatore, Dental Implants, Cosmetic Dentistry, Invisalign in Coimbatore',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Best Dental Clinic in Coimbatore - The Sheriff Dental',
    description:
      'Quality dental care in Coimbatore with a focus on comfort, safety, and modern treatments including Invisalign.',
    siteName: 'The Sheriff Dental',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental Clinic in Coimbatore - The Sheriff Dental',
    description:
      'Quality dental care in Coimbatore with a focus on comfort, safety, and modern treatments including Invisalign.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
