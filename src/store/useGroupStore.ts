import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Group } from '@/interfaces/group.interface';

type GroupState = {
  groups: Group[];
  setGroups: (groups: Group[]) => void;
  group: Group | null;
  setGroup: (group: Group) => void;
};

const useGroupStore = create(
  persist<GroupState>(
    (set,get) => ({
      groups: [],
      setGroups: (groups: Group[]) => set({ groups }),
      group: null, 
      setGroup: (group: Group) => set({ group }),
    }),
    {
      name: 'group-store', 
    }
  )
);

export default useGroupStore;
