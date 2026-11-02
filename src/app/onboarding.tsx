import { markOnboardingCompleted, OnboardingScreen } from '@/features/onboarding';

export default function OnboardingRoute() {
  const onFinish = () => {
    void markOnboardingCompleted();
    // TODO: router.replace('/sign-in') once the auth screens exist.
  };

  return <OnboardingScreen onFinish={onFinish} />;
}
