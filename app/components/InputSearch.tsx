'use client'
import { useState, KeyboardEvent } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface InputSearchProps {
  triggerSearch: (input: string) => void
  placeholder: string
}

export default function InputSearch ({triggerSearch, placeholder} : InputSearchProps) {
  const [input, setInput] = useState<string>('')

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      triggerSearch(input)
    }
  }

  return (
    <div className="relative max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaMagnifyingGlass className="text-neutral-400"/>
      </div>
      <input 
        type="text" 
        className="block w-full pl-10 pr-3 py-2 border font-semibold border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}