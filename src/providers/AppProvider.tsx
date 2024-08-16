'use client';

import { UIProvider } from '@/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ToastProvider from './ToastProvider';
// Create a react-query client
const queryClient = new QueryClient();

export interface AppProviderProps {
  children?: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </UIProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}