import { Footer } from '@/components/layouts'
import {
  Auth,
  Home,
  More,
  Payments,
  Profile,
  Services,
  Support,
} from '@/components/screens'
import { useAuth } from '@/hooks'

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC, useEffect, useState } from 'react'

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
  const { user } = useAuth()
  const [selectedPage, setSelectedPage] = useState<string | undefined>('Home')
  const ref = useNavigationContainerRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelectedPage(ref.getCurrentRoute()?.name)
    }, 100)

    const unsubscribe = ref.addListener('state', () => {
      setSelectedPage(ref.getCurrentRoute()?.name)
    })

    return () => {
      clearTimeout(timeout)
      unsubscribe()
    }
  }, [])

  return (
    <>
      <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <>
              <Stack.Screen component={Home} name="Home" />
              <Stack.Screen component={Payments} name="Payments" />
              <Stack.Screen component={Services} name="Services" />
              <Stack.Screen component={Profile} name="Profile" />
              <Stack.Screen component={Support} name="Support" />
              <Stack.Screen component={More} name="More" />
            </>
          ) : (
            <Stack.Screen component={Auth} name="Auth" />
          )}
        </Stack.Navigator>
      </NavigationContainer>

      {user && !!selectedPage && (
        <Footer navigate={ref.navigate} selectedPage={selectedPage} />
      )}
    </>
  )
}

export default Navigation
