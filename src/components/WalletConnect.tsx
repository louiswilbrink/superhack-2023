import { Brand } from './Brand'
import { Onboarding } from './Onboarding'
import { OnboardingButtons } from './OnboardingButtons'
import { TermsAndConditions } from './TermsAndConditions'

export function WalletConnect() {
  return (
    <>
      <Brand />
      <Onboarding />
      <OnboardingButtons />
      <TermsAndConditions />
    </>
  );
}
