'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const PromoBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Banner */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 bg-gradient-to-r from-emerald-500 to-green-600">
            {/* Content */}
            <motion.div className="text-white">
              <motion.div className="inline-flex items-center gap-2 mb-4 bg-white/20 rounded-full px-4 py-2 backdrop-blur">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-semibold">Limited Time Offer</span>
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-clash font-bold mb-4">
                Summer Health Sale
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-md">
                Get up to 50% off on selected wellness products. Stock is limited!
              </p>
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:shadow-xl transition"
                whileHover={{ scale: 1.05, gap: 12 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Sale <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              className="hidden md:block h-80 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img
                src="https://images.unsplash.com/photo-1652376252883-1e3ebe136844?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Medicine"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Secondary Banners Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Premium Skincare',
              description: '30% off on luxury brands',
              color: 'from-pink-500 to-rose-600',
              icon: '✨',
            },
            {
              title: 'Fitness & Wellness',
              description: 'Health devices at best prices',
              color: 'from-blue-500 to-cyan-600',
              icon: '💪',
            },
          ].map((banner, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl overflow-hidden p-8 bg-gradient-to-r ${banner.color} text-white`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10">
                <motion.div
                  className="text-4xl mb-3"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {banner.icon}
                </motion.div>
                <h4 className="text-2xl font-bold mb-2">{banner.title}</h4>
                <p className="text-white/90 mb-4">{banner.description}</p>
                <motion.button
                  className="text-sm font-semibold underline underline-offset-4 hover:no-underline transition"
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.button>
              </div>

              {/* Floating circles */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
