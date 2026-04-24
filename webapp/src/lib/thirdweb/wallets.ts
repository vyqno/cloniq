import { base } from "thirdweb/chains";
import { createWallet, inAppWallet } from "thirdweb/wallets";

export const cloniqChain = base;

export const cloniqWallets = [
  inAppWallet({
    auth: {
      options: ["email", "passkey", "google"],
    },
    metadata: {
      name: "Cloniq",
    },
  }),
  createWallet("com.coinbase.wallet"),
  createWallet("io.metamask"),
];
