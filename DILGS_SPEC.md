# DILGS - Premium Gastronomy Digital Presence System

## Brand & Positioning
- **Brand Name**: DILGS
- **Positioning**: Premium digital presence systems for gastronomy businesses
- **Target**: Premium gastronomy businesses in the US (restaurants, fine dining, bakeries, cafés, sushi, pizzerias, catering, etc.)
- **Main Offer**: Gastronomy Digital Presence System - $10,000 implementation

## Design System
- **Color Palette**: 
  - Cream: #FDFBF7
  - Cream Dark: #F5EFEB
  - Brand Brown: #2D1E18
  - Brand Yellow: #FBE13F
  - Brand Orange: #FF7E47
  - Brand Green: #37A867
  - Brand Blue: #4FA9E3
  - Brand Purple: #4C2F6E

- **Typography**:
  - Display: Lilita One
  - Rounded: Fredoka
  - Sans: Inter
  - Mono: JetBrains Mono

- **Components**:
  - Bento Cards (rounded, bordered, shadow)
  - Bubble Buttons (pill-shaped)
  - Pill Labels (colorful)
  - Dark Ribbon Sections

## Payment Structure

### Standard Payment
- Deposit: $5,000
- Final Payment: $5,000
- Total: $10,000

### Alternative Payment
- First Payment: $4,000
- Second Payment: $3,000
- Final Payment: $3,000
- Total: $10,000

### Monthly Maintenance Plans
- Essential Care: $500/month
- Growth Care: $750/month
- Authority Care: $1,500/month

## Core Pages

1. **Home** (/) - Main sales page
2. **Free Audit** (/audit) - Lead capture form
3. **Payment** (/pay/:proposalId) - Deposit checkout
4. **Final Payment** (/final-payment/:projectId) - Final payment checkout
5. **Maintenance** (/maintenance) - Monthly plans sales
6. **Onboarding** (/onboarding/:clientId) - Client onboarding
7. **Success** (/success) - Payment confirmation
8. **Cancelled** (/cancelled) - Payment cancelled
9. **Admin** (/admin) - Admin dashboard

## Supabase Tables

1. **leads** - Lead capture with 13 fields
2. **audit_requests** - Free audit requests
3. **proposals** - Project proposals with payment structure
4. **clients** - Client information with Stripe customer ID
5. **projects** - Project tracking with status
6. **payments** - Payment history with Stripe IDs
7. **maintenance_subscriptions** - Monthly subscription tracking

## Stripe Integration

### Products/Prices
- DILGS Project Deposit: $5,000 one-time
- DILGS Final Balance: $5,000 one-time
- DILGS Alternative First: $4,000 one-time
- DILGS Alternative Second: $3,000 one-time
- DILGS Alternative Final: $3,000 one-time
- Essential Care: $500/month
- Growth Care: $750/month
- Authority Care: $1,500/month

### Webhook Events
- checkout.session.completed
- checkout.session.expired
- payment_intent.succeeded
- payment_intent.payment_failed
- invoice.paid
- invoice.payment_failed
- customer.subscription.created
- customer.subscription.updated
- customer.subscription.deleted

## Design Reference
Repository: https://github.com/Guszts/Portf-lio-filro-novo

## Key Rules
- No emojis
- No sparkles/zap/lightning icons
- Full responsiveness
- Premium, bold, playful, editorial style
- No generic agency template
- No AI mentions
- No false guarantees
- No exaggerated hype
- Fast, clean, secure, conversion-focused
- Semantic structure
- Clean mobile menu
- All CTAs must work
- Audit form saves to Supabase
- Stripe payments created server-side
- No secret keys in frontend
- Environment variables for all secrets
- Webhook verification required
- Row Level Security in Supabase
- Clean error/loading/success states
