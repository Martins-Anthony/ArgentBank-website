const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{11,}$/

export const isEmailValid = (email) => {
  return emailRegex.test(email)
}

export const isPasswordValid = (password) => {
  return passwordRegex.test(password)
}
