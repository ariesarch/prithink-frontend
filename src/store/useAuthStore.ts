import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/interfaces/user.interface';

type UserState = {
    token: string;
    AuthUser: User | null;
    setAuthUser: (AuthUser: User) => void;
    setToken: (token: string)=> void;
};

const useAuthStore = create(
  persist<UserState>(
    (set,get) => ({
        token: '',
        AuthUser: null,
        setAuthUser: (AuthUser: User) => set({ AuthUser }), // Update roles
        setToken: (token: string) => set({ token }), // Update roles
    }),
    {
      name: 'auth-store', // Key for localStorage
    }
  )
);

export default useAuthStore;
