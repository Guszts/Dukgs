import Stripe from 'stripe';

let _stripe: Stripe | null = null;

export function getStripe() {
  if (!_stripe && process.env.STRIPE_SECRET_KEY) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-01-27' as any, // Using a stable version
      appInfo: {
        name: 'DILGS',
        version: '1.0.0',
      },
    });
  }
  return _stripe;
}

export async function handleStripeWebhook(event: Stripe.Event) {
  const stripe = getStripe();
  if (!stripe) return { error: 'Stripe not initialized' };

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`[Stripe] Checkout session completed: ${session.id}`);
      // Lógica para marcar pagamento como pago no banco de dados
      // Isso deve ser chamado pelo webhook handler principal
      break;
    case 'invoice.paid':
      const invoice = event.data.object as Stripe.Invoice;
      console.log(`[Stripe] Invoice paid: ${invoice.id}`);
      break;
    case 'customer.subscription.deleted':
      const subscription = event.data.object as Stripe.Subscription;
      console.log(`[Stripe] Subscription deleted: ${subscription.id}`);
      break;
    default:
      console.log(`[Stripe] Unhandled event type: ${event.type}`);
  }

  return { received: true };
}
