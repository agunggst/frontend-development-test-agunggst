'use client'
import useEmailValidation from "@/hooks/useEmailValidation"
import { FormEvent, useState } from "react"
import { FaComments, FaEye, FaEyeSlash } from "react-icons/fa"

export default function LoginPage () {
  const { email, emailError, isEmailValid, handleEmailChange, validateOnBlur, forceValidate, resetEmailValidation } = useEmailValidation('')
  const [password, setPassword] = useState<string>('')
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
  const [isRemember, setIsRemember] = useState<boolean>(false)
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false)

  const formValidation = () => {
    const emailValid = forceValidate()
    let isValid = true

    if (!emailValid) {
      isValid = false
    }

    if (!password) {
      setIsPasswordError(true)
      isValid = false
    } else {
      setIsPasswordError(false)
    }

    return isValid
  }

  const login = () => {
    
  }

  const handleForm = (e: FormEvent) => {
    e.preventDefault()
    
    const isValid = formValidation()
    if (!isValid) return

    setIsPasswordError(false)
    resetEmailValidation()
    setPassword('')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-neutral-50 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center">
            <div className="bg-neutral-800 text-white p-1.5 mr-2 rounded">
              <FaComments className="text-xl" />
            </div>
            <span className="text-neutral-800 font-semibold text-xl">WiiComm</span>
          </div>
        </div>
        <div className="text-center mb-6">
          <h1 className="font-semibold text-neutral-900 mb-1">Sign in to your account</h1>
          <p className="font-semibold text-neutral-600">Enter your credentials to access the dashboard</p>
        </div>
        <form className="space-y-4" onSubmit={handleForm}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1">Email</label>
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
            <label htmlFor="password" className="block text-sm font-semibold text-neutral-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={!isShowPassword ? 'password' : 'text'}
                id="password"
                className={`w-full px-3 py-2 border font-semibold rounded-md focus:outline-none focus:ring-2 ${isPasswordError ? 'border-red-500 focus:ring-red-500' : 'border-neutral-300 focus:ring-neutral-800'}`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={() => setIsShowPassword(!isShowPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {!isShowPassword ? <FaEye className="text-neutral-400" /> : <FaEyeSlash className="text-neutral-400" />}
              </button>
            </div>
            {isPasswordError && <p className="text-red-500 text-xs mt-1">Password is required</p>}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberme"
              className="h-4 w-4 text-neutral-800 focus:ring-neutral-700 border-neutral-300 rounded"
              checked={isRemember}
              onChange={e => setIsRemember(!isRemember)}
            />
            <label htmlFor="rememberme" className="block text-sm font-semibold text-neutral-700 ml-1">Remember me</label>
          </div>
          <button
            type="submit"
            id="login-button"
            className="w-full bg-neutral-800 font-semibold cursor-pointer text-white py-3 px-4 rounded-md hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-800 disabled:bg-neutral-500"
          >
            Sign in
          </button>
        </form>
        <div className="mt-8 text-center font-semibold text-neutral-500 text-xs">
          © 2025 WiiComm by agunggst. All rights reserved.
        </div>
      </div>
    </div>
  )
}