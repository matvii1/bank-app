import { getFirebaseError } from '@/utils/getFirebaseError'
import { addDoc, collection } from '@firebase/firestore'
import { User, onAuthStateChanged } from 'firebase/auth'
import {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { auth, db, login, logout, register } from '../firebase'

interface IContext {
  user: User | null
  isLoading: boolean
  register: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  login: (email: string, password: string) => Promise<void>
  error: string
}

export const AuthContext = createContext<IContext>({} as IContext)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string>('')
  const [isLoadingInitial, setIsLoadingInitial] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const usersCollectionRef = collection(db, 'users')
  const errorTimeout = 3000

  async function handleRegister(email: string, password: string) {
    setIsLoading(true)

    try {
      const { user } = await register(email, password)

      await addDoc(usersCollectionRef, {
        _id: user.uid,
        displayName: 'Noname',
      })

      setError('')
    } catch (error: any) {
      const errorMessage = getFirebaseError(error.code)

      setError(errorMessage)

      setTimeout(() => {
        setError('')
      }, errorTimeout)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleLogin(email: string, password: string) {
    setIsLoading(true)

    try {
      await login(email, password)
      setError('')
    } catch (error: any) {
      const errorMessage = getFirebaseError(error.code)
      setError(errorMessage)

      setTimeout(() => {
        setError('')
      }, errorTimeout)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleLogout() {
    try {
      await logout()
    } catch (error: any) {
      setError('Something went wrong')
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null)
      setIsLoadingInitial(false)
    })
  }, [])

  const value = useMemo(
    () => ({
      user,
      error,
      isLoading,
      logout: handleLogout,
      login: handleLogin,
      register: handleRegister,
    }),
    [user, isLoading, error]
  )

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  )
}
