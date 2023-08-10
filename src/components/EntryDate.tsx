import { Box, Text, VStack } from '@chakra-ui/react'

export function EntryDate() {
  return(
    <Box
      width="60px"
      height="60px"
      borderRadius="12"
      paddingTop="8px"
      backgroundColor="lightGray">
      <VStack gap={0}>
        <Text
          fontSize="14px"
          color="gray">
          AUG
        </Text>
        <Text
          lineHeight="24px"
          fontSize="24px"
          color="black">
          11
        </Text>
      </VStack>
    </Box>
  );
}
