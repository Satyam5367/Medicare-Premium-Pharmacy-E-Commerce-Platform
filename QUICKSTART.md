# Quick Start Guide

## 5 Minute Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Explore the Site
- Home page with all premium sections
- Click through products
- Try the multi-step checkout
- Explore all pages

## Configuration (Optional)

### To Enable Database Features

1. **Get Supabase Credentials**
   - Create account at [supabase.com](https://supabase.com)
   - Create a new project
   - Get your credentials

2. **Add Environment Variables**
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   ```

3. **Run Database Migrations**
   - Already created! Check `mcp__supabase__apply_migration` output
   - Tables are ready to use

## File Structure Overview

```
project/
├── app/                    # All pages & routing
├── components/
│   ├── layout/            # Navigation & Footer
│   ├── sections/          # Homepage sections
│   └── ui/                # UI components
├── lib/                   # Utilities & configs
├── public/assets/images/  # Images folder
└── tailwind.config.ts     # Styling config
```

## Common Tasks

### Change Brand Color
Edit `tailwind.config.ts`:
```typescript
from-green-500 to-emerald-600  // Change these gradients
```

### Add Your Product Images
1. Create folder: `public/assets/images/`
2. Add images: `product-1.png`, etc.
3. Images auto-load in components

### Customize Hero Section
Edit `components/sections/HeroSection.tsx`:
```typescript
// Change heading text
"Your Health, Delivered Fast"

// Change CTA buttons
"Shop Now", "Upload Prescription"
```

### Add New Product Category
Edit `components/sections/CategoriesSection.tsx`:
```typescript
const categories = [
  { id: 1, name: 'Your Category', ... }
]
```

## Available Pages (Demo)

- `http://localhost:3000/` - Home
- `http://localhost:3000/products` - Products
- `http://localhost:3000/products/1` - Product Details
- `http://localhost:3000/cart` - Shopping Cart
- `http://localhost:3000/wishlist` - Wishlist
- `http://localhost:3000/checkout` - Checkout
- `http://localhost:3000/profile` - Profile
- `http://localhost:3000/about` - About
- `http://localhost:3000/contact` - Contact

## Build for Production

```bash
# Build
npm run build

# Test production build
npm run start
```

Then deploy to:
- **Vercel** (easiest): `vercel`
- **Netlify**: `netlify deploy`
- **Any Node.js host**: `npm run start`

## Useful Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Check code quality
npm run typecheck    # Check TypeScript

# Utilities
npm install         # Install dependencies
npm update          # Update packages
```

## Need Help?

### Animations Not Working?
- Check Framer Motion is installed: `npm install framer-motion`
- Refresh page and clear cache

### Images Not Showing?
- Add images to `public/assets/images/`
- Check image path in component matches filename
- Clear browser cache

### Styles Looking Wrong?
- Run: `npm run build` to rebuild Tailwind CSS
- Check Tailwind config is valid
- Restart dev server

### Database Issues?
- Check `.env.local` has correct credentials
- Verify Supabase project is running
- Check migrations were applied

## Next Steps

1. ✅ Run `npm run dev`
2. ✅ Visit http://localhost:3000
3. ✅ Explore the site
4. ✅ Add your product images
5. ✅ Configure Supabase (optional)
6. ✅ Deploy when ready!

## Key Features to Try

- 🎨 Hover over products to see animations
- 📱 Resize browser to see responsive design
- 🔄 Click category arrows to scroll
- ⭐ Check product ratings and reviews
- 💚 Click heart to add to wishlist
- 🛒 Go through checkout flow
- 📝 Expand FAQ items
- 🎠 Auto-play testimonials

## Deployment

### Quick Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

## Support

- 📖 Read `README.md` for full documentation
- 📋 Check `FEATURES.md` for complete feature list
- 🛠️ See `IMPLEMENTATION.md` for technical details

---

**You're all set!** The site is fully functional and ready to customize. Start with `npm run dev` and explore!
