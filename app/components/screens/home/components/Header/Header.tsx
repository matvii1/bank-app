import { Avatar, Loader, Padding } from '@/components/ui'
import { useProfile } from '@/hooks'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'

const Header: FC = () => {
  const { name, isLoading } = useProfile()

  const { navigate } = useNavigation()

  function handleNavigate() {
    navigate('Profile')
  }

  return isLoading ? (
    <Loader />
  ) : (
    <Padding>
      <View style={tw`flex-row items-center gap-3`}>
        <Avatar preview={name.at(0) || 'U'} size="small" />
        <TouchableOpacity
          onPress={handleNavigate}
          style={tw`flex-row items-center `}
        >
          <Text style={tw`text-gray-700 text-2xl font-bold`}>{name}</Text>
          <Entypo
            name="chevron-small-right"
            size={35}
            style={tw`text-gray-700`}
          />
        </TouchableOpacity>
      </View>
    </Padding>
  )
}

export default Header
