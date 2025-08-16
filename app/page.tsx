import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import GallerySection from '@/components/gallery-section';
import TeamSection from '@/components/team-section';
import CoursesSection from '@/components/courses-section';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';


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