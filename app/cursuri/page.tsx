"use client";

import { motion } from 'framer-motion';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 'balet',
    title: 'BALET',
    description: 'Cursurile de balet oferă o bază solidă în tehnica clasică, dezvoltând postura, grația și disciplina. Copiii învață pozițiile de bază, mișcările fundamentale și coordonarea, totul într-un mediu distractiv și încurajator.',
    image: '/images/balet.jpeg',
    color: 'from-pink-400 to-rose-400',
    age: '4-10 ani',
    duration: '45 min',
    level: 'Niveluri: Incepatori, Intermediar',
    groupSize: '10-15 copii',
    benefits: [
      'Dezvoltarea posturii corecte',
      'Îmbunătățirea flexibilității',
      'Coordonarea și echilibrul',
      'Disciplina și concentrarea',
      'Expresia artistică'
    ],
  },
  {
    id: 'contemporan',
    title: 'DANS CONTEMPORAN',
    subtitle: 'Expresie artistică liberă',
    description: 'Dansul contemporan încurajează creativitatea și expresia personală, combinând tehnici moderne cu mișcări fluide. Copiii învață să-și exprime emoțiile prin dans și să dezvolte propriul stil artistic.',
   image: '/images/contemporan.jpeg',
    color: 'from-cyan-400 to-cyan-500',
    age: '8-14 ani',
    duration: '45 min',
    level: 'Nivel: Intermediar',
    groupSize: '10-15 copii',
    benefits: [
      'Expresia creativă',
      'Flexibilitatea mentală',
      'Tehnici moderne de dans',
      'Încrederea în sine',
      'Gândirea artistică'
    ],
    schedule: [
      'Luni: 18:00 - 19:15 (8-12 ani)',
      'Miercuri: 18:00 - 19:15 (13-18 ani)',
      'Vineri: 16:00 - 17:15 (8-12 ani)',
      'Sâmbătă: 11:00 - 12:15 (toate vârstele)'
    ]
  },
  {
    id: 'modern',
    title: 'DANS MODERN',
    subtitle: 'Energie și mișcări dinamice',
    description: 'Cursurile de dans modern îmbină stiluri variate cu energie și expresivitate. Copiii învață coregrafii pe muzică actuală, dezvoltându-și simțul ritmului și încrederea în mișcare.',
    image: '/images/modern.jpeg',
    color: 'from-cyan-400 to-cyan-500',
    age: '4-16 ani',
    duration: '45 min',
    groupSize: '10-15 copii',
    level: 'Niveluri: Incepatori, Intermediar, Avansati',
    benefits: [
      'Dezvoltarea ritmului',
      'Coordonarea complexă',
      'Energia și vitalitatea',
      'Lucrul în echipă',
      'Performanța scenică'
    ],
    schedule: [
      'Marți: 18:00 - 19:00 (7-11 ani)',
      'Joi: 17:00 - 18:00 (7-11 ani)',
      'Joi: 18:00 - 19:00 (12-17 ani)',
      'Sâmbătă: 12:00 - 13:00 (toate vârstele)'
    ]
  },
  {
    id: 'individual',
    title: 'LECȚII INDIVIDUALE',
    subtitle: 'Atenție personalizată',
    description: 'Lecțiile individuale oferă atenție personalizată și un program adaptat nevoilor specifice ale fiecărui copil. Ideale pentru pregătirea concursurilor sau pentru dezvoltarea accelerată a abilităților.',
    image: '/images/individual.jpeg',
    color: 'from-pink-400 to-rose-400',
    age: 'Minim 4 ani',
    duration: '50 min',
    level: 'Niveluri: Incepatori, Intermediar, Avansati',
    groupSize: '1 copil',
    benefits: [
      'Atenție individualizată',
      'Progres accelerat',
      'Program personalizat',
      'Flexibilitate în orar',
      'Pregătire pentru concursuri'
    ],
    schedule: [
      'Program flexibil',
      'Luni - Vineri',
      'Programare în funcție de disponibilitate'
    ]
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
               Cursurile Noastre
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
                      <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full font-semibold">
                        {course.age}
                      </span>
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

                  <p className="text-gray-300 dark:text-gray-300 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Info */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-gray-300 dark:text-gray-400">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-gray-300 dark:text-gray-400">{course.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-gray-300 dark:text-gray-400">{course.level}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-400 dark:text-white">
                      Beneficii:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
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