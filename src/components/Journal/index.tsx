import { useAccount, useNetwork, useWaitForTransaction } from "wagmi";

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
} from "../../generated";

export function Journal() {
  const testEntry = "I joined the ETHGlobal Superhack Hackathon today!";

  const { data } = useJournalGetEntryLength({
    address: '0xE691ED6875D0e921DB264bf9f53e0dbBBCE872e4', //contract address
    // args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
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
      <p>August 5, 2023</p>
      <div>
        <textarea />
      </div>
      <div>
        <button>Cancel</button>
        <button onClick={() => console.log(data)}>Validate</button>
      </div>
    </>
  );
}
