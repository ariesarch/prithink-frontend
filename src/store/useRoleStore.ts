import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Role } from '@/interfaces/role.interface';

type RoleState = {
  roles: Role[];
  setRoles: (roles: Role[]) => void;
};

const useRolesStore = create(
  persist<RoleState>(
    (set,get) => ({
      roles: [], // Initial empty state
      setRoles: (roles: Role[]) => set({ roles }), // Update roles
    }),
    {
      name: 'role-store', // Key for localStorage
    }
  )
);

export default useRolesStore;
