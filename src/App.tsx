import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useAccount } from "wagmi";

import { Journal } from "./components/Journal";
import { LoadingScreen } from "./components/LoadingScreen";
import { WalletConnect } from "./components/WalletConnect";

export function App() {
  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { isConnected } = useAccount();

  return (
    <>
      <h1>Topaz Journal</h1>

      {/** @see https://www.rainbowkit.com/docs/connect-button */}
      <ConnectButton />

      {isConnected && (
        <>
          <WalletConnect />
        </>
      )}
    </>
  );
}
