'use client';

import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
              <h1 className="text-4xl md:text-5xl font-clash font-bold">My Wishlist</h1>
            </motion.div>
          </div>
        </section>

        {/* Wishlist Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center py-20 bg-gray-50 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-600">Your wishlist is empty</p>
            <p className="text-gray-500 mt-2">Save your favorite products to view them later</p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
