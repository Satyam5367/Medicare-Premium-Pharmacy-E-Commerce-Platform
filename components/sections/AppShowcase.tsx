'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play, Download, Star } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-green-500 opacity-10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ top: '20%', right: '10%' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur">
                <Download className="w-4 h-4" />
                Download Our App
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-clash font-bold leading-tight mb-6">
              Healthcare in Your Pocket
            </h2>

            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Get exclusive app-only deals, instant notifications, and seamless shopping experience with our premium Medicare mobile app.
            </p>

            {/* App Features */}
            <motion.div className="space-y-4 mb-8">
              {[
                '✓ One-tap reordering',
                '✓ Prescription upload',
                '✓ Real-time tracking',
                '✓ Exclusive app discounts',
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-400 font-bold text-lg">{feature.split(' ')[0]}</span>
                  <span className="text-white/90">{feature.substring(2)}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Download Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-gray-900 font-semibold rounded-full hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </motion.button>

              <motion.button
                className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-gray-900 font-semibold rounded-full hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="text-sm font-bold">Play Store</div>
                </div>
              </motion.button>
            </motion.div>

            {/* App Rating */}
            <motion.div
              className="mt-8 flex items-center gap-4 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80">4.9 Stars • 150K+ Downloads</span>
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            className="relative h-96 md:h-full flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Phone Frame */}
            <motion.div
              className="relative w-64 h-96 rounded-3xl bg-gradient-to-b from-white to-gray-100 shadow-2xl border-8 border-gray-900 overflow-hidden"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Replace image from assets/images folder */}
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📱
                  </motion.div>
                  <p className="text-white text-sm font-semibold">App Screen Mockup</p>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-900 rounded-b-2xl" />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 bg-green-400 rounded-full opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
