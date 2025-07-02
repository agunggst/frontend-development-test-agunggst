import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function DashboardPage () {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">Comments Dashboard</h1>
          <p className="text-neutral-600 font-semibold">Manage and view all user comments</p>
        </div>
        <Link href={'/dashboard/create-comment'}>
          <button 
            className="bg-neutral-800 text-white font-semibold px-4 py-2 rounded-md hover:bg-neutral-700 flex items-center cursor-pointer"
          >
            <FaPlus className="mr-2"/>
            Create Comment
          </button>
        </Link>
      </div>
    </div>
  )
}