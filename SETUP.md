# 🚀 Quick Setup Guide

## Prerequisites

- Node.js 18+ installed
- MongoDB running locally or MongoDB Atlas account
- Git

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Create Environment File

Create a `.env.local` file in the root directory with the following content:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/nextjs-starter

# JWT (generate secure keys for production)
JWT_SECRET=your-super-secret-jwt-key-here-change-in-production
JWT_REFRESH_SECRET=your-super-secret-refresh-key-here-change-in-production
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Stripe (use test keys for development)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Step 3: Start MongoDB

If using local MongoDB:

```bash
# Start MongoDB service
mongod
```

Or use MongoDB Atlas (cloud):

1. Create account at https://mongodb.com
2. Create a cluster
3. Get connection string and update MONGODB_URI

## Step 4: Run the Application

```bash
npm run dev
```

## Step 5: Open Browser

Navigate to: http://localhost:3000

## 🎉 You're Ready!

The application should now be running with:

- ✅ Homepage with features showcase
- ✅ Authentication system (login/register)
- ✅ Protected dashboard
- ✅ API endpoints for CRUD operations
- ✅ MongoDB integration
- ✅ JWT authentication

## 🔧 Available Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Code linting
npm run test         # Run tests
npm run type-check   # TypeScript checking
```

## 🐛 Troubleshooting

### JWT_SECRET Error

If you see "JWT_SECRET environment variable is required":

1. Make sure `.env.local` file exists
2. Check that JWT_SECRET is set
3. Restart the development server

### MongoDB Connection Error

If you see MongoDB connection errors:

1. Ensure MongoDB is running
2. Check MONGODB_URI in `.env.local`
3. Verify network connectivity

### Port Already in Use

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

## 📝 Next Steps

1. Explore the codebase structure
2. Customize the design in `tailwind.config.js`
3. Add your own features
4. Deploy to Vercel, Netlify, or your preferred platform

## 🆘 Need Help?

- Check the main README.md for detailed documentation
- Review the API endpoints in `/src/app/api/`
- Examine the component structure in `/src/components/`
