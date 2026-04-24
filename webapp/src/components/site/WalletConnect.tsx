"use client";

import { ConnectButton } from "thirdweb/react";
import { thirdwebClient } from "@/lib/thirdweb/client";
import { cloniqChain, cloniqWallets } from "@/lib/thirdweb/wallets";

export function WalletConnect() {
  return (
    <ConnectButton
      chain={cloniqChain}
      client={thirdwebClient}
      connectButton={{
        label: "Connect",
        style: {
          minWidth: "96px",
          height: "44px",
          borderRadius: "56px",
          background: "#eef0f3",
          color: "#0a0b0d",
          fontSize: "14px",
          fontWeight: 600,
        },
      }}
      connectModal={{
        title: "Connect to Cloniq",
        titleIcon: "",
        size: "compact",
      }}
      wallets={cloniqWallets}
    />
  );
}
