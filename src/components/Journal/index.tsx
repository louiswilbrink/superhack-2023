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

  const onValidate = () => {
    //useJournalGetEntry();
    //useCounterIncrement();
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
        <button onClick={onValidate}>Validate</button>
      </div>
    </>
  );
}
