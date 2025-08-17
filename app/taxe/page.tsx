"use client";

import { motion } from 'framer-motion';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Star, Gift, Users, TriangleAlert  } from 'lucide-react';

const packages = [
  {
    name: 'Balet / Contemporan',
    price: '290',
    period: 'lună',
    description: 'Prima sedinta gratuita',
    features: [
      '2 sedinte pe saptamana'
    ],
    color: 'from-orange-500 to-red-500',
    popular: false
  },
  {
    name: 'Dans Modern',
    price: '260',
    period: 'lună',
    description: 'Prima sedinta gratuita',
    features: [
      '2 sedinte pe saptamana'
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: true
  },
  {
    name: 'Lectii individuale',
    price: '110',
    period: 'sedinta',
    description: 'Adaptat fiecarui elev',
    features: [
      'Program personalizat'
    ],
    color: 'from-purple-500 to-pink-500',
    popular: false
  }
];

const discounts = [
  {
    title: 'Balet - Frati / Surori',
    discount: '520 lei',
    description: 'Reducere 60 lei',
    icon: Users
  },
  {
    title: 'Modern - Frati / Surori',
    discount: '460 lei',
    description: 'Reducere 60 lei',
    icon: Users
  },
  {
    title: 'Balet + Modern',
    discount: '490 lei',
    description: 'Reducere 60 lei',
    icon: Star
  }
];

export default function Taxe() {
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
               Abonamente lunare
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

      {/* Packages Section */}<section className="pt-10 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto flex items-center justify-center gap-2 leading-none text-center mb-10">
              <TriangleAlert size={20} color="red" className="relative top-[2px]" />
              Valabil de la data de 1 până la finalul lunii
              <TriangleAlert size={20} color="red" className="relative top-[2px]" />
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                
                <Card className={"hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 dark:bg-gray-800 border-0"}>
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {pkg.description}
                      </p>
                      <div className="mb-6">
                        <span className={`text-5xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                          {pkg.price}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 ml-2">
                          lei/{pkg.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts Section */}
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
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-dancing-script">
                Reduceri Speciale
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {discounts.map((discount, index) => (
              <motion.div
                key={discount.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <discount.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                      {discount.title}
                    </h3>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                      {discount.discount}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {discount.description}
                    </p>
                  </CardContent>
                </Card>
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
                className="bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
              >
                <Link href="/contact">
                  Contactează-ne
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
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