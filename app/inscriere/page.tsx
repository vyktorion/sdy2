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
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Gift, Download, Send, Star } from 'lucide-react';
import { toast } from 'sonner';
import { jsPDF } from "jspdf";


const courses = [
  'Balet (4-6 ani)',
  'Balet (6-7 ani)',
  'Balet (8-9 ani)',
  'Contemporan (8-12 ani)',
  'Dans Modern (4-5 ani)',
  'Dans Modern (6-7 ani)',
  'Dans Modern (8-9 ani)',
  'Dans Modern (10-14 ani)',
  'Dans (4-7 ani) weekend',
  'Dans (8-12 ani) weekend'
];

const packages = [
  '17:00 - 17:45',
  '17:50 - 18:35',
  '18:40 - 19:25',
  '19:30 - 20:15',
  '11:00 - 11:45',
  '12:30 - 12:45'
];

export default function Inscriere() {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childAge: '',
    selectedCourse: '',
    hour: '',
    day: '',
    experience: '',
    medicalInfo: '',
    agreeTerms: false,
    agreeMarketing: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      toast.error('Trebuie să accepți termenii și condițiile pentru a continua.');
      return;
    }
    // Here you would typically send the form data to your backend
    toast.success('Înscrierea a fost trimisă cu succes! Vă vom contacta în curând.');
    // Reset form or redirect
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-400 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full mb-6">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Prima ședință GRATUITĂ!</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Înscrie-te Acum
              </span>
            </h1>
            <p className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
              Completează formularul de mai jos pentru a înscrie copilul tău la Serendipity Academy și pentru a programa prima ședință gratuită.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Formular de Înscriere
                    </span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Toate câmpurile marcate cu * sunt obligatorii
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Parent Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      Informații Părinte/Tutore
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nume *
                        </label>
                        <Input
                          id="parentName"
                          name="parentName"
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="Numele complet"
                        />
                      </div>
                      <div>
                        <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Telefon *
                        </label>
                        <Input
                          id="parentPhone"
                          name="parentPhone"
                          type="tel"
                          required
                          value={formData.parentPhone}
                          onChange={handleChange}
                          placeholder="Numărul de telefon"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          id="parentEmail"
                          name="parentEmail"
                          type="email"
                          required
                          value={formData.parentEmail}
                          onChange={handleChange}
                          placeholder="adresa@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Child Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      Informații Copil
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="childName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nume copil *
                        </label>
                        <Input
                          id="childName"
                          name="childName"
                          type="text"
                          required
                          value={formData.childName}
                          onChange={handleChange}
                          placeholder="Numele copilului"
                        />
                      </div>
                      <div>
                        <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Vârsta *
                        </label>
                        <Input
                          id="childAge"
                          name="childAge"
                          type="number"
                          required
                          min="3"
                          max="18"
                          value={formData.childAge}
                          onChange={handleChange}
                          placeholder="Vârsta"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      Selecție Curs
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="selectedCourse" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Cursul dorit *
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('selectedCourse', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Alege cursul" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course} value={course}>
                                {course}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="day" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Alege ziua
                        </label>
                        <Input
                          id="day"
                          name="day"
                          type="date"
                          required
                          value={formData.day}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="hour" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Alege ora
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('hour', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="hh:mm" />
                          </SelectTrigger>
                          <SelectContent>
                            {packages.map((pkg) => (
                              <SelectItem key={pkg} value={pkg}>
                                {pkg}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      Informații Adiționale
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Experiența anterioară în dans
                        </label>
                        <Textarea
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Descrie experiența anterioară a copilului în dans (dacă există)"
                        />
                      </div>
                      <div>
                        <label htmlFor="medicalInfo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Informații medicale relevante
                        </label>
                        <Textarea
                          id="medicalInfo"
                          name="medicalInfo"
                          value={formData.medicalInfo}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Menționează orice probleme medicale, alergii sau restricții de care ar trebui să știm"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => 
                          setFormData({ ...formData, agreeTerms: checked as boolean })
                        }
                        className="mt-1"
                      />
                      <label htmlFor="agreeTerms" className="text-sm text-gray-600 dark:text-gray-300">
                        Accept  
                        <a href="/regulament" className="text-purple-600 hover:underline ml-1">regulamentul</a> Serendipity Academy *
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Trimite înscrierea
                    </Button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      Vă vom contacta în maxim 24 de ore pentru a programa prima ședință gratuită
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
<Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl max-w-2xl mx-auto">
  <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-white" />
                </div>

    {/* Titlu */}
    <h3 className="text-2xl font-bold mb-4">
      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Formular de înscriere
      </span>
    </h3>

    {/* Text */}
    <p className="text-gray-600 dark:text-gray-300 mb-6">
      Descarcă versiunea printabilă și adu-l completat la prima vizită.
    </p>

    {/* Buton descărcare PDF cu ambele PNG-uri */}
    <Button
      onClick={async () => {
        const pdf = new jsPDF();
        const images = [
          { src: "/formular1.PNG", width: 180, height: 250 },
          { src: "/formular2.PNG", width: 180, height: 250 },
        ];

        for (let i = 0; i < images.length; i++) {
          const img = images[i];

          // Încarcă imaginea
          const imageEl = await new Promise<HTMLImageElement>((resolve) => {
            const imgEl = new Image();
            imgEl.src = img.src;
            imgEl.onload = () => resolve(imgEl);
          });

          pdf.addImage(imageEl, "PNG", 15, 15, img.width, img.height);

          if (i < images.length - 1) pdf.addPage();
        }

        pdf.save("Formular inscriere.pdf");
      }}
      variant="outline"
      className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
    >
      <div className="flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Descarcă formularul
      </div>
    </Button>
  </CardContent>
</Card>


          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
                De ce să alegi Serendipity Academy?
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Gift,
                title: 'Prima ședință gratuită',
                description: 'Copilul tău poate încerca cursul fără niciun angajament financiar'
              },
              {
                icon: Star,
                title: 'Instructori certificați',
                description: 'Echipa noastră are ani de experiență în dans și educație'
              },
              {
                icon: Star,
                title: 'Mediu sigur și prietenos',
                description: 'Creăm o atmosferă în care fiecare copil se simte confortabil'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}