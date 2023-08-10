import { Image } from '@chakra-ui/react'

import topaz from 'public/topaz.svg'

export function Brand() {
  return (
    <Image 
      width="275px"
      height="75px"
      marginTop="120px"
      marginLeft="auto"
      marginRight="auto"
      src={topaz} alt="topaz brand" 
    />
  );
}
