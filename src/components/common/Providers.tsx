"use client";

import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FuturisticLoader } from "@/components/common/FuturisticLoader";
import { LoaderReadyProvider } from "@/hooks/useLoaderReady";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <LoaderReadyProvider>
        <FuturisticLoader />
        {children}
      </LoaderReadyProvider>
    </QueryClientProvider>
  );
}
