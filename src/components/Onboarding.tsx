import { Container, Image, Heading, Text } from '@chakra-ui/react'

import onboarding from 'public/onboarding.svg'

export function Onboarding() {
  return (
    <Container 
      marginTop="80px"
      maxWidth="100%"
      textAlign="center">
      <Image 
        marginLeft="auto"
        marginRight="auto"
        marginBottom="16px"
        src={onboarding} alt="person having an idea" />
      <Heading
        fontWeight="medium"
        color="black"
        marginBottom="22px"
        fontSize="40px">
        Timeless expression
      </Heading>
      <Text
        fontWeight="light"
        color="black"
        fontSize="24px">
        The journal app that makes your thoughts last forever
      </Text>
    </Container>
  );
}
