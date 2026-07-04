'use client';

import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle2, Users, Globe, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircle2,
      title: 'Quality Assured',
      description: 'Every product is authentic and verified',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: '24/7 support for all your healthcare needs',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers across multiple countries',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized leader in healthcare retail',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-clash font-bold mb-6">
                About Medicare
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your trusted partner in premium healthcare ecommerce with innovation,
                quality, and customer care at the heart of everything we do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
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
                    className="inline-block p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
