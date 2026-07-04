'use client';

import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { User, Package, Heart, LogOut, Settings, CreditCard as Edit2 } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

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
              className="flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-2xl">
                👤
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-clash font-bold">My Profile</h1>
                <p className="text-gray-600 mt-1">Manage your account and preferences</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </motion.button>
                );
              })}
              <motion.button
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition font-medium mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut className="w-5 h-5" />
                Logout
              </motion.button>
            </motion.div>

            {/* Content */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {activeTab === 'profile' && (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">First Name</label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Last Name</label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                    </div>
                    <motion.button
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Edit2 className="w-5 h-5" />
                      Save Changes
                    </motion.button>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center py-12">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-xl text-gray-600">No orders yet</p>
                  <p className="text-gray-500 mt-2">Your orders will appear here</p>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center py-12">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-xl text-gray-600">No wishlist items</p>
                  <p className="text-gray-500 mt-2">Start adding products to your wishlist</p>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                      <div>
                        <h3 className="font-semibold">Email Notifications</h3>
                        <p className="text-sm text-gray-600">Receive updates about orders</p>
                      </div>
                      <input type="checkbox" className="w-6 h-6" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                      <div>
                        <h3 className="font-semibold">SMS Notifications</h3>
                        <p className="text-sm text-gray-600">Get alerts via SMS</p>
                      </div>
                      <input type="checkbox" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
