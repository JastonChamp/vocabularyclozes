/**
 * Billing integration scaffolding (commented/optional).
 *
 * Stripe (recommended):
 * 1) Create products:
 *    - VocabForge Pro Monthly (S$4.90)
 *    - VocabForge Pro Yearly (S$39)
 * 2) Use a Supabase Edge Function to create Checkout Sessions.
 * 3) Store subscription status in `profiles.plan_tier` + `subscriptions` table.
 */

export async function createStripeCheckoutSession(_priceId: string) {
  // const response = await fetch('/functions/v1/create-checkout-session', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ priceId: _priceId })
  // });
  // const { url } = await response.json();
  // window.location.href = url;
}

/**
 * Lemon Squeezy alternative:
 * - Create store + products
 * - Use hosted checkout URL and webhook to sync status back into Supabase
 */
export async function startLemonSqueezyCheckout(_variantId: string) {
  // const response = await fetch('/functions/v1/lemon-checkout', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ variantId: _variantId })
  // });
  // const { checkoutUrl } = await response.json();
  // window.location.href = checkoutUrl;
}
