"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface LoaderReadyContextValue {
  loaderComplete: boolean;
  setLoaderComplete: () => void;
}

const LoaderReadyContext = createContext<LoaderReadyContextValue | null>(null);

export function LoaderReadyProvider({ children }: { children: ReactNode }) {
  const [loaderComplete, setComplete] = useState(false);
  const setLoaderComplete = useCallback(() => setComplete(true), []);

  return (
    <LoaderReadyContext.Provider value={{ loaderComplete, setLoaderComplete }}>
      {children}
    </LoaderReadyContext.Provider>
  );
}

export function useLoaderReady(): LoaderReadyContextValue {
  const context = useContext(LoaderReadyContext);
  if (!context) {
    throw new Error("useLoaderReady must be used within LoaderReadyProvider");
  }
  return context;
}
