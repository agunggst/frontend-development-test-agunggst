'use client'
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import CommentTable from "@/app/components/CommentTable";
import { useCommentStore } from "@/store/CommentStore";
import { useEffect, useState } from "react";
import InputSearch from "@/app/components/InputSearch";

export default function DashboardPage () {
  const { comments, fetchComments, isLoading, isFetched } = useCommentStore()
  const [searchCommentText, setSearchCommentText] = useState<string>()

  useEffect(() => {
    if (!isFetched) {
      fetchComments()
    }
  }, [])

  const searchComment = (input: string) => {
    setSearchCommentText(input)
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">
          Comments Dashboard
        </h1>
        <p className="text-neutral-600 font-semibold text-sm">
          Manage and view all user comments
        </p>
      </div>
      <Link href={'/dashboard/create-comment'} className="w-full md:w-auto">
        <button
          type="button"
          className="bg-neutral-800 text-white font-semibold px-4 py-2 rounded-md hover:bg-neutral-700 flex items-center justify-center w-full md:w-auto cursor-pointer" // justify-center untuk mobile
        >
          <FaPlus className="mr-2" />
          Create Comment
        </button>
      </Link>
    </div>
      <div className="mb-6">
        <InputSearch placeholder="Search by comment's name..." triggerSearch={searchComment} />
      </div>
      {
        !isLoading && 
        <CommentTable 
          comments={searchCommentText ? comments.filter((comment) => comment.name.includes(searchCommentText)) : comments} 
        />
      }
    </div>
  )
}