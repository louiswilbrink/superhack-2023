import { Stack, Image, Heading, Text } from '@chakra-ui/react'

import { Header } from './Header'

import binoculars from 'public/binoculars.svg'
import editButton from 'public/edit_button.svg'

export function StartYourJourney() {
  return(
    <>
      <Stack gap={0}>
        <Header />
        <Image 
          width="480px"
          height="480px"
          marginTop="231px"
          marginLeft="auto"
          marginRight="auto"
          src={binoculars} alt="person looking through binoculars" 
        />
        <Heading
          textAlign="center"
          marginTop="16px"
          fontFamily="'Futura', sans-serif">
          Start your journey
        </Heading>
        <Text
          width="590px"
          textAlign="center"
          marginTop="22px"
          marginLeft="auto"
          marginRight="auto"
          fontSize="24px"
          fontWeight="light">
          Every big journey starts with a small step. Create your first journal entry!
        </Text>
        <Image 
          width="60px"
          height="60px"
          marginTop="44px"
          marginBottom="319px"
          marginLeft="auto"
          marginRight="auto"
          src={editButton} alt="Pencil" 
        />
      </Stack>
    </>
  );
}
