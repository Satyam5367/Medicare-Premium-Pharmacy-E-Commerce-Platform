'use client';

import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ShoppingCart, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

export default function CartPage() {
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
              className="flex items-center gap-3"
            >
              <ShoppingCart className="w-8 h-8 text-green-600" />
              <h1 className="text-4xl md:text-5xl font-clash font-bold">Shopping Cart</h1>
            </motion.div>
          </div>
        </section>

        {/* Cart Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <motion.div
                className="text-center py-12 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-600">Your cart is empty</p>
                <p className="text-gray-500 mt-2">Add some products to get started!</p>
              </motion.div>
            </div>

            {/* Order Summary */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-bold text-lg mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg">Total</span>
                <span className="text-2xl font-bold text-green-600">$0.00</span>
              </div>

              <motion.button
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled
              >
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </motion.button>

              <p className="text-center text-xs text-gray-600 mt-4">
                Add items to cart to proceed
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
