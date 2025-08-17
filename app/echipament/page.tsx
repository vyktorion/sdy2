"use client";

import { motion } from 'framer-motion';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {  ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 'balet',
    title: 'BALET / CONTEMPORAN',
    image: '/images/balet.jpeg',
    color: 'from-pink-400 to-rose-400',
     benefits: [
      'Flexibili roz',
      'Dres roz',
      'Body roz',
      'Păr prins în coc',
      'Sticla cu apa'
    ]
  },
  {
    id: 'modern',
    title: 'DANS MODERN',
    image: '/images/modern.jpeg',
    color: 'from-cyan-400 to-cyan-500',
     benefits: [
      'Flexibili negri',
      'Colanți negri',
      'Tricou negru',
      'Păr prins în coada',
      'Sticla cu apa'
    ],
  },
  {
    id: 'individual',
    title: 'INDIVIDUAL',
    image: '/images/individual.jpeg',
    color: 'from-pink-400 to-rose-400',
    benefits: [
      'In funcție de stilul de dans',
      'Flexibili roz / negri',
      'Dres / colanti',
      'Body / tricou',
      'Parul prins',
      'Sticla cu apa'
    ],
  }
];

export default function Cursuri() {
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
               Echipament
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

      {/* Courses Section */}
      <section className="py-20 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                id={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
               className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:items-center scroll-mt-40`}

              >
                {/* Image */}
                <div className="lg:w-1/2">
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60`} />
                    <div className="absolute top-6 left-6">
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      <span className={`bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>
                        {course.title}
                      </span>
                    </h2>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-200 dark:text-white">
                      Echipament:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-1 gap-2">
                      {course.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${course.color}`} />
                          <span className="text-sm text-gray-300 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    asChild
                    className={`bg-gradient-to-r ${course.color} hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300`}
                  >
                    <Link href="/contact" className="flex items-center space-x-2">
                      <span>Înscrie-te acum</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
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
                  <span className=" text-5xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-dancing-script">
                    S|A TEAM
                  </span>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Alătură-te comunității Serendipity Academy și descoperă bucuria dansului într-un mediu profesional și prietenos.
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