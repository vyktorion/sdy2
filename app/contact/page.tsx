"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';
import { Sparkles, Gift, Users } from 'lucide-react';

// Import EmailJS
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trimite email folosind EmailJS
    emailjs.send(
      'service_6chy5am',      
      'template_wcbov2h',     
      formData,              
      'HCaNSvkiAJrBqP8Jx'      
    )
    .then(() => {
      toast.success('Mesajul a fost trimis cu succes! Vă vom contacta în curând.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch(() => {
      toast.error('Ceva nu a mers bine. Încearcă din nou.');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
               Contactează-ne
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

      {/* Contact Section */}
      <section className="py-20 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className={"hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:bg-gray-800 border-0"}>
                   <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Trimite-ne un mesaj
                    </span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                          Nume *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-gray-200"
                          placeholder="Numele tău"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-200"
                        placeholder="adresa@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                        Mesaj *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-gray-200"
                        placeholder="Scrie mesajul tău aici..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="outline"
                      className="w-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Trimite mesajul
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >

              <div className="space-y-4">
                <Card className="bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:from-purple-900/20 dark:to-pink-900/20 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Adresa</h3>
                        <p className="text-gray-800 dark:text-gray-300">
                          București, sector 4<br />
                          Șoseaua Giurgiului nr. 37
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:from-blue-900/20 dark:to-cyan-900/20 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          WhatsApp</h3>
                        <p className="text-gray-800 dark:text-gray-300">
                          +40 123 456 789
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:from-emerald-900/20 dark:to-teal-900/20 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                        <p className="text-gray-800 dark:text-gray-300">
                          serendipityacademy.ro@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:from-orange-900/20 dark:to-amber-900/20 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Program</h3>
                        <div className="text-gray-800 dark:text-gray-300 text-sm space-y-1">
                          <p>Luni - Vineri: 14:00 - 21:00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5 md:py-20 bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-400 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
             <div className="text-center">
                  <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.8467587011204!2d26.094383799999997!3d44.413213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff55aad006c7%3A0x5c6f6d2c7f4f0ac8!2sSos.%20Giurgiului%2037%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1710001234567!5m2!1sro!2sro" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}