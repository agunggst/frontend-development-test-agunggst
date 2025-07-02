'use client'
import { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { FaTrash } from 'react-icons/fa'
import { Paginator } from 'primereact/paginator'
import { Comment } from '@/interfaces/interfaces'
import { useCommentStore } from '@/store/CommentStore'

interface CommentTableProps {
  comments: Comment[]
}

export default function CommentTable({ comments }: CommentTableProps) {
  const [first, setFirst] = useState(0)
  const [rows, setRows] = useState(10)
  const { updateComment } = useCommentStore()

  const paginatedComments = comments.slice(first, first + rows)


  const handleDelete = (id: number) => {
    updateComment(comments.filter(comment => comment.id !== id))
  }

  const idTemplate = (row: Comment) => {
    return (
      <div className="text-sm font-semibold text-neutral-900">{row.id}</div>
    )
  }

  const nameTemplate = (row: Comment) => {
    return (
      <div className="flex items-center">
        <div className="text-sm font-semibold text-neutral-900 max-w-xs truncate">{row.name}</div>
      </div>
    )
  }

  const emailTemplate = (row: Comment) => (
    <div className="text-sm font-semibold text-neutral-900">{row.email}</div>
  )

  const bodyTemplate = (row: Comment) => (
    <div className="text-sm font-semibold text-neutral-900 max-w-xs truncate">{row.body}</div>
  )

  const actionTemplate = (row: Comment) => (
    <div className="text-center">
      <button
        onClick={() => handleDelete(row.id)}
        className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 cursor-pointer"
        aria-label={`Delete comment by ${row.name}`}
      >
        <FaTrash className="w-4 h-4 inline" />
      </button>
    </div>
  )

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
        <div className="overflow-x-auto">
          <DataTable
            value={paginatedComments}
            rows={10}
            stripedRows
            className="min-w-full text-sm"
            tableClassName="min-w-full divide-y divide-neutral-200"
          >
            <Column
              header="ID"
              body={idTemplate}
              headerClassName="bg-neutral-50 px-6 py-3 text-left text-xs text-neutral-500 uppercase tracking-wider"
              bodyClassName="px-6 py-4 whitespace-nowrap"
            />
            <Column
              header="Name"
              body={nameTemplate}
              headerClassName="bg-neutral-50 px-6 py-3 text-left text-xs text-neutral-500 uppercase tracking-wider"
              bodyClassName="px-6 py-4 whitespace-nowrap"
            />
            <Column
              header="Email"
              body={emailTemplate}
              headerClassName="bg-neutral-50 px-6 py-3 text-left text-xs text-neutral-500 uppercase tracking-wider"
              bodyClassName="px-6 py-4 whitespace-nowrap"
            />
            <Column
              header="Body"
              body={bodyTemplate}
              headerClassName="bg-neutral-50 px-6 py-3 text-left text-xs text-neutral-500 uppercase tracking-wider"
              bodyClassName="px-6 py-4"
            />
            <Column
              header="Actions"
              body={actionTemplate}
              headerClassName="bg-neutral-50 px-6 py-3 text-center text-xs text-neutral-500 uppercase tracking-wider"
              bodyClassName="px-6 py-4 whitespace-nowrap text-center"
              style={{ width: '6rem' }}
            />
          </DataTable>
        </div>
      </div>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={comments.length}
        onPageChange={(e) => {
          setFirst(e.first)
          setRows(e.rows)
        }}
        className="flex items-center justify-center md:justify-end p-4"
        template={{
          layout: 'PrevPageLink PageLinks NextPageLink',
          PrevPageLink: (options) => (
            <button
              onClick={options.onClick}
              className={`px-3 py-1 border border-neutral-300 font-semibold rounded-md text-sm mr-2 ${
                options.disabled ? 'text-neutral-500 cursor-not-allowed' : 'text-neutral-800 cursor-pointer hover:bg-neutral-100'
              }`}
            >
              Prev
            </button>
          ),
          NextPageLink: (options) => (
            <button
              onClick={options.onClick}
              className={`px-3 py-1 border border-neutral-300 font-semibold rounded-md text-sm ${
                options.disabled ? 'text-neutral-500 cursor-not-allowed' : 'text-neutral-800 cursor-pointer hover:bg-neutral-100'
              }`}
            >
              Next
            </button>
          ),
          PageLinks: (options) => {
            return options.page === options.currentPage ? (
              <button 
                className="mr-2 px-3 py-1 bg-neutral-800 text-white font-semibold cursor-pointer rounded-md text-sm"
              >
                {options.page + 1}
              </button>
            ) : (
              <button
                onClick={options.onClick}
                className="mr-2 px-3 py-1 border border-neutral-300 rounded-md font-semibold text-sm cursor-pointer text-neutral-500 hover:bg-neutral-100"
              >
                {options.page + 1}
              </button>
            )
          },
        }}
      />
    </>
  )
}
