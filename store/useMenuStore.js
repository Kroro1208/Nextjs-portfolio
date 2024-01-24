import { create } from 'zustand'

export const useMenuStore = create((set) => ({
    isOpen: false,
    openMobileMenu: () => set((state) => ({ isOpen: !state.isOpen })),
    closeMobileMenu: () => set({ isOpen: false }),
}))