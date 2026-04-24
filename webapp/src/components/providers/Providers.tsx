"use client";

import { ThirdwebProvider } from "thirdweb/react";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <ThirdwebProvider>{children}</ThirdwebProvider>;
}
