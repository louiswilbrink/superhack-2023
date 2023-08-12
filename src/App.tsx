import React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useAccount } from "wagmi";

import { Journal } from "./components/Journal";
import { LoadingScreen } from "./components/LoadingScreen";
import { WalletConnect } from "./components/WalletConnect";
import { StartYourJourney } from "./components/StartYourJourney";

export function App() {
  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { isConnected } = useAccount();

  /**
   * Using simple state flags until we need to implement a full router.
   */
  const [isJourneyStarted, setIsJourneyStarted] = React.useState(false);

  const onStartClicked = (newStatus: boolean | ((prevState: boolean) => boolean)) => {
    setIsJourneyStarted(newStatus);
  }

  return (
    <>
      {!isConnected && (
        <>
          <WalletConnect />
        </>
      )}
      {isConnected && !isJourneyStarted && (
        <>
          <hr />
          <StartYourJourney onStartClicked={(newStatus: boolean | ((prevState: boolean) => boolean)) => onStartClicked(newStatus)} />
          <hr />
        </>
      )}
      {isConnected && isJourneyStarted && (
        <>
          <hr />
          <Journal />
          <hr />
        </>
      )}
    </>

    // <Journal />
  );
}
