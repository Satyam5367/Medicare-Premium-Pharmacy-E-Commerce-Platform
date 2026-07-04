'use client';

import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, ChevronRight } from 'lucide-react';

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  const product = {
    name: 'Premium Vitamin C Serum',
    category: 'Skin Care',
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviews: 324,
    image: '/assets/images/product-1.webp',
    description:
      'Our advanced Vitamin C Serum is formulated to boost skin brightening and provide antioxidant protection. Suitable for all skin types.',
    ingredients: ['Vitamin C (15%)', 'Hyaluronic Acid', 'Ferulic Acid', 'Vitamin E'],
    usage: 'Apply 2-3 drops to clean face. Use morning and night.',
    inStock: true,
  };

  const relatedProducts = [
    { id: 1, name: 'Moisturizer SPF 30', price: '$34.99', image: '/assets/images/product-4.webp' },
    { id: 2, name: 'Retinol Night Cream', price: '$39.99', image: '/assets/images/product-3.webp' },
    { id: 3, name: 'Cleanser Gel', price: '$19.99', image: '/assets/images/product-5.webp' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-green-600">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/products" className="hover:text-green-600">Products</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>

        {/* Product Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 flex items-center justify-center h-96 md:h-auto"
            >
              <img src={product.image} alt={product.name} className="max-w-full object-contain" />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm font-semibold text-green-600 uppercase mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-700">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <span className="text-3xl font-bold text-green-600">${product.price}</span>
                <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 font-semibold rounded-full text-sm">
                  -40% OFF
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-6 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <motion.button
                  onClick={() => setWishlist(!wishlist)}
                  className={`p-3 rounded-full transition ${
                    wishlist ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-6 h-6" fill="currentColor" />
                </motion.button>
              </div>

              <motion.button
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition mb-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </motion.button>

              {/* Features */}
              <div className="space-y-3">
                {[
                  { icon: Truck, text: 'Free delivery on orders over $50' },
                  { icon: Shield, text: '100% Authentic & Original' },
                  { icon: RotateCcw, text: '30-day hassle-free returns' },
                ].map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <Icon className="w-5 h-5 text-green-600" />
                      <span>{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <div className="space-y-3">
                {product.ingredients.map((ingredient, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-600" />
                    <span>{ingredient}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">Usage Instructions</h2>
              <p className="text-gray-700 mb-4">{product.usage}</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                ⚠️ For external use only. Avoid contact with eyes.
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  className="bg-gray-100 rounded-xl p-4 hover:shadow-lg transition"
                  whileHover={{ y: -8 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-green-600 font-bold">{product.price}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
