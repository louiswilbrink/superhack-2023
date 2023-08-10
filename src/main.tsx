import "@rainbow-me/rainbowkit/styles.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { App } from "./App";
import { chains, config } from "./wagmi";

import '@fontsource/poppins';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    brand: "#F9DD7D",
    brandGradient: "linear-gradient(to right, #F9DD7D, #F8F0A0)",
    black: "#303030",
    white: "#FFFFFF",
    gray: "#898989",
    lightGray: "#ededed",
  },
})

/**
 * Root providers and initialization of app
 * @see https://reactjs.org/docs/strict-mode.html
 * @see https://wagmi.sh/react/WagmiConfig
 * @see https://www.rainbowkit.com/docs/installation
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
);
