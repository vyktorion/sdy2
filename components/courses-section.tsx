"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 'balet',
    title: 'BALET',
    description: 'Fundamentele clasice ale dansului, dezvoltarea posturii și a grației.',
    image: '/images/balet.jpeg',
    color: 'from-pink-400 to-rose-400',
    age: '4-10 ani'
  },
  {
    id: 'contemporan',
    title: 'CONTEMPORAN',
    description: 'Expresie artistică liberă, creativitate și tehnici moderne de dans.',
    image: '/images/contemporan.jpeg',
    color: 'from-cyan-400 to-cyan-500',
    age: '8-14 ani'
  },
  {
    id: 'modern',
    title: 'MODERN',
    description: 'Stiluri moderne de dans, energie și mișcări dinamice.',
    image: '/images/modern.jpeg',
    color: 'from-cyan-400 to-cyan-500',
    age: '4-16 ani'
  },
  {
    id: 'individual',
    title: 'INDIVIDUAL',
    description: 'Lecții personalizate adaptate nevoilor și ritmului fiecărui copil.',
    image: '/images/individual.jpeg',
    color: 'from-pink-400 to-rose-400',
    age: 'Minim 6 ani'
  }
];

export default function CoursesSection() {
  return (
    <section className="py-20 bg-gray-800 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Cursurile Noastre
            </span>
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-3xl mx-auto">
            Oferim o gamă variată de cursuri de dans pentru toate vârstele și nivelurile, 
            de la primii pași în balet la tehnici avansate de dans contemporan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 dark:bg-gray-800">
                <div className="relative overflow-hidden aspect-[16/9] md:aspect-auto md:h-64">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60`} />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {course.age}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  >
                    <Link href={`/cursuri#${course.id}`} className="flex items-center justify-center space-x-2">
                      <span>Vezi mai mult</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}