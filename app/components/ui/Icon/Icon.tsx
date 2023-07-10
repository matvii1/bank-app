import { IFooterItem } from '@/components/layouts/Footer/IFooterItem'
import { AntDesign } from '@expo/vector-icons'
import React, { FC } from 'react'
import { View } from 'react-native'

interface IconProps extends Pick<IFooterItem, 'iconName'> {
  size?: number
  color?: string
}

const Icon: FC<IconProps> = ({ iconName, size = 20, color = '#fff' }) => {
  return (
    <View>
      <AntDesign size={size} name={iconName} color={color} />
    </View>
  )
}

export default Icon
