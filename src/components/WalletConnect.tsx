import { Button, ButtonGroup } from '@chakra-ui/react'

import { ConnectWalletButton } from './ConnectWalletButton'
import { ScanQrCodeButton } from './ScanQrCodeButton'
import { Brand } from './Brand'

export function WalletConnect() {
  return (
    <>
      <Brand />
      <ConnectWalletButton />
      <ScanQrCodeButton />
    </>
  );
}
