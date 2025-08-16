"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Award, Heart } from 'lucide-react';

export default function TeamSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-400 via-cyan-400 to-gray-400 dark:from-purple-900/20 dark:to-pink-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block w-full"
          >
            <Card className="bg-gradient-to-br from-cyan-300 via-cyan-500 to-cyan-300 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl w-full">
              <CardContent className="px-6 py-10 md:px-12 md:py-16">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight"
                >
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-dancing-script">
                    S|A TEAM
                  </span>
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
                    Echipa noastră de profesioniști pasionați aduce ani de experiență în dans și educație. 
                    Fiecare instructor este dedicat să inspire și să ghideze copiii în călătoria lor artistică.
                  </p>

                  <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-6 md:mt-8">
                    {/* Experiență */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center space-y-2 w-24"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 text-center">Experiență</span>
                    </motion.div>

                    {/* Profesionalism */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center space-y-2 w-24"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 text-center">Profesionalism</span>
                    </motion.div>

                    {/* Pasiune */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center space-y-2 w-24"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 text-center">Pasiune</span>
                    </motion.div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
