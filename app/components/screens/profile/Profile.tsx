import {
  Button,
  Field,
  Heading,
  Loader,
  Padding,
  SuccessAlert,
} from '@/components/ui'

import { Layout } from '@/components/layouts'
import { useAuth, useProfile } from '@/hooks'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Pressable, Text } from 'react-native'
import tw from 'twrnc'
import { useUpdateProfile } from './hooks'

const Profile: FC = () => {
  const { navigate } = useNavigation()
  const { isLoading, name, setName, profile } = useProfile()
  const { logout } = useAuth()

  const { updateProfile, isUpdateLoading, isSuccess } = useUpdateProfile(
    name,
    profile.docId
  )

  function handleUpdateProfile() {
    updateProfile()
  }

  return (
    <Layout>
      <Padding>
        <Pressable
          onPress={() => navigate('Home')}
          style={tw`flex-row items-center `}
        >
          <Entypo
            name="chevron-small-left"
            size={25}
            style={tw`text-gray-700`}
          />
          <Text style={tw`text-md font-bold`}>Home</Text>
        </Pressable>
      </Padding>

      <Heading text="Profile" isCentered={true} />
      <Padding>
        {isLoading || isUpdateLoading ? (
          <Loader />
        ) : (
          <>
            <Field onChange={setName} value={name} placeholder="Enter name" />
            <Button
              onPress={handleUpdateProfile}
              title="Update profile"
              className="mt-3"
            />
            <Button
              onPress={logout}
              title="Log out"
              className="mt-10"
              colors={['bg-gray-200', '#D6D8DB']}
            />
          </>
        )}

        {isSuccess && <SuccessAlert text="Profile updated successfully" />}
      </Padding>
    </Layout>
  )
}

export default Profile
