import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/interfaces/user.interface';

type UserState = {
    users: User[];
    setUsers: (users: User[]) => void;
    user: User | null;
    setUser: (user: User) => void;
};

const useUserStore = create(
    persist<UserState>(
        (set, get) => ({
            users: [],
            setUsers: (users: User[]) => set({ users }),
            user: null,
            setUser: (user: User) => set({ user }),
        }),
        {
            name: 'user-store',
        }
    )
);

export default useUserStore;
