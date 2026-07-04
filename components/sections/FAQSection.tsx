'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = [
    {
      id: 0,
      question: 'How quickly can I receive my order?',
      answer:
        'We offer same-day delivery in metro areas and next-day delivery for most locations. Express shipping is available for urgent needs.',
    },
    {
      id: 1,
      question: 'Are all products on Medicare genuine?',
      answer:
        'Yes! We source all products directly from manufacturers and authorized distributors. Every product comes with authenticity verification.',
    },
    {
      id: 2,
      question: 'Do I need a prescription for medicines?',
      answer:
        'For over-the-counter medicines, no prescription is needed. For prescription medications, you can upload your prescription during checkout.',
    },
    {
      id: 3,
      question: 'What is your return policy?',
      answer:
        'We offer hassle-free returns within 30 days of purchase. Items must be unused and in original packaging. Full refund will be processed within 5-7 business days.',
    },
    {
      id: 4,
      question: 'Is my personal data secure?',
      answer:
        'We use bank-level encryption to protect all your personal and payment information. Your data is never shared with third parties.',
    },
    {
      id: 5,
      question: 'Do you offer bulk discounts?',
      answer:
        'Yes! For bulk orders (10+ units), we offer special discounts. Contact our bulk sales team at bulk@medicare.com for a quote.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-clash font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our service
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left"
              >
                <motion.div
                  className="w-full px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-green-50 hover:to-emerald-50 transition-all"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-green-600 flex-shrink-0" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gradient-to-b from-green-50/50 to-emerald-50/50 border-t-2 border-green-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help! Contact us 24/7.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Help
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
