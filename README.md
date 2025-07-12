# 🚀 Advanced Next.js + MongoDB Starter Kit

[![Free for Everyone](https://img.shields.io/badge/free%20for-everyone-brightgreen)](https://github.com/ravi-sakhiya)

**Created by [Ravi Sakhiya](https://ravisakhiya-portfolio.vercel.app/) · [GitHub](https://github.com/ravi-sakhiya)**

A production-ready Next.js 14 starter kit with MongoDB, authentication, payments, testing, and everything you need to build modern web applications. **This setup is free for anyone to use and customize!**

---

## ✨ Features

### 🎯 Core Features

- **Next.js 14** with App Router
- **MongoDB** with Mongoose ODM
- **TypeScript** with strict type checking
- **Tailwind CSS** with custom design system
- **JWT Authentication** with refresh tokens
- **Stripe Integration** for payments
- **SWR** for data fetching and caching

### 🔐 Authentication & Security

- JWT-based authentication with access & refresh tokens
- Secure password hashing with bcrypt
- Protected routes with middleware
- Role-based access control (User/Admin)
- Automatic token refresh

### 💳 Payments

- Stripe checkout session creation
- Webhook handling for payment events
- Customer portal integration
- Subscription management

### 🧪 Testing

- Jest + React Testing Library setup
- Unit and integration test examples
- Mock configurations for external services
- Test coverage reporting

### 🎨 UI/UX

- Modern, responsive design
- Reusable UI components
- Form validation with React Hook Form + Zod
- Toast notifications
- Loading states and error handling

### 📱 Performance & SEO

- Next.js Image optimization
- Dynamic meta tags and Open Graph
- JSON-LD structured data
- Bundle analysis
- Code splitting and lazy loading

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- MongoDB database
- Stripe account (for payments)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd nextjs-mongodb-starter
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/your-database

   # JWT
   JWT_SECRET=your-super-secret-jwt-key
   JWT_REFRESH_SECRET=your-super-secret-refresh-key

   # Stripe
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```text
src/
├── app/                # Next.js App Router
│   ├── api/            # API routes (auth, posts, products, stripe)
│   ├── auth/           # Auth pages (login, register)
│   ├── dashboard/      # Protected dashboard
│   ├── docs/           # Documentation page
│   └── globals.css     # Global styles
├── components/         # Reusable UI & providers
│   ├── ui/             # UI components (Button, Card, Modal)
│   └── providers/      # Context providers (Auth, SWR)
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries (db, auth)
├── models/             # MongoDB models
├── types/              # TypeScript types
└── utils/              # Helper utilities
```

## 🔑 Environment Variables

Copy `.env.example` to `.env.local` and fill in your values. All required and optional variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/nextjs-starter
MONGODB_URI_PROD=mongodb+srv://username:password@cluster.mongodb.net/database

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_REFRESH_SECRET=your-super-secret-refresh-key-here
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run format           # Format code with Prettier
npm run type-check       # TypeScript type checking

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate coverage report

# Analysis
npm run analyze          # Bundle analysis
```

## 🗄️ Database Models

### User Model

- Email, password, name
- Role-based access (user/admin)
- Refresh token management
- Avatar and profile data

### Post Model

- Title, content, excerpt
- Author reference
- Tags and categories
- SEO-friendly slugs
- View tracking and likes

### Product Model

- Name, description, price
- Images and categories
- Stock management
- SKU and dimensions
- Rating and reviews

## 🔐 Authentication Flow

1. **Registration**: User creates account → JWT tokens generated
2. **Login**: User authenticates → Access + refresh tokens
3. **Protected Routes**: Middleware validates access token
4. **Token Refresh**: Automatic refresh when access token expires
5. **Logout**: Refresh token invalidated

## 💳 Payment Integration

### Stripe Setup

1. Create Stripe account and get API keys
2. Configure webhook endpoints
3. Set up products and prices in Stripe dashboard
4. Test with Stripe test cards

### Payment Flow

1. User selects product/service
2. Create checkout session via API
3. Redirect to Stripe checkout
4. Handle success/cancel webhooks
5. Update user subscription status

## 🧪 Testing

### Running Tests

```bash
# All tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Test Structure

- **Unit Tests**: Individual components and functions
- **Integration Tests**: API endpoints and database operations
- **E2E Tests**: Complete user workflows

## 📱 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Token refresh
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Posts

- `GET /api/posts` - List posts (with pagination)
- `POST /api/posts` - Create new post
- `GET /api/posts/[id]` - Get single post
- `PUT /api/posts/[id]` - Update post
- `DELETE /api/posts/[id]` - Delete post

### Products

- `GET /api/products` - List products
- `POST /api/products` - Create product
- `GET /api/products/[id]` - Get product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Payments

- `POST /api/stripe/create-checkout-session` - Create payment session
- `POST /api/stripe/webhook` - Handle payment events

## 🎨 Customization

### Styling

- Modify `tailwind.config.js` for theme customization
- Update `src/app/globals.css` for global styles
- Create new UI components in `src/components/ui/`

### Database

- Add new models in `src/models/`
- Update schemas and validation
- Create database migrations if needed

### Authentication

- Modify JWT configuration in `src/lib/auth.ts`
- Update user roles and permissions
- Customize authentication flow

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Other Platforms

- **Netlify**: Configure build settings
- **Railway**: Set up MongoDB and environment
- **DigitalOcean**: Use App Platform

### Environment Variables

Ensure all required environment variables are set in production:

- Database connection string
- JWT secrets
- Stripe keys
- App URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the `/docs` folder
- **Issues**: Create a GitHub issue
- **Discussions**: Use GitHub Discussions

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Stripe for payment processing
- MongoDB for the database
- All contributors and maintainers

---

## 👨‍💻 About the Author

**Ravi Sakhiya**  
Frontend Developer | UI/UX Enthusiast | Open Source Advocate

- 🌐 [Portfolio](https://ravisakhiya-portfolio.vercel.app/)
- 💻 [GitHub](https://github.com/ravi-sakhiya)
- ✉️ mr.sakhiya.01@gmail.com

> _This advanced Next.js + MongoDB starter kit is created and maintained by Ravi Sakhiya. It is free for anyone to use, modify, and share. If you find it useful, consider starring the repo or connecting with me!_

---

**Created by [Ravi Sakhiya](https://ravisakhiya-portfolio.vercel.app/) · [GitHub](https://github.com/ravi-sakhiya) — Free for everyone!**

## 🛠️ Tooling & Developer Experience

### 🧹 Prettier (Code Formatting)
- **Auto-formats code** for consistency.
- Config: `.prettierrc`
- Run: `npm run format`
- Key settings: semi: true, singleQuote: true, trailingComma: es5, printWidth: 80, tabWidth: 2, endOfLine: lf

### 🖌️ PostCSS & Tailwind CSS
- **PostCSS** processes CSS with plugins.
- **Tailwind CSS** for utility-first styling.
- **Autoprefixer** adds vendor prefixes.
- Config: `postcss.config.js`, `tailwind.config.js`

### 🧪 Jest (Testing)
- **Jest** for unit/integration tests.
- **React Testing Library** for UI tests.
- Config: `jest.config.js`, `jest.setup.js`
- Run: `npm run test`, `npm run test:watch`, `npm run test:coverage`

### 🧑‍💻 ESLint (Linting)
- **ESLint** for code quality and error prevention.
- Integrates with Prettier for formatting rules.
- Config: `.eslintrc.json`
- Run: `npm run lint`, `npm run lint:fix`

### 📜 Scripts Overview

| Script              | Description                       |
|---------------------|-----------------------------------|
| npm run dev         | Start development server          |
| npm run build       | Build for production              |
| npm run start       | Start production server           |
| npm run lint        | Run ESLint                        |
| npm run lint:fix    | Auto-fix ESLint errors            |
| npm run format      | Format code with Prettier         |
| npm run test        | Run all tests                     |
| npm run test:watch  | Run tests in watch mode           |
| npm run test:coverage| Generate test coverage report    |
| npm run analyze     | Bundle analysis                   |
| npm run type-check  | TypeScript type checking          |
