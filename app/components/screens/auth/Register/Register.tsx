import { Button, Field } from '@/components/ui'

import { useAuth } from '@/hooks'
import { styleCetner } from '@/styles'
import { getToast } from '@/utils/getToast'
import { FC } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import { CenteredLayout, Link, Title } from '../components'
import { useAuthData } from '../hooks'

type RegisterProps = {
  setIsRegistered: (val: boolean) => void
  isRegistered: boolean
}

const Register: FC<RegisterProps> = ({ setIsRegistered, isRegistered }) => {
  const { email, password, setEmail, setPassword, resetData } = useAuthData()
  const { register, error } = useAuth()

  async function handleRegister() {
    if (email && password) {
      await register(email, password)
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
          <Title title="Sign up" />

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
            <Button
              title="Create account"
              className="mt-5"
              onPress={handleRegister}
            />
          </View>

          <Link title="Already have an account?" onPress={handleLinkPress} />
        </View>
      </CenteredLayout>
    </View>
  )
}

export default Register
