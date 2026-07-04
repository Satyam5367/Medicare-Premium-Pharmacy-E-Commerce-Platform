'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FeaturedBrands = () => {
  const brands = [
    { id: 1, name: 'Pharma Plus', logo: '/assets/images/brand-1.png' },
    { id: 2, name: 'Health First', logo: '/assets/images/brand-2.webp' },
    { id: 3, name: 'Wellness Co', logo: '/assets/images/brand-3.png' },
    { id: 4, name: 'Quality Care', logo: '/assets/images/brand-4.png' },
    { id: 5, name: 'Vita Shield', logo: '/assets/images/brand-2.png' },
    { id: 6, name: 'Med Solutions', logo: '/assets/images/brand-5.png' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-clash font-bold mb-4">
            Featured Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trust the world's leading healthcare brands, all available on Medicare
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer flex items-center justify-center h-32 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                {/* Glass Effect Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition"
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Brand Logo */}
                <motion.img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-12 object-contain relative z-10"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
              <h3 className="text-center mt-3 font-semibold text-gray-700 text-sm">
                {brand.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
