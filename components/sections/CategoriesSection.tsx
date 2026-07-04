'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const CategoriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 1, name: 'Skin Care', color: 'from-pink-300 to-rose-400', icon: '✨' },
    { id: 2, name: 'Baby Care', color: 'from-blue-300 to-cyan-400', icon: '👶' },
    { id: 3, name: 'Diabetes Care', color: 'from-yellow-300 to-orange-400', icon: '💉' },
    { id: 4, name: 'Hair Care', color: 'from-amber-300 to-yellow-400', icon: '💇' },
    { id: 5, name: 'Eye Care', color: 'from-purple-300 to-indigo-400', icon: '👁️' },
    { id: 6, name: 'Heart Care', color: 'from-red-300 to-pink-400', icon: '❤️' },
    { id: 7, name: 'Vitamins', color: 'from-green-300 to-emerald-400', icon: '💊' },
    { id: 8, name: 'Devices', color: 'from-slate-300 to-gray-400', icon: '🔧' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-clash font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Browse our extensive collection of healthcare products organized by category for your convenience
          </p>
        </motion.div>

        {/* Categories Scroll */}
        <div className="relative">
          {/* Left Button */}
          <motion.button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>

          {/* Categories Grid */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide"
          >
            {categories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/categories/${category.id}`}
                  className="group"
                >
                  <motion.div
                    className={`min-w-max w-48 h-56 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg overflow-hidden cursor-pointer`}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 text-center group-hover:shadow-2xl transition">
                      <motion.div
                        className="text-6xl mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="font-bold text-xl group-hover:scale-110 transition-transform">
                        {category.name}
                      </h3>
                      <p className="text-sm opacity-90 mt-2">Shop Now →</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <motion.button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
