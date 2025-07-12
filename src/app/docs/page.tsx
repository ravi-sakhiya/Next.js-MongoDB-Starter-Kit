'use client';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const envVars = `# Database
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
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX`;

const projectTree = [
  {
    name: 'src',
    children: [
      {
        name: 'app',
        children: [
          { name: 'api', children: [] },
          { name: 'auth', children: [] },
          { name: 'dashboard', children: [] },
          { name: 'docs', children: [] },
          { name: 'globals.css' },
        ],
      },
      {
        name: 'components',
        children: [
          { name: 'ui', children: [] },
          { name: 'providers', children: [] },
        ],
      },
      { name: 'hooks', children: [] },
      { name: 'lib', children: [] },
      { name: 'models', children: [] },
      { name: 'types', children: [] },
      { name: 'utils', children: [] },
    ],
  },
];

function FileTree({ tree, level = 0 }) {
  return (
    <ul style={{ paddingLeft: level * 16 }}>
      {tree.map((node, idx) => (
        <li key={node.name + idx} style={{ fontFamily: 'monospace', fontSize: 14 }}>
          {node.children ? (
            <>
              <span>📁 {node.name}</span>
              {node.children.length > 0 && <FileTree tree={node.children} level={level + 1} />}
            </>
          ) : (
            <span>📄 {node.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow">
        <div className="flex flex-col items-center mb-6">
          <a href="https://github.com/ravi-sakhiya" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/free%20for-everyone-brightgreen" alt="Free for Everyone" className="mb-2" />
          </a>
          <p className="text-sm text-gray-500">Created by <a href="https://ravisakhiya-portfolio.vercel.app/" className="text-primary-600 underline" target="_blank" rel="noopener noreferrer">Ravi Sakhiya</a> · <a href="https://github.com/ravi-sakhiya" className="text-primary-600 underline" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary-700">Next.js + MongoDB Starter Kit Documentation</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome! This guide will help you get started, customize, and deploy your advanced Next.js + MongoDB starter kit. <span className="font-semibold text-primary-700">This setup is free for anyone to use and customize!</span>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🚀 Quick Start</h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <b>Install dependencies:</b>
            <pre className="bg-gray-100 rounded p-2 mt-1">npm install</pre>
          </li>
          <li>
            <b>Create <code>.env.local</code>:</b>
            <pre className="bg-gray-100 rounded p-2 mt-1 whitespace-pre-wrap"># Database
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
</pre>
          </li>
          <li>
            <b>Start MongoDB:</b> (if local)
            <pre className="bg-gray-100 rounded p-2 mt-1">mongod</pre>
          </li>
          <li>
            <b>Run the app:</b>
            <pre className="bg-gray-100 rounded p-2 mt-1">npm run dev</pre>
          </li>
          <li>
            <b>Open:</b> <a href="http://localhost:3000" className="text-primary-600 underline">http://localhost:3000</a>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-2">📁 Project Structure</h2>
        <div className="bg-gray-100 rounded p-4 mb-6">
          <FileTree tree={projectTree} />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🔑 Environment Variables</h2>
        <div className="bg-gray-100 rounded p-4 mb-6">
          <SyntaxHighlighter language="bash" style={oneDark} customStyle={{ background: 'transparent', fontSize: 14 }}>
            {envVars}
          </SyntaxHighlighter>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🔐 Authentication</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>JWT-based auth with access & refresh tokens</li>
          <li>Login, register, and protected dashboard</li>
          <li>Tokens stored in localStorage</li>
          <li>Automatic token refresh on expiry</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">💳 Stripe Payments</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Stripe checkout session API</li>
          <li>Webhook endpoint for payment events</li>
          <li>Test with Stripe test cards</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🧪 Testing</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Jest + React Testing Library</li>
          <li>Unit and integration test examples</li>
          <li>Mocks for MongoDB & Stripe</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🎨 Customization</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Edit <code>tailwind.config.js</code> for theme/colors</li>
          <li>Add new UI components in <code>src/components/ui/</code></li>
          <li>Extend models in <code>src/models/</code></li>
          <li>Update API logic in <code>src/app/api/</code></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🚀 Deployment</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Deploy to Vercel, Netlify, Railway, or DigitalOcean</li>
          <li>Set all environment variables in your deployment dashboard</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">📝 Useful Commands</h2>
        <pre className="bg-gray-100 rounded p-4 text-sm mb-6 whitespace-pre-wrap">npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Lint code
npm run test         # Run tests
npm run type-check   # TypeScript check
</pre>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🐛 Troubleshooting</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><b>JWT_SECRET error:</b> Check your <code>.env.local</code> file and restart the server.</li>
          <li><b>MongoDB connection error:</b> Ensure MongoDB is running and <code>MONGODB_URI</code> is correct.</li>
          <li><b>Port in use:</b> <code>npm run dev -- -p 3001</code></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🛠️ Tooling & Developer Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mt-4 mb-1">🧹 Prettier (Code Formatting)</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-2">
            <li>Auto-formats code for consistency</li>
            <li>Config: <code>.prettierrc</code></li>
            <li>Run: <code>npm run format</code></li>
            <li>Key settings: semi: true, singleQuote: true, trailingComma: es5, printWidth: 80, tabWidth: 2, endOfLine: lf</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-1">🖌️ PostCSS & Tailwind CSS</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-2">
            <li>PostCSS processes CSS with plugins</li>
            <li>Tailwind CSS for utility-first styling</li>
            <li>Autoprefixer adds vendor prefixes</li>
            <li>Config: <code>postcss.config.js</code>, <code>tailwind.config.js</code></li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-1">🧪 Jest (Testing)</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-2">
            <li>Jest for unit/integration tests</li>
            <li>React Testing Library for UI tests</li>
            <li>Config: <code>jest.config.js</code>, <code>jest.setup.js</code></li>
            <li>Run: <code>npm run test</code>, <code>npm run test:watch</code>, <code>npm run test:coverage</code></li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-1">🧑‍💻 ESLint (Linting)</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-2">
            <li>ESLint for code quality and error prevention</li>
            <li>Integrates with Prettier for formatting rules</li>
            <li>Config: <code>.eslintrc.json</code></li>
            <li>Run: <code>npm run lint</code>, <code>npm run lint:fix</code></li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-1">📜 Scripts Overview</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-2 py-1 border">Script</th>
                  <th className="px-2 py-1 border">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-2 py-1 border">npm run dev</td><td className="px-2 py-1 border">Start development server</td></tr>
                <tr><td className="px-2 py-1 border">npm run build</td><td className="px-2 py-1 border">Build for production</td></tr>
                <tr><td className="px-2 py-1 border">npm run start</td><td className="px-2 py-1 border">Start production server</td></tr>
                <tr><td className="px-2 py-1 border">npm run lint</td><td className="px-2 py-1 border">Run ESLint</td></tr>
                <tr><td className="px-2 py-1 border">npm run lint:fix</td><td className="px-2 py-1 border">Auto-fix ESLint errors</td></tr>
                <tr><td className="px-2 py-1 border">npm run format</td><td className="px-2 py-1 border">Format code with Prettier</td></tr>
                <tr><td className="px-2 py-1 border">npm run test</td><td className="px-2 py-1 border">Run all tests</td></tr>
                <tr><td className="px-2 py-1 border">npm run test:watch</td><td className="px-2 py-1 border">Run tests in watch mode</td></tr>
                <tr><td className="px-2 py-1 border">npm run test:coverage</td><td className="px-2 py-1 border">Generate test coverage report</td></tr>
                <tr><td className="px-2 py-1 border">npm run analyze</td><td className="px-2 py-1 border">Bundle analysis</td></tr>
                <tr><td className="px-2 py-1 border">npm run type-check</td><td className="px-2 py-1 border">TypeScript type checking</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-2">📚 More Resources</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>See <code>README.md</code> for a full feature list</li>
          <li>Explore <code>src/app/api/</code> for API endpoints</li>
          <li>Check <code>src/components/</code> for UI and providers</li>
        </ul>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Made with ❤️ using Next.js, MongoDB, and modern web tech.</p>
          <div className="mt-4">
            <p className="font-semibold">About the Author</p>
            <p>Ravi Sakhiya &mdash; <a href="https://ravisakhiya-portfolio.vercel.app/" className="text-primary-600 underline" target="_blank" rel="noopener noreferrer">Portfolio</a> · <a href="https://github.com/ravi-sakhiya" className="text-primary-600 underline" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p className="text-xs mt-1">Frontend Developer | UI/UX Enthusiast | Open Source Advocate</p>
            <p className="text-xs">Contact: mr.sakhiya.01@gmail.com</p>
            <p className="text-xs mt-2 italic">This advanced Next.js + MongoDB starter kit is created and maintained by Ravi Sakhiya. It is free for anyone to use, modify, and share. If you find it useful, consider starring the repo or connecting with me!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
