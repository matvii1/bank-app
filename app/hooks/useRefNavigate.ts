
import { NavigationContext } from '@/navigation/Navigation'
import { useContext } from 'react'

export function useRefNavigate() {
  return useContext(NavigationContext)
}
