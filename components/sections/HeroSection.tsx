'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Pill, Heart, Zap } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-12 overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-green-200 to-emerald-100 opacity-30"
          style={{ top: '-100px', right: '-50px' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-cyan-200 to-blue-100 opacity-20"
          style={{ bottom: '-50px', left: '-50px' }}
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium text-green-700">
                <Zap className="w-4 h-4" />
                Premium Healthcare Delivery
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-clash font-bold leading-tight mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                Your Health,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
              >
                Delivered Fast
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              Experience premium pharmacy services with same-day delivery, genuine medications, and expert guidance—all at your fingertips.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-900 font-semibold rounded-full hover:border-green-500 hover:text-green-600 transition">
                Upload Prescription
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { value: '50K+', label: 'Products' },
                { value: '100K+', label: 'Happy Users' },
                { value: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-clash font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Floating Cards */}
          <motion.div
            className="relative h-full min-h-96 md:min-h-full flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Card */}
            <motion.div
              className="absolute w-64 h-80 rounded-3xl bg-gradient-to-br from-emerald-400 to-green-500 shadow-2xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ top: '20%', right: '10%' }}
            >
              <div className="p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <Pill className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold">50% Off</h3>
                  <p className="text-sm opacity-90">Vitamins Collection</p>
                </div>
                <button className="bg-white text-green-600 font-semibold px-4 py-2 rounded-full hover:bg-opacity-90 transition">
                  Shop
                </button>
              </div>
            </motion.div>

            {/* Secondary Card */}
            <motion.div
              className="absolute w-56 h-72 rounded-3xl bg-gradient-to-br from-cyan-300 to-blue-400 shadow-xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ bottom: '10%', left: '5%' }}
            >
              <div className="p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <Heart className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold">Heart Care</h3>
                  <p className="text-sm opacity-90">Essential Products</p>
                </div>
                <div className="text-3xl font-bold">★★★★★</div>
              </div>
            </motion.div>

            {/* Floating Pills */}
            {[
              { top: '10%', right: '5%', delay: 0 },
              { top: '60%', right: '15%', delay: 0.5 },
              { bottom: '20%', right: '5%', delay: 1 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-lg"
                animate={{ y: [0, 15, 0], rotate: [0, 360, 720] }}
                transition={{ duration: 6, repeat: Infinity, delay: pos.delay }}
                style={{ top: pos.top, right: pos.right }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
