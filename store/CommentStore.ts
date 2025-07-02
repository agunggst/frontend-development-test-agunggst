import { Comment } from "@/interfaces/interfaces"
import { create } from "zustand"

interface CommentState {
  comments: Comment[]
  updateComment: (newValue: Comment[]) => void
}

export const useCommentStore = create<CommentState>((set, get) => ({
  comments: [],
  updateComment: (newValue) => set({ comments: newValue })
}))