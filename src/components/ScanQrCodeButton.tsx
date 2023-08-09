import { Button } from '@chakra-ui/react'

export function ScanQrCodeButton() {
  return (
    <Button 
    w="446px" 
    h="60px" 
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
