'use client';

import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CreditCard, Truck, Shield, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-clash font-bold"
            >
              Checkout
            </motion.h1>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-12">
            {[1, 2, 3, 4].map((s, i) => (
              <motion.div key={s} className="flex-1 flex items-center">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    s <= step
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {s}
                </motion.div>
                {i < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      s < step
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                        : 'bg-gray-200'
                    }`}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Step Labels */}
          <div className="grid grid-cols-4 gap-4 mb-12 text-center text-sm font-semibold">
            <div>Address</div>
            <div>Payment</div>
            <div>Review</div>
            <div>Complete</div>
          </div>
        </section>

        {/* Checkout Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Delivery Address</h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Street Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="NY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">ZIP Code</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>

              <motion.button
                onClick={() => setStep(2)}
                className="mt-8 w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue to Payment
              </motion.button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              <div className="space-y-4 mb-8">
                {['Credit Card', 'Debit Card', 'UPI', 'Net Banking'].map((method) => (
                  <label key={method} className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-400 transition">
                    <input type="radio" name="payment" className="w-5 h-5" defaultChecked={method === 'Credit Card'} />
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">{method}</span>
                  </label>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <motion.button
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:border-gray-400 transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back
                </motion.button>
                <motion.button
                  onClick={() => setStep(3)}
                  className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Review Order
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Order Review</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold mb-4">Order Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-600 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>$0.00</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-green-600">$0.00</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:border-gray-400 transition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    onClick={() => setStep(4)}
                    className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Lock className="w-5 h-5" />
                    Place Order
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <motion.div
                className="inline-block mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-4xl">
                  ✓
                </div>
              </motion.div>
              <h2 className="text-3xl font-bold mb-2">Order Placed Successfully!</h2>
              <p className="text-gray-600 mb-8">
                Your order has been confirmed. You'll receive a confirmation email shortly.
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Shopping
              </motion.button>
            </motion.div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
