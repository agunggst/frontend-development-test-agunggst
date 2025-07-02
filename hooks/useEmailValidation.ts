import { useState } from "react"

export default function useEmailValidation(initialEmail = "") {
  const [email, setEmail] = useState(initialEmail)
  const [emailError, setEmailError] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)

  const validateEmail = (value: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    setIsEmailValid(isValid)
    setEmailError(isValid ? "" : "Please enter a valid email address")
    return isValid
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (hasInteracted) {
      validateEmail(value)
    }
  }

  const validateOnBlur = () => {
    setHasInteracted(true)
    validateEmail(email)
  }

  const forceValidate = () => {
    setHasInteracted(true)
    return validateEmail(email)
  }

  const resetEmailValidation = () => {
    setEmail("")
    setEmailError("")
    setIsEmailValid(true)
    setHasInteracted(false)
  }

  return {
    email,
    emailError,
    isEmailValid,
    handleEmailChange,
    validateOnBlur,
    forceValidate,
    resetEmailValidation,
  }
}
