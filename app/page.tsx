import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import GallerySection from '@/components/gallery-section';
import TeamSection from '@/components/team-section';
import CoursesSection from '@/components/courses-section';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Serendipity Academy - Academie de Dans pentru Copii | București',
  description: 'Academie de dans pentru copii în București. Cursuri de balet, dans contemporan și modern pentru vârste 4-18 ani. Prima ședință GRATUITĂ! Înscrie-te acum!',
  keywords: [
    'academia dans copii București',
    'cursuri balet copii',
    'dans contemporan copii',
    'dans modern copii',
    'școală dans București',
    'prima ședință gratuită'
  ],
  openGraph: {
    title: 'Serendipity Academy - Academie de Dans pentru Copii',
    description: 'Cursuri de dans pentru copii în București. Prima ședință GRATUITĂ!',
    url: 'https://serendipity-academy.ro',
    images: [
      {
        url: 'https://sdy2-eight.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Serendipity Academy - Academia de Dans pentru Copii',
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <TeamSection />
      <CoursesSection />
      <CTASection />
      <Footer />
    </main>
  );
}