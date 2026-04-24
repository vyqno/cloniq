import { createThirdwebClient } from "thirdweb";

const fallbackClientId = "00000000000000000000000000000000";

export const thirdwebClient = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || fallbackClientId,
});

export const hasConfiguredThirdwebClient = Boolean(process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID);
