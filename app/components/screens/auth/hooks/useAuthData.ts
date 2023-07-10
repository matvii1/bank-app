import { useState } from 'react'

interface Data {
  email: string
  password: string
}

export function useAuthData() {
  const [data, setData] = useState<Data>({} as Data)

  function setEmail(email: string) {
    setData({
      ...data,
      email,
    })
  }

  function setPassword(password: string) {
    setData({
      ...data,
      password,
    })
  }

  function resetData() {
    setData({} as Data)
  }

  return {
    email: data.email,
    password: data.password,
    setPassword,
    setEmail,
    resetData,
  }
}
