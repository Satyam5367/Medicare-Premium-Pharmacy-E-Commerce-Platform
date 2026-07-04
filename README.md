# Medicare - Premium Pharmacy eCommerce Platform

A stunning, next-level premium futuristic pharmacy ecommerce website built with modern technology stack, featuring smooth animations, interactive components, and complete ecommerce functionality.

## Features

### Core eCommerce Functionality
- **Product Catalog** - Browse and filter thousands of pharmacy products
- **Shopping Cart** - Add/remove items, update quantities
- **Wishlist** - Save favorite products for later
- **Product Details** - Comprehensive product information with images, ingredients, usage
- **Checkout Process** - Multi-step checkout with delivery address and payment
- **Order Tracking** - Track order status in real-time
- **User Profiles** - Manage account, view order history, preferences

### Premium Design & UX
- **Smooth Animations** - Framer Motion powered micro-interactions
- **Responsive Design** - Perfect on mobile, tablet, and desktop
- **Modern UI Components** - Built with shadcn/ui and Tailwind CSS
- **Glassmorphism Effects** - Premium glass-effect cards and sections
- **Gradient Backgrounds** - Sophisticated gradient color system
- **Interactive Elements** - Hover states, floating cards, animated counters

### Sections
1. **Hero Section** - Eye-catching landing with floating animations
2. **Categories** - Horizontally scrollable premium category cards
3. **Trending Products** - Modern product grid with ratings and quick actions
4. **Featured Brands** - Brand showcase with hover effects
5. **Promotional Banners** - Large marketing banners with animations
6. **Customer Reviews** - Testimonial carousel with smooth transitions
7. **FAQ Section** - Expandable accordion with smooth animations
8. **App Showcase** - Mobile app promotion section

### Pages
- Home
- Products (with filtering)
- Product Details
- Shopping Cart
- Wishlist
- Checkout (multi-step)
- User Profile
- About
- Contact
- Categories

## Tech Stack

- **Frontend Framework**: Next.js 13.5.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 11.x
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Database**: Supabase PostgreSQL
- **Forms**: React Hook Form
- **Validation**: Zod
- **Fonts**: Poppins, Inter

## Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (for database)

### Setup Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## Project Structure

```
project/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── products/
│   │   ├── page.tsx            # Products listing
│   │   └── [id]/page.tsx       # Product details
│   ├── cart/page.tsx           # Shopping cart
│   ├── checkout/page.tsx       # Checkout flow
│   ├── wishlist/page.tsx       # Wishlist page
│   ├── profile/page.tsx        # User profile
│   ├── about/page.tsx          # About page
│   └── contact/page.tsx        # Contact page
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Top navigation bar
│   │   └── Footer.tsx          # Footer component
│   ├── sections/               # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── TrendingProducts.tsx
│   │   ├── FeaturedBrands.tsx
│   │   ├── PromoBanner.tsx
│   │   ├── CustomerReviews.tsx
│   │   ├── FAQSection.tsx
│   │   └── AppShowcase.tsx
│   ├── ui/                     # shadcn/ui components
│   └── providers/
│       └── RootProvider.tsx    # Root context provider
├── lib/
│   ├── supabase.ts            # Supabase client
│   └── utils.ts               # Utility functions
├── hooks/                      # Custom React hooks
├── public/
│   └── assets/
│       └── images/            # Product and brand images
└── tailwind.config.ts         # Tailwind configuration
```

## Database Schema

### Tables
- **products** - All pharmacy products with metadata
- **categories** - Product categories
- **brands** - Pharmacy brands
- **cart_items** - Shopping cart items per user
- **wishlist_items** - User wishlist items
- **orders** - Customer orders
- **order_items** - Items in orders
- **product_reviews** - Customer reviews with ratings

All tables have Row Level Security (RLS) enabled with appropriate policies.

## Key Features Implementation

### Animations
- Framer Motion used for all animations
- Smooth page transitions
- Hover effects on interactive elements
- Floating card animations
- Animated counters and progress bars
- Scroll-triggered animations

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Touch-friendly interface
- Optimized navigation for all screen sizes

### Color Palette
- Primary: Green (from-green-500 to-emerald-600)
- Secondary: Cyan/Blue accents
- Neutral: Gray tones for backgrounds
- Accent: Yellow, pink, orange for highlights
- No purple/indigo colors

### Typography
- Font Family: Poppins (headings), Inter (body)
- 3 weight system: 400 (regular), 600 (semibold), 700-800 (bold)
- Proper line spacing: 150% body, 120% headings

## Image Management

All images are referenced from the `public/assets/images/` folder:
- Product images: `/assets/images/product-1.png` ... `product-8.png`
- Brand logos: `/assets/images/brand-1.png` ... `brand-6.png`
- Avatar images: `/assets/images/avatar-1.png` ... `avatar-4.png`

Replace these images in the assets folder to customize the site.

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme. Primary colors are defined using gradients.

### Typography
Modify fonts in `app/layout.tsx` to use different Google Fonts.

### Content
Update product data, categories, and content in component files. Connect to database for dynamic content.

### Animations
Adjust animation timing and effects in Framer Motion configurations within each component.

## Performance Optimization

- Static generation for most pages
- Image optimization with Next.js Image component
- CSS minification via Tailwind
- Code splitting with Next.js
- Lazy loading for sections with IntersectionObserver

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## API Integration Points

Ready for integration with:
- Supabase Authentication
- Payment gateways (Stripe, Razorpay)
- SMS notifications
- Email services
- Analytics platforms

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Future Enhancements

- Real-time product sync with database
- Advanced search and filters
- Product recommendations
- Social features (reviews, ratings)
- Subscription/recurring orders
- Multiple payment methods
- Push notifications
- Analytics dashboard

## Support & Documentation

For detailed implementation guides and API references, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## License

Proprietary - All rights reserved

## Author

Created as a premium healthcare ecommerce solution for modern pharmacy platforms.

---

**Note**: This is a template. Replace placeholder images, update product data, and configure your Supabase database credentials before deploying to production.
