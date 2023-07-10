import { FC, useState } from 'react'
import { Login } from '../Login'
import { Register } from '../Register'

const Auth: FC = () => {
  const [isRegistered, setIsRegistered] = useState(false)

  return isRegistered ? (
    <Login setIsRegistered={setIsRegistered} isRegistered={isRegistered} />
  ) : (
    <Register setIsRegistered={setIsRegistered} isRegistered={isRegistered} />
  )
}

export default Auth
