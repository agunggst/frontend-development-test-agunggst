import { create } from "zustand"

interface UserState {
  emailStore: string
  updateEmailStore: (newValue: string) => void
}

export const useUserStore = create<UserState>((set, get) => ({
  emailStore: '',
  updateEmailStore: (newValue) => set({ emailStore: newValue })
}))