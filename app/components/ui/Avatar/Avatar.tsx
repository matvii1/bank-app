import { FC } from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'

interface IAvatarSize {
  small: string
  large: string
}

type AvatarProps = {
  preview: string
  size?: 'small' | 'large'
}

const Avatar: FC<AvatarProps> = ({ preview, size = 'small' }) => {
  const AVATAR_SIZE: IAvatarSize = {
    small: 'h-9 w-9',
    large: 'h-12 w-12',
  }

  return (
    <View
      style={tw`${AVATAR_SIZE[size]} bg-slate-400 rounded-full items-center justify-center`}
    >
      <Text style={tw`text-white text-xl`}>{preview}</Text>
    </View>
  )
}

export default Avatar
