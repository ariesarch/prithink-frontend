import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/interfaces/user.interface';
import { Setting } from '@/interfaces/setting.interface';

type SettingState = {
    setting: Setting | null;
    setSetting: (setting: Setting) => void;
};

const useSettingStore = create(
    persist<SettingState>(
        (set, get) => ({
            setting: null,
            setSetting: (setting: Setting) => set({ setting }),
        }),
        {
            name: 'setting-store',
        }
    )
);

export default useSettingStore;
