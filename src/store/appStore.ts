import { create } from 'zustand';

type AppState = {
  language: string;
  setLanguage: (language: string) => void;
};

export const useAppStore = create<AppState>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language })
}));
