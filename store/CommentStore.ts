import { Comment } from "@/interfaces/interfaces"
import axios from "axios"
import { create } from "zustand"

interface CommentState {
  comments: Comment[]
  isLoading: boolean
  error: string | null
  isFetched: boolean
  updateComment: (newValue: Comment[]) => void
  updateIsFetched: (newValue: boolean) => void
  fetchComments: () => Promise<void>
}

export const useCommentStore = create<CommentState>((set, get) => ({
  comments: [],
  isLoading: true,
  error: null,
  isFetched: false,
  updateComment: (newValue) => set({ comments: newValue }),
  updateIsFetched: (newValue) => set({ isFetched: newValue }),
  fetchComments: async () => {
    set({ isLoading: true })
    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/comments')
      set({ comments: result.data, isLoading: false, isFetched: true })
    } catch (error: any) {
      set({ error: error.message, isLoading: false })
    }
  }
}))