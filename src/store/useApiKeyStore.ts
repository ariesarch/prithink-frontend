import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ApiKey } from '@/interfaces/api_key.interface';

type ApiKeyState = {
  apiKeys: ApiKey[];
  setApiKeys: (apiKey: ApiKey[]) => void;
  apiKey: ApiKey | null;
  setApiKey: (apiKey: ApiKey)=> void;
};

const useApikeyStore = create(
  persist<ApiKeyState>(
    (set,get) => ({
      apiKeys: [],
      setApiKeys: (apiKeys: ApiKey[]) => set({ apiKeys }), 
      apiKey: null, 
      setApiKey: (apiKey: ApiKey) => set({ apiKey }),
    }),
    {
      name: 'apiKey-store', 
    }
  )
);

export default useApikeyStore;
