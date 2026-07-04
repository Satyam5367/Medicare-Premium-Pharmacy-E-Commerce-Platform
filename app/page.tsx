'use client';

import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import TrendingProducts from '@/components/sections/TrendingProducts';
import FeaturedBrands from '@/components/sections/FeaturedBrands';
import PromoBanner from '@/components/sections/PromoBanner';
import CustomerReviews from '@/components/sections/CustomerReviews';
import FAQSection from '@/components/sections/FAQSection';
import AppShowcase from '@/components/sections/AppShowcase';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-16 md:pt-20">
        <HeroSection />
        <CategoriesSection />
        <TrendingProducts />
        <FeaturedBrands />
        <PromoBanner />
        <CustomerReviews />
        <FAQSection />
        <AppShowcase />
      </main>

      <Footer />
    </div>
  );
}
