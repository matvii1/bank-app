import { FC } from 'react'
import { Pressable, Text } from 'react-native'
import tw from 'twrnc'

type LinkProps = {
  title: 'Create an account!' | 'Already have an account?'
  onPress: () => void
}

const Link: FC<LinkProps> = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={tw`text-right mt-2 opacity-60 text-gray-800 text-sm`}>
        {title}
      </Text>
    </Pressable>
  )
}

export default Link
