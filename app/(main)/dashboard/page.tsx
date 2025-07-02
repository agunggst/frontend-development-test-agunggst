'use client'
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import CommentTable from "@/app/components/CommentTable";
import { useCommentStore } from "@/store/CommentStore";
import { useEffect } from "react";

export default function DashboardPage () {
  const { comments, fetchComments, isLoading, isFetched } = useCommentStore()

  useEffect(() => {
    if (!isFetched) {
      fetchComments()
    }
  }, [])

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <div className="text-center md:text-left mb-4 md:mb-0"> {/* Tambahkan text-center untuk mobile */}
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
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaMagnifyingGlass className="text-neutral-400"/>
          </div>
          <input 
            type="text" 
            className="block w-full pl-10 pr-3 py-2 border font-semibold border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
            placeholder="Search comments..."
          />
        </div>
      </div>
      {
        !isLoading && <CommentTable comments={comments} />
      }
    </div>
  )
}