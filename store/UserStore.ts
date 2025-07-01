import { create } from "zustand"

interface UserState {
  email: string
  updateEmail: (newValue: string) => void
}

export const useUserStore = create<UserState>((set, get) => ({
  email: '',
  updateEmail: (newValue) => set({ email: newValue })
}))