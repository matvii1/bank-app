import Navigation from '@/navigation/Navigation'
import { AuthProvider } from '@/providers/AuthProvider'
import { RootSiblingParent } from 'react-native-root-siblings'

export default function App() {
  return (
    <AuthProvider>
      <RootSiblingParent>
        <Navigation />
      </RootSiblingParent>
    </AuthProvider>
  )
}
