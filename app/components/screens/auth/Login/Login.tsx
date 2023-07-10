import { Button, Field } from '@/components/ui'

import { useAuth } from '@/hooks'
import { styleCetner } from '@/styles'
import { getToast } from '@/utils/getToast'
import { FC } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import { CenteredLayout, Link, Title } from '../components'
import { useAuthData } from '../hooks'

type LoginProps = {
  setIsRegistered: (val: boolean) => void
  isRegistered: boolean
}

const Login: FC<LoginProps> = ({ setIsRegistered, isRegistered }) => {
  const { email, password, setEmail, setPassword, resetData } = useAuthData()

  const { login, error } = useAuth()

  async function handleLogin() {
    if (email && password) {
      await login(email, password)
    } else {
      getToast('Please fill all fields')
    }

    resetData()
  }

  function handleNameChange(text: string) {
    setEmail(text)
  }

  function handlePasswordChange(text: string) {
    setPassword(text)
  }

  function handleLinkPress() {
    setIsRegistered(!isRegistered)
  }

  if (!!error) {
    getToast(error)
  }

  return (
    <View style={styleCetner}>
      <CenteredLayout>
        <View style={tw`w-10/12 `}>
          <Title title="Sign in" />

          <View>
            <Field
              value={email}
              placeholder="Enter your email"
              onChange={handleNameChange}
            />
            <Field
              value={password}
              isSecure={true}
              placeholder="Enter your password"
              onChange={handlePasswordChange}
            />
            <Button title="Log in" className="mt-5" onPress={handleLogin} />
            <Button
              title="Log in as Matvii"
              className="mt-10"
              onPress={async () => {
                await login('test@gmail.com', '123123')
              }}
            />
          </View>

          <Link title="Create an account!" onPress={handleLinkPress} />
        </View>
      </CenteredLayout>
    </View>
  )
}

export default Login
