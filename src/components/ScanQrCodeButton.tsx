import { Button } from '@chakra-ui/react'

import 'public/futura_medium.woff2';

export function ScanQrCodeButton() {
  return (
    <Button 
    w="446px" 
    h="60px" 
    fontFamily="'Futura', sans-serif"
    fontWeight="100"
    fontSize="20px"
    borderRadius="100"
    color="black"
    letterSpacing="0.5px"
    borderColor="brand"
    borderWidth="1px"
    background="white">
      Scan QR code (from WebApp)
    </Button>
  );
}
