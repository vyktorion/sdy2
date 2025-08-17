"use client";

import { motion } from 'framer-motion';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, FileText, Shield, Users, Clock, Heart } from 'lucide-react';
import { jsPDF } from "jspdf";

const sections = [
  {
    id: 'general',
    title: 'Dispoziții Generale',
    icon: FileText,
    color: 'from-purple-500 to-pink-500',
    content: [
      'Serendipity Academy este o instituție privată de educație artistică specializată în dans pentru copii și adolescenți.',
      'Prezentul regulament se aplică tuturor elevilor înscriși la academia noastră, precum și părinților/tutorilor acestora.',
      'Înscrierea la cursuri implică acceptarea integrală a prezentului regulament.',
      'Serendipity Academy își rezervă dreptul de a modifica regulamentul in orice moment fara notificare prealabila.',
      'Orice modificări vor fi afișate pe www.serendipity-academy.ro'
    ]
  },
  {
    id: 'inscriere',
    title: 'Înscriere',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    content: [
      'Înscrierea se face prin completarea formularului de inscriere de catre parinte/tutore și achitarea abonamentului aferent lunii in curs.',
      'Vârsta minimă pentru înscrierea la cursuri este de 4 ani împliniți.',
       'La înscriere se va prezenta adeverinta medicala - apt pentru efort fizic sustinut.',
      'Prima ședință este gratuită și nu implică obligativitatea continuării cursurilor.',
      'Locurile sunt limitate și se ocupă în ordinea înscrierii.',
      'Serendipity Academy își rezerva dreptul de a refuza înscrierea fără a fi obligată să motiveze decizia.'
    ]
  },
  {
    id: 'plati',
    title: 'Plăți și Taxe',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
    content: [
      'Abonamentul se achita lunar, în avans, in prima saptamana a fiecărei luni (in primele doua sedinte).',
      'Pentru inscrierile noi ce nu incep la data de 1 se va calcula un abonament conform cu numarul de sedinte ramase pana la sfarsitul lunii.',
      'Plata se poate face prin card sau numerar la receptie.',
      'Sedintele neefectuate in luna in care acestea sunt achitate nu se recupereaza si nu se scad din costul abonamentului.',
      'În cazul întârzierii plății cu mai mult de 10 zile, elevul va fi suspendat.',
    ]
  },
  {
    id: 'program',
    title: 'Program și Prezență',
    icon: Clock,
    color: 'from-orange-500 to-red-500',
    content: [
      'Programul cursurilor este afișat la începutul fiecărui semestru pe site, la receptie si pe grupurile de whatsapp .',
      'Absențele repetate pot duce la excluderea din program.',
      'Sedintele pierdute nu se recupereaza.',
      'În perioada sărbătorilor legale, nu se vor desfasura cursuri, sala fiind inchisa.',
      'Cursurile suspendate din cauza instructorului vor fi recuperate.',
      'Elevii care lipsesc mai mult de 3 săptămâni consecutive fără justificare vor fi exmatriculați.'
    ]
  },
  {
    id: 'comportament',
    title: 'Comportament și Disciplină',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    content: [
      'Elevii trebuie să manifeste respect față de instructori, colegi și personalul academiei.',
      'Limbajul vulgar, agresivitatea fizică sau verbală nu sunt tolerate.',
      'Elevii trebuie să poarte echipamentul adecvat pentru fiecare tip de curs.',
      'Este interzis consumul de alimente în sala de dans.',
      'Părinții nu au acces în sala de antrenament în timpul lecțiilor, cu excepția evenimentelor speciale.',
      'Deteriorarea bunurilor academiei provocate de elev va fi suportată financiar de către părinte.',
      'Comportamentul inadecvat poate duce la avertisment, suspendare sau excludere.',
      'Bullying-ul sub orice formă este strict interzis și va fi sancționat.'
    ]
  },
  {
    id: 'echipament',
    title: 'Echipament și Ținută',
    icon: Shield,
    color: 'from-violet-500 to-purple-500',
    content: [
      'Fiecare curs are cerințe specifice de echipament care trebuie respectate.',
      'Pentru balet/contemporan: body, dres, flexibili, părul prins în coc.',
      'Pentru dans modern: tricou. colanti, flexibili. parul prins in coada.',
      'Bijuteriile și accesoriile sunt interzise.',
      'Echipamentul trebuie să fie curat și în stare bună.',
      'Academia poate refuza participarea la curs în cazul echipamentului inadecvat.'
    ]
  },
  {
    id: 'sanatate',
    title: 'Sănătate și Siguranță',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    content: [
      'Adeverinta medicala este obligatorie și trebuie reînnoita anual.',
      'Copiii cu probleme de sănătate trebuie să anunțe instructorul înainte de curs.',
      'În caz de accidentare, părinții vor fi anunțați imediat.',
      'Copiii cu febră sau simptome de boală nu vor fi primiți la curs.',
      'În caz de epidemie, academia va respecta toate măsurile sanitare în vigoare.'
    ]
  },
  {
    id: 'evenimente',
    title: 'Spectacole și Concursuri',
    icon: Users,
    color: 'from-cyan-500 to-blue-500',
    content: [
      'Participarea la spectacole/concursuri/evenimente va fi posibila: in momentul in care elevii vor fi pregatiti, pezenta constanta la antrenament, instructorul/coregraful isi va da acordul.',
      'Costumele pentru spectacole se achiziționează separat și rămân proprietatea elevului.',
      'Costurile pentru participarea la spectacole/concursuri nu intra in costul abonamentului si sunt suportate de către părinte.'
    ]
  },
  {
    id: 'confidentialitate',
    title: 'Protecția Datelor',
    icon: Shield,
    color: 'from-indigo-500 to-purple-500',
    content: [
      'Academia respectă legislația în vigoare privind protecția datelor personale (GDPR).',
      'Datele personale sunt folosite exclusiv pentru activitățile academiei.',
      'Orice material foto sau video al academiei în care apare copilul îi aparține în totalitate academiei și, deci, dreptul de folosire a acestora aparține Serendipity Academy..'
    ]
  }
];

export default function Regulament() {
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
               Regulamentul Academiei
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

      {/* Regulations Content */}
      <section className="py-1 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:bg-gray-800">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-full flex items-center justify-center`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                    </div>
                    
                    <ul className="space-y-4">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} mt-2 flex-shrink-0`} />
                          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                            {item}
                          </p>
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

      {/* Table of Contents */}
      <section className="py-20 bg-gray-800 dark:from-purple-900/20 dark:to-pink-900/20">
        
    <div className="max-w-6xl mb-20 text-center items-center">
    <div className="border-t-2 border-gray-700 w-[1000px] mx-auto"></div>
    </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Cuprins Regulament
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sections.map((section, index) => (
                    <motion.a
                      key={section.id}
                      href={`#${section.id}`}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${section.color} rounded-full flex items-center justify-center`}>
                        <section.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {section.title}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-1 bg-gray-800 dark:from-purple-900/20 dark:to-pink-900/20">
        

    <div className="max-w-6xl mb-20 text-center items-center">
    <div className="border-t-2 border-gray-700 w-[1000px] mx-auto"></div>
    </div>

        <div className="max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Formular de înscriere
                  </span>
                </h3>
                <p className="font-medium text-gray-800 dark:text-gray-300 mb-6">
                  Descarcă versiunea printabilă și adu-l completat la prima vizită.
                </p>
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
                className="bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
              >
                  <Download className="w-5 h-5 mr-2" />
                  Descarcă formularul PDF
                </Button>
              </CardContent>
            </Card>
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