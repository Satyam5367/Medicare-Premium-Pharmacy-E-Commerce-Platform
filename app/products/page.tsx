'use client';

import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';

export default function ProductsPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-clash font-bold mb-4">
                All Products
              </h1>
              <p className="text-lg text-gray-600">
                Browse our complete catalog of healthcare products
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <motion.div
              className={`md:block ${filterOpen ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Category</h3>
                  <div className="space-y-2">
                    {['Skin Care', 'Hair Care', 'Vitamins', 'Devices'].map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {['Under $25', '$25 - $50', '$50 - $100', 'Over $100'].map((range) => (
                      <label key={range} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Rating</h3>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">⭐ {rating}+</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              {/* Search & Sort */}
              <div className="flex gap-4 mb-8">
                <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent border-0 outline-none px-3 py-2 w-full"
                  />
                </div>
                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                </button>
              </div>

              {/* Placeholder - Products would be loaded here */}
              <div className="text-center py-12">
                <p className="text-gray-600">Product grid will display here with filtering and sorting options</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
