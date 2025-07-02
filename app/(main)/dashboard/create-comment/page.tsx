'use client'
import useEmailValidation from "@/hooks/useEmailValidation";
import { useCommentStore } from "@/store/CommentStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";

export default function CreateCommentPage () {
  const [name, setName] = useState<string>('')
  const [isNameError, setIsNameError] = useState<boolean>(false)
  const [comment, setComment] = useState<string>('')
  const [isCommentError, setIsCommentError] = useState<boolean>(false)
  const { email, emailError, isEmailValid, handleEmailChange, validateOnBlur, forceValidate, resetEmailValidation } = useEmailValidation('')
  const router = useRouter()
  const { comments, updateComment, fetchComments, isFetched } = useCommentStore()

  useEffect(() => {
    if (!isFetched) {
      fetchComments()
    }
  }, [])

  const formValidation = () => {
    const emailValid = forceValidate()
    let isValid = true

    if (!emailValid) {
      isValid = false
    }

    if (!name) {
      setIsNameError(true)
      isValid = false
    } else {
      setIsNameError(false)
    }

    if (comment?.length < 10) {
      setIsCommentError(true)
      isValid = false
    } else {
      setIsCommentError(false)
    }

    return isValid
  }

  const handleClearForm = () => {
    setName('')
    resetEmailValidation()
    setComment('')
  }

  const addComment = () => {
    const commentData = {
      id: comments[comments.length-1].id + 1,
      postId: Math.ceil((comments.length+1) / 5),
      name,
      email,
      body: comment
    }
    updateComment([commentData, ...comments])
  }

  const handleForm = (e: FormEvent) => {
    e.preventDefault()
    
    const isValid = formValidation()
    if (!isValid) return

    addComment()

    handleClearForm()
    router.push('/dashboard')
  }

  return (
    <div className="max-w-3xl mx-auto px-0 sm:px-6 lg:px-8">
      <div className="flex items-center mb-4">
        <Link href={'/dashboard'}>
          <button className="text-neutral-600 hover:text-neutral-900 mr-4 cursor-pointer">
            <FaArrowLeft className="font-semibold"/>
          </button>
        </Link>
        <div className="text-left">
          <h1 className="text-2xl font-bold text-neutral-900 mb-1">
            Create New Comment
          </h1>
          <p className="text-neutral-600 font-semibold text-sm">
            Fill out the form below to add a new comment
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
        <form className="space-y-6" onSubmit={handleForm}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1">Name *</label>
            <input
              type="text"
              id="name"
              className={`w-full px-3 py-2 border font-semibold rounded-md focus:outline-none focus:ring-2 ${isNameError ? 'border-red-500 focus:ring-red-500' : 'border-neutral-300 focus:ring-neutral-800'}`}
              placeholder="Enter your email"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            {isNameError && <p className="text-red-500 text-xs mt-1">Name is Required</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1">Email *</label>
            <input
              type="text"
              id="email"
              className={`w-full px-3 py-2 border font-semibold rounded-md focus:outline-none focus:ring-2 ${!isEmailValid ? 'border-red-500 focus:ring-red-500' : 'border-neutral-300 focus:ring-neutral-800'}`}
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateOnBlur}
            />
            {!isEmailValid && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-semibold text-neutral-700 mb-1">Comment *</label>
            <textarea
              rows={6}
              id="comment"
              className={`w-full px-3 py-2 border font-semibold rounded-md focus:outline-none focus:ring-2 ${isCommentError ? 'border-red-500 focus:ring-red-500' : 'border-neutral-300 focus:ring-neutral-800'}`}
              placeholder="Write your comment here..."
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <div className={`font-semibold text-sm mt-1 ${isCommentError ? 'text-red-500' : 'text-neutral-500 '}`}>Minimum 10 characters required</div>
          </div>
          <div className="flex justify-end space-x-4 pt-6 border-t border-neutral-200">
            <button type="button" onClick={handleClearForm} className="px-6 py-2 border cursor-pointer font-semibold border-neutral-300 text-neutral-700 rounded-md hover:bg-neutral-50 transition-colors">
              Clear Form
            </button>
            <button type="submit" className="px-6 py-2 cursor-pointer font-semibold bg-neutral-800 text-white rounded-md hover:bg-neutral-700 transition-colors flex items-center">
              <FaPaperPlane className="mr-2" />
              Submit Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}