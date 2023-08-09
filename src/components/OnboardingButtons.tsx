import { VStack } from '@chakra-ui/react'

import { ConnectWalletButton } from './ConnectWalletButton'
import { ScanQrCodeButton } from './ScanQrCodeButton'

export function OnboardingButtons() {
  return (
    <VStack marginTop="156px">
      <ConnectWalletButton marginBottom="16px"/>
      <ScanQrCodeButton />
    </VStack>
  );
}
