# DILGS - Digital Presence Systems (Dukgs)

A premium digital agency system with editorial design, complete **Stripe** integration for payments, and **Drizzle ORM** for database management.

## 🎨 Features

- **Editorial Design**: Refined typography, clear structure, brutalist-inspired palette (Black/White/Yellow).
- **High-Conversion Landing Page**: Hero, Services, Portfolio, Process, FAQ, and CTA sections.
- **Stripe Integration**: Checkout for deposits, final payments, and monthly growth care subscriptions.
- **Database Architecture**: Drizzle ORM (MySQL) with tables for leads, audit requests, proposals, clients, projects, and payments.
- **Lead Capture System**: Contact form with validation and asynchronous routing.
- **Admin Dashboard**: Protected dashboard to manage leads, projects, and business operations.
- **Webhooks**: Automatic payment status updates and project lifecycle triggers.
- **Testing Suite**: Vitest suite covering authentication, procedures, and logic.

## 🚀 Tech Stack

- **Frontend**: React 19 + Tailwind CSS 4 + TypeScript + Wouter.
- **Backend**: Express 4 + tRPC 11 + Node.js.
- **Database**: MySQL (Compatible with TiDB, PlanetScale, or self-hosted MySQL) via Drizzle ORM.
- **Payments**: Stripe API.
- **Authentication**: Manus OAuth.
- **Testing**: Vitest.

## 📋 Prerequisites

- Node.js 22+
- pnpm 10+
- Stripe Account (for payments)
- MySQL Database (e.g., TiDB Serverless or PlanetScale)

## 🛠️ Local Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Variables

Create a `.env.local` file:

```env
# Database
DATABASE_URL=mysql://user:password@host:3306/database

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
VITE_STRIPE_PUBLIC_KEY=pk_test_...

# OAuth
VITE_APP_ID=your_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://manus.im/login

# Others
JWT_SECRET=your_jwt_secret
OWNER_OPEN_ID=your_open_id
OWNER_NAME=Your Name
VITE_FRONTEND_URL=http://localhost:3000
```

### 3. Database Migrations

```bash
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

### 4. Start Development Server

```bash
pnpm dev
```

The server will be available at `http://localhost:3000`

## 📁 Project Structure

```
├── client/                 # React Frontend
│   ├── src/
│   │   ├── pages/         # Application Pages
│   │   ├── components/    # Reusable UI Components
│   │   ├── App.tsx        # Main Router
│   │   └── index.css      # Global Styles
│   └── public/            # Static Assets
├── server/                # Express + tRPC Backend
│   ├── routers.ts         # tRPC Procedures & Logic
│   ├── db.ts              # Database Query Helpers
│   ├── stripe.ts          # Stripe API Integration
│   └── _core/             # Core Configuration & Setup
├── drizzle/               # Database Schema & Migrations
├── shared/                # Shared Types & Constants
└── package.json
```

## 🔌 Main Endpoints

### Public
- `GET /` - Landing page
- `POST /api/trpc/leads.create` - Create new lead
- `POST /api/stripe/webhook` - Stripe Webhook listener

### Protected (Admin)
- `GET /admin` - Admin Dashboard
- `GET /api/trpc/leads.list` - List all leads
- `GET /api/trpc/projects.list` - List all projects
- `GET /api/trpc/payments.listByClient` - List payments for a client

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

## 📦 Production Build

```bash
pnpm build
pnpm start
```

## 🌐 Deployment on Vercel

1. Connect your GitHub repository.
2. Add all environment variables in the Vercel Dashboard.
3. Automatic deployment on every push to `main`.

### Required Environment Variables for Vercel

```
DATABASE_URL
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
VITE_STRIPE_PUBLIC_KEY
VITE_APP_ID
OAUTH_SERVER_URL
VITE_OAUTH_PORTAL_URL
JWT_SECRET
OWNER_OPEN_ID
OWNER_NAME
VITE_FRONTEND_URL
```

---
© 2026 DILGS. All rights reserved. Premium Digital Presence Systems.
