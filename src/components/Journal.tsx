import { Flex, Textarea, Button, VStack, HStack } from '@chakra-ui/react'
import { useAccount, useNetwork, useWaitForTransaction } from "wagmi";

import { Header } from './Header'
import { EntryDate } from './EntryDate';
// import { JournalButtons } from './JournalButtons';
import { journalABI } from "../generated";


import { useContractRead } from 'wagmi'

import {
  parseString,
  stringifyAttestationBytes,
  encodeRawKey,
} from "@eth-optimism/atst";

/**
 * These react hooks are generated with the wagmi cli via `wagmi generate`
 * @see ROOT/wagmi.config.ts
 */
import {
  useJournalRead,
  usePrepareJournalWrite,
  useJournalWrite,
  usePrepareJournalAddEntry,
  useJournalAddEntry,
  useJournalGetEntry,
  useJournalGetEntryLength,
  useCounterNumber,
  useCounterIncrement,
  useAttestationStationRead,
  useAttestationStationAttestations,
} from "../generated";

export function Journal() {
  const testEntry = "I joined the ETHGlobal Superhack Hackathon today!";

  const { data } = useJournalGetEntryLength({
    address: '0xE691ED6875D0e921DB264bf9f53e0dbBBCE872e4', //contract address
    // args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
  })

  const contractRead = useContractRead({
    address: '0xE691ED6875D0e921DB264bf9f53e0dbBBCE872e4',
    abi: journalABI,
    functionName: 'getEntryLength',
    onSettled(data, error) {
      console.log('Settled', { data, error })
    },
  })

  const onValidate = () => {
    // useJournalGetEntry();
    // useCounterIncrement();
    console.log("validated");

  };

  const result = useCounterNumber();
  console.log('result:', result);

  return (
    <>
      <Header />
      <Flex
        marginTop="223px"
        marginLeft="40px"
        marginRight="40px"
        gap="19px">
        <EntryDate />
        <VStack
          gap="34px"
          width="100%">
          <Textarea
            height="397px"
            border="none"
            boxShadow="lg"
            resize="none"
            placeholder="What happened today?" />
          <Flex

            width="100%"
            gap="16px"
            alignItems="center">
            <Button
              flex="1"
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
              Cancel
            </Button>
            <Button
              flex="1"
              h="60px"
              fontFamily="'Futura', sans-serif"
              fontWeight="100"
              fontSize="20px"
              borderRadius="100"
              color="black"
              letterSpacing="0.5px"
              background="brandGradient"
              onClick={() => contractRead}>
              Save forever
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
}
