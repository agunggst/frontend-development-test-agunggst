// 'use client'
// import { useState } from "react"

// interface InputTextProps {
//   label: string
//   isRequired: boolean
//   validation?: () => void
// }

// export default function InputText ({ label, isRequired, validation = () => {return true}} : InputTextProps) {
//   const [value, setValue] = useState<string>('')
//   const [isError, setIsError] = useState<boolean>(false)

//   return (
//     <div>
//       <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1">{label}{isRequired ? ' *' : ''}</label>
//       <input
//         type="text"
//         id="name"
//         className={`w-full px-3 py-2 border font-semibold rounded-md focus:outline-none focus:ring-2 ${!isError ? 'border-red-500 focus:ring-red-500' : 'border-neutral-300 focus:ring-neutral-800'}`}
//         placeholder={`Enter your ${label}`}
//         value={value}
//         onChange={e => setValue(e.target.value)}
//       />
//       {!isError && <p className="text-red-500 text-xs mt-1">{label} is Required</p>}
//     </div>
//   )
// }