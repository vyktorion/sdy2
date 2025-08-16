"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Award, Users, Target, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Heart,
    title: 'Pasiune',
    description: 'Iubim ceea ce facem și transmitem această pasiune fiecărui copil.'
  },
  {
    icon: Star,
    title: 'Excelență',
    description: 'Căutăm mereu să oferim cea mai bună experiență de învățare.'
  },
  {
    icon: Award,
    title: 'Profesionalism',
    description: 'Echipa noastră este formată din instructori certificați și experimentați.'
  },
  {
    icon: Users,
    title: 'Comunitate',
    description: 'Creăm o atmosferă prietenoasă unde fiecare copil se simte acceptat.'
  },
  {
    icon: Target,
    title: 'Dezvoltare',
    description: 'Focusul nostru este pe dezvoltarea completă a copilului.'
  },
  {
    icon: Lightbulb,
    title: 'Creativitate',
    description: 'Încurajăm expresia artistică și gândirea creativă.'
  }
];

export default function DespreNoi() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // pragul pentru mobil
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
               Despre Noi
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

     {/* Story Section */}
<section className="py-20 bg-gray-800 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Povestea Noastră
          </span>
        </h2>
        <div className="space-y-6 text-gray-300 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          <p>
            Serendipity Academy s-a născut din dorința de a crea un spațiu magic, unde copiii pot descoperi frumusețea dansului într-un mediu sigur, cald și inspirațional. Fondată în 2021, academia noastră a crescut cu fiecare pas de dans, vis și zâmbet.
          </p>
          <p>
            „Serendipity” exprimă acea bucurie neașteptată care apare când găsești ceva valoros fără să-l fi căutat — la fel cum, uneori, copiii descoperă în dans o pasiune profundă sau o latură nouă a lor, fără să fi știut că o caută.
          </p>
          <p>
            De-a lungul anilor, am avut privilegiul să ghidăm sute de copii în călătoria lor artistică, văzându-i cum cresc în încredere, disciplină și creativitate. Mulți dintre elevii noștri au avut ocazia să evolueze pe scene din țară și din străinătate, purtând cu ei bucuria dansului în forma ei cea mai sinceră.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
         <div className="relative w-[220px] sm:w-[200px] lg:w-[260px] aspect-[9/16] mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700">
    <video
      src="/video/sala.MP4"
      className="w-full h-full object-cover"
      controls
      playsInline
      preload="auto"
      muted
    />
    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent pointer-events-none" />
  </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-400 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Misiunea Noastră
                    </span>
                  </h3>
                  <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-center">
                    Să inspirăm și să educăm următoarea generație de dansatori, oferind o educație artistică 
                    de calitate într-un mediu care încurajează creativitatea, disciplina și dezvoltarea personală. 
                    Credem că dansul are puterea de a transforma vieți și de a construi încredere în sine.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Viziunea Noastră
                    </span>
                  </h3>
                  <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-center">
                    Ne propunem să fim un loc unde dansul devine o experiență formativă, nu doar o activitate - un spațiu în care pasiunea prinde rădăcini, iar fiecare pas deschide drumuri spre descoperire, expresie și bucurie.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Valorile Noastre
              </span>
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-300 max-w-3xl mx-auto">
              Principiile care ne ghidează în tot ceea ce facem și care definesc experiența Serendipity Academy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-400 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Echipa Noastră
              </span>
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
              Profesioniști pasionați care aduc experiență, creativitate și dedicare în fiecare lecție.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl max-w-4xl mx-auto">
              <CardContent className="p-12">
               <div className="relative h-64 mb-8 overflow-hidden">
                  <Image
                    src="/images/instructori.png"
                    alt="Echipa Serendipity Academy"
                    width={800} 
                    height={600}
                    className="object-cover rounded-2xl mt-4"
                  /> 
                  </div>
                <h3 className="text-2xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Instructorii Serendipity Academy
                  </span>
                </h3>
                <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-8">
                  Echipa noastră este formată din instructori cu experiență vastă în dans. 
                  Fiecare membru al echipei aduce o perspectivă unică și o pasiune autentică pentru 
                  dezvoltarea talentului copiilor. Împreună, creăm un mediu de învățare care inspiră 
                  și motivează fiecare elev să-și atingă potențialul maxim.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                    <div className="text-sm text-gray-800 dark:text-gray-400">Ani de experiență</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">5</div>
                    <div className="text-sm text-gray-800 dark:text-gray-400">Instructori calificati</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                    <div className="text-sm text-gray-800 dark:text-gray-400">Elevi activi</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}