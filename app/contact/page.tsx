'use client';

import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call us anytime',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'support@medicare.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Health Street',
      description: 'New York, NY 10001',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: '24/7 Available',
      description: 'Always here to help',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-clash font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-600">
                Have questions? We'd love to hear from you. Get in touch with our team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    className="inline-block p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-gray-900 font-semibold">{method.value}</p>
                  <p className="text-gray-600 text-sm mt-1">{method.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
