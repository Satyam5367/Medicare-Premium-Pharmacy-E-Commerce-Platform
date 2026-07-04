'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import Link from 'next/link';

const TrendingProducts = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  // Replace image from assets/images folder
  const products = [
    {
      id: 1,
      name: 'Vitamin C Serum',
      category: 'Skin Care',
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.8,
      reviews: 324,
      image: '/assets/images/product-1.webp',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 2,
      name: 'Diabetes Monitor Pro',
      category: 'Diabetes Care',
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.9,
      reviews: 156,
      image: '/assets/images/product-2.webp',
      badge: 'Hot Deal',
      inStock: true,
    },
    {
      id: 3,
      name: 'Hair Growth Oil',
      category: 'Hair Care',
      price: 24.99,
      originalPrice: 39.99,
      rating: 4.7,
      reviews: 289,
      image: '/assets/images/product-3.webp',
      badge: null,
      inStock: true,
    },
    {
      id: 4,
      name: 'Premium Moisturizer',
      category: 'Skin Care',
      price: 34.99,
      originalPrice: 54.99,
      rating: 4.6,
      reviews: 412,
      image: '/assets/images/product-4.webp',
      badge: '30% OFF',
      inStock: true,
    },
    {
      id: 5,
      name: 'Eye Care Drops',
      category: 'Eye Care',
      price: 14.99,
      originalPrice: 24.99,
      rating: 4.8,
      reviews: 198,
      image: '/assets/images/product-5.webp',
      badge: null,
      inStock: true,
    },
    {
      id: 6,
      name: 'Multivitamin Complex',
      category: 'Vitamins',
      price: 19.99,
      originalPrice: 32.99,
      rating: 4.9,
      reviews: 567,
      image: '/assets/images/product-6.webp',
      badge: 'Top Rated',
      inStock: true,
    },
    {
      id: 7,
      name: 'Heart Health Supplement',
      category: 'Heart Care',
      price: 44.99,
      originalPrice: 69.99,
      rating: 4.7,
      reviews: 234,
      image: '/assets/images/product-7.webp',
      badge: null,
      inStock: true,
    },
    {
      id: 8,
      name: 'Baby Skin Care Kit',
      category: 'Baby Care',
      price: 39.99,
      originalPrice: 64.99,
      rating: 4.9,
      reviews: 445,
      image: '/assets/images/product-8.webp',
      badge: 'Bundle Deal',
      inStock: true,
    },
  ];

  const toggleWishlist = (id: number) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(id)) {
      newWishlist.delete(id);
    } else {
      newWishlist.add(id);
    }
    setWishlist(newWishlist);
  };

  const discountPercentage = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-clash font-bold">
                Trending Now
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Discover the most popular healthcare products loved by thousands
              </p>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition"
            >
              View All →
            </Link>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <Link href={`/products/${product.id}`}>
                <motion.div
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col"
                  whileHover={{ y: -8 }}
                >
                  {/* Image Container */}
                  <div className="relative bg-gray-100 aspect-square overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      animate={{ scale: hoveredId === product.id ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Badge */}
                    {product.badge && (
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {product.badge}
                      </motion.div>
                    )}

                    {/* Discount Badge */}
                    {product.originalPrice > product.price && (
                      <motion.div
                        className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-bold rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        -{discountPercentage(product.originalPrice, product.price)}%
                      </motion.div>
                    )}

                    {/* Quick Actions */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition"
                      animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                    >
                      <motion.button
                        className="p-3 bg-white rounded-full shadow-lg hover:bg-green-500 hover:text-white transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(product.id);
                        }}
                        className={`p-3 rounded-full shadow-lg transition ${
                          wishlist.has(product.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white hover:bg-red-500 hover:text-white'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart className="w-5 h-5" fill="currentColor" />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col gap-3 flex-1">
                    <p className="text-xs text-gray-500 font-medium uppercase">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-green-600 transition">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-lg font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <motion.button
                      onClick={(e) => {
                        e.preventDefault();
                        // Cart functionality will be implemented
                      }}
                      className="w-full mt-3 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button - Mobile */}
        <motion.div
          className="md:hidden flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/products"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingProducts;
