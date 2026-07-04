'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Apple, Play } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'FAQ', 'Shipping Info'],
    },
    {
      title: 'Legal',
      links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Return Policy'],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Newsletter Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-clash font-bold mb-2">Stay Healthy</h3>
            <p className="text-gray-600">Subscribe to get wellness tips and exclusive offers</p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600" />
              <span className="font-clash text-lg font-bold">Medicare</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Premium pharmacy ecommerce experience with futuristic design.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.button
                  key={i}
                  className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-green-500 hover:text-white transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact & App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Download App</h4>
            <div className="space-y-2 mb-6">
              <button className="w-full flex items-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition">
                <Apple className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Get on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="w-full flex items-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition">
                <Play className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Get on</div>
                  <div className="text-sm font-semibold">Play Store</div>
                </div>
              </button>
            </div>

            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">support@medicare.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">123 Health St, NY 10001</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {currentYear} Medicare. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-600 transition">
              Terms
            </a>
            <a href="#" className="hover:text-green-600 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-green-600 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
