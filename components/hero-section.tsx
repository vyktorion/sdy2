"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-purple-200 to-purple-50 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900">
      <div className="absolute inset-0 opacity-1">
      {/* Desktop Banner */}
  <div className="hidden lg:block relative">
    <Image
      src="/banner.png"
      alt="Echipa Serendipity Academy"
      width={1910} 
      height={600}
      className="object-cover rounded-2xl"
    />
                                            <div className={`absolute inset-0 bg-gradient-to-t test2 opacity-70`} />
                                            
                                            </div>
                                          
      {/* Mobile Banner */}
  <div className="block lg:hidden relative">
    <Image
      src="/banner-mobil.png"
      alt="Echipa Serendipity Academy"
      width={1910} 
      height={600}
      className="object-cover rounded-2xl"
    />
                                            <div className={`absolute inset-0 bg-gradient-to-t test2 opacity-70`} />
                                            
                                            </div>  
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="block text-purple-600 dark:text-white mb-2">
              #NEVER MISS A
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent font-dancing-script" role="banner">
              CHANCE TO DANCE!
            </span>
          </motion.h1>
            <h2 className="sr-only">
              Școală de dans pentru copii în Sector 4 București – balet, dans modern și contemporan
            </h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            role="complementary"
          >
            Descoperă magia dansului la Serendipity Academy - academia unde copiii învață să se exprime prin mișcare, să dezvolte disciplina și să-și urmeze pasiunea pentru dans.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
              >
                <Link href="/contact">
                  Înscrie-te la o ședință gratuită
                </Link>
              </Button>
            <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
              >
              <Link href="/cursuri">
                Explorează cursurile 
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-16 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-sm"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}