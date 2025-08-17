"use client";

import { motion } from 'framer-motion';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Orar() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
    <section className="py-10 bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          
            <h1 className="text-4xl md:text-6xl font-bold mt-10">
               <span className=" text-5xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-dancing-script">
               Orar Cursuri
              </span>
            </h1>

        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-20 h-20 bg-white/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{ 
          y: [0, 25, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-32 right-32 w-16 h-16 bg-white/20 rounded-full blur-sm"
      />
    </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gray-800 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[3/2] rounded-lg overflow-hidden group"
          >
            <Image
              src="/orar.jpg"
              alt="Orar Cursuri Dans Serendipity Academy - Program Săptămânal Complet"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-5xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-dancing-script">
              S|A TEAM
            </span>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Găsește ora perfectă pentru copilul tău și alătură-te comunității Serendipity Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
              >
                <Link href="/contact">
                  Contactează-ne
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
              >
                <Link href="/contact">
                  Înscrie-te acum
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}