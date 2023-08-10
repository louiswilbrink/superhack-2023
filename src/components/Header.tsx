import { Flex, Spacer, Text, Box, Button, Image } from '@chakra-ui/react'

import walletIcon from 'public/wallet-icon.svg'

export function Header() {
  return(
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        marginTop="40px"
        marginLeft="40px"
        marginRight="40px"
        gap="2">
        <Text
          fontSize="40px"
          fontWeight="500">
          Good afternoon, 0x..D
        </Text>
        <Spacer />
        <Button
          borderRadius="100"
          borderColor="brand"
          borderWidth="1px"
          background="white"
          height="60px"
          width="175px">
          <Flex
            minWidth="160px"
            alignItems="center">
            <Image src={walletIcon} 
              width="52px"
              height="52px" />
            <Spacer />
            <Text
              fontSize="24px"
              fontFamily="'Futura', sans-serif"
              marginRight="20px"
              fontWeight="500">
              0x..D
            </Text>
          </Flex>
        </Button>
      </Flex>
    </>
  );
}
