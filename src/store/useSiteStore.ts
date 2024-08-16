import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Site } from '@/interfaces/site.interface';

type SiteState = {
  sites: Site[];
  setSites: (sites: Site[]) => void;
  site: Site | null;
  setSite: (site: Site) => void;
};

const useSiteStore = create(
  persist<SiteState>(
    (set,get) => ({
      sites: [], // Initial empty state
      setSites: (sites: Site[]) => set({ sites }), // Update sites
      site: null, 
      setSite: (site: Site) => set({ site }),
    }),
    {
      name: 'site-store', // Key for localStorage
    }
  )
);

export default useSiteStore;
