import { Button } from '@chakra-ui/react'
import { useConnectModal } from '@rainbow-me/rainbowkit';

import 'public/futura_medium.woff2';

export function ConnectWalletButton() {
  const { openConnectModal } = useConnectModal();
  return (
    <>
    {/* button will show up if wallet is not connected */}
      {openConnectModal && (
        <Button
        w="446px"
        h="60px"
        fontFamily="'Futura', sans-serif"
        fontWeight="100"
        fontSize="20px"
        borderRadius="100"
        color="black"
        letterSpacing="0.5px"
        background="brandGradient"
        onClick={openConnectModal}
        >
          Connect your wallet

        </Button>
      )}
    </>

  );
}
