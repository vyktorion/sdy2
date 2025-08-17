"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "/images/damask.png",
    alt: "Christmas Fairytale - Decembrie 2024",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/images/spectacol3.JPG",
    alt: "Dancing Stars - Iunie 2023",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/images/sala2.jpg",
    alt: "Summer Party",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/images/spectacol5.jpg",
    alt: "Dancing Stars - Iunie 2024",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: "/images/spectacol1.JPG",
    alt: "Dancing Stars - Iunie 2025",
    className: "col-span-2 row-span-1",
  },
  {
    id: 6,
    src: "/images/sala12.jpeg",
    alt: "Halloween Party",
    className: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: "/images/spectacol4.JPG",
    alt: "Christmas Fairytale Decembrie 2023",
    className: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: "/images/sala3.jpg",
    alt: "Chritmas Party",
    className: "col-span-1 row-span-1",
    isVideo: false,
  },
];

export default function GallerySection() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-20  bg-gray-800 dark:bg-gray-900">
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
              Galeria Noastră
            </span>
          </h2>
        </motion.div>

        {/* Grid Gallery - only on large screens */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4 grid-flow-row-dense">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${item.className} relative overflow-hidden rounded-2xl group cursor-pointer`}
              onMouseEnter={() => setHoveredImage(item.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {item.isVideo ? (
                <video
                  src={item.src}
                  controls
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

              {!item.isVideo && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredImage === item.id ? 1 : 0,
                  y: hoveredImage === item.id ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-4 right-4 z-10"
              >
                <p className="text-white font-semibold text-lg">{item.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

      {/* Mobile Slider - only on small/medium screens */}
<div className="block lg:hidden relative w-full aspect-[16/9] rounded-xl">
  <Image
    src={galleryItems[currentIndex].src}
    alt={galleryItems[currentIndex].alt}
    fill
    className="object-cover transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
  <p className="absolute top-1 left-4 text-white font-semibold text-lg z-10">
    {galleryItems[currentIndex].alt}
  </p>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
