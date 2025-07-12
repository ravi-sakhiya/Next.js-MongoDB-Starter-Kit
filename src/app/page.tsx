'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  Database,
  Shield,
  CreditCard,
  Zap,
  Code,
  TestTube,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Advanced{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Next.js
              </span>{' '}
              +{' '}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                MongoDB
              </span>{' '}
              Starter
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Production-ready starter kit with authentication, payments,
              testing, and everything you need to build modern web applications.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => (window.location.href = '/auth/login')}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = '/docs')}
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to build amazing apps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive features for modern web development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Database className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                MongoDB Integration
              </h3>
              <p className="text-gray-600">
                Full MongoDB integration with Mongoose ODM, optimized queries,
                and data validation.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">JWT Authentication</h3>
              <p className="text-gray-600">
                Secure authentication with JWT tokens, refresh tokens, and
                protected routes.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Stripe Payments</h3>
              <p className="text-gray-600">
                Complete Stripe integration with checkout sessions and webhook
                handling.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Performance Optimized
              </h3>
              <p className="text-gray-600">
                Next.js 14 with App Router, image optimization, and bundle
                analysis.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">TypeScript Ready</h3>
              <p className="text-gray-600">
                Full TypeScript support with strict type checking and
                IntelliSense.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <TestTube className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Testing Suite</h3>
              <p className="text-gray-600">
                Jest + React Testing Library with comprehensive test coverage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to build something amazing?
          </h2>
          <p className="mb-8 text-xl text-primary-100">
            Start your next project with our production-ready starter kit.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = '/auth/register')}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = '/docs')}
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Next.js MongoDB Starter
              </h3>
              <p className="text-gray-400">
                Advanced starter kit for building modern web applications with
                Next.js and MongoDB.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Authentication</li>
                <li>Payments</li>
                <li>Testing</li>
                <li>SEO Optimized</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/docs" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="/examples" className="hover:text-white">
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/github" className="hover:text-white">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="/issues" className="hover:text-white">
                    Issues
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Next.js MongoDB Starter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
