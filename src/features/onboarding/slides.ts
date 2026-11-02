import type { ImageSource } from 'expo-image';

export type OnboardingSlide = {
  key: string;
  title: string;
  body: string;
  /**
   * Hero photo for the orange card. `null` shows the plain orange card.
   * When the artwork is ready, drop it in assets/images/onboarding/ and set e.g.
   * `image: require('@/assets/images/onboarding/slide-1.png')`.
   */
  image: ImageSource | number | null;
};

/** Vendor-facing onboarding copy. Sentence case, British spelling (Design/patterns.md > Voice). */
export const onboardingSlides: OnboardingSlide[] = [
  {
    key: 'menu',
    title: 'Your kitchen, now online.',
    body: 'Put your menu in front of hungry students across campus. Add dishes, set prices and go live in minutes.',
    image: null,
  },
  {
    key: 'orders',
    title: 'Orders come straight to you.',
    body: 'Get notified the moment an order lands. Accept it, prepare it and keep customers updated as you go.',
    image: null,
  },
  {
    key: 'growth',
    title: 'Get paid and grow.',
    body: 'Track your sales and payouts in one place, and see which dishes your customers love most.',
    image: null,
  },
];
