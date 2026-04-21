import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Best Dental Clinic in Coimbatore - The Sheriff Dental',
  description: 'Searching for the best dental clinic in Coimbatore for your family? Get quality dental care with a focus on comfort and safety.',
  keywords: 'Sheriff Dental, Best Dental Clinic Coimbatore, Dental Implants, Cosmetic Dentistry',
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
