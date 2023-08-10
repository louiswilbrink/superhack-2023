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

  return (
    <>
      {!isConnected && (
        <>
          <WalletConnect />
        </>
      )}
      {isConnected && (
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
