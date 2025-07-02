'use client'
import { useCommentStore } from "@/store/CommentStore"
import { useUserStore } from "@/store/UserStore"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaComments } from "react-icons/fa"
import { FaRightFromBracket } from "react-icons/fa6"

export default function Navbar () {
  const router = useRouter()
  const { updateEmailStore } = useUserStore()
  const { updateIsFetched } = useCommentStore()

  const logout = () => {
    localStorage.removeItem('email')
    updateEmailStore('')
    updateIsFetched(false)
    router.push('/login')
  }
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <Link href={'/dashboard'}>
            <div className="flex items-center">
              <div className="bg-neutral-800 text-white p-1 mr-2 rounded">
                <FaComments className="text-xl"/>
              </div>
              <span className="text-neutral-800 font-semibold text-xl">WiiComm</span>
            </div>
          </Link>
          {/* navigation */}
          <nav className="flex items-center space-x-4">
            {/* <span className="text-neutral-700 hover:text-neutral-900 font-semibold px-3 py-2 rounded-md text-sm cursor-pointer">Dashboard</span>
            <span className="text-neutral-700 hover:text-neutral-900 font-semibold px-3 py-2 rounded-md text-sm cursor-pointer">Create Comment</span> */}
            <button 
              className="text-neutral-700 hover:text-neutral-900 px-3 py-2 font-semibold rounded-md text-sm flex items-center cursor-pointer"
              onClick={logout}
            >
              <FaRightFromBracket className="mr-2"/>
              Logout
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}