'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const CustomerReviews = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Verified Buyer',
      avatar: '/assets/images/avatar-3.avif',
      text: 'Amazing selection and fast delivery! The products are genuine and the customer service is exceptional. Medicare has become my go-to pharmacy.',
      rating: 5,
      product: 'Vitamin C Serum',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Health Enthusiast',
      avatar: '/assets/images/avatar-3.avif',
      text: 'Outstanding experience! The website is so easy to navigate, and I love the detailed product information. Prices are competitive too.',
      rating: 5,
      product: 'Premium Moisturizer',
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Verified Buyer',
      avatar: '/assets/images/avatar-3.avif',
      text: 'Excellent service and quick delivery. The products arrived in perfect condition with all authenticity certificates. Highly recommended!',
      rating: 4.5,
      product: 'Multivitamin Complex',
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Regular Customer',
      avatar: '/assets/images/avatar-3.avif',
      text: 'Best online pharmacy I have used. Great deals, reliable shipping, and genuine products. The 24/7 support team is very helpful.',
      rating: 5,
      product: 'Eye Care Drops',
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    setAutoPlay(false);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-clash font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Medicare for their healthcare needs
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-lg backdrop-blur-sm border border-white/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(reviews[current].rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{reviews[current].text}"
              </p>

              {/* Product Mention */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6 border border-green-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-green-600">Product:</span> {reviews[current].product}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.img
                  src={reviews[current].avatar}
                  alt={reviews[current].name}
                  className="w-12 h-12 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{reviews[current].name}</h4>
                  <p className="text-sm text-gray-600">{reviews[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-green-50 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    setAutoPlay(false);
                  }}
                  className={`w-2 h-2 rounded-full transition ${
                    i === current ? 'bg-green-600 w-8' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-green-50 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>

          {/* Pause/Play Info */}
          <p className="text-center text-sm text-gray-500 mt-6">
            {autoPlay ? '⏸️ Click to pause auto-play' : '▶️ Hover to resume'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
