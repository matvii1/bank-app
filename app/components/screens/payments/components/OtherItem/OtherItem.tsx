import Icon from '@/components/ui/Icon/Icon'
import { BOX_SHADOW } from '@/styles'
import React, { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import tw from 'twrnc'
import { IOtherItem } from '../Other/types'

type OtherItemProps = {
  item: IOtherItem
}

const OtherItem: FC<OtherItemProps> = ({ item }) => {
  return (
    <Pressable
      style={{
        ...tw`w-25 h-25 rounded-md bg-white items-center justify-center`,
        ...BOX_SHADOW,
      }}
    >
      <View
        style={tw`h-12 w-12 rounded-full bg-blue-500 items-center justify-center`}
      >
        <Icon size={26} iconName={item.iconName} />
      </View>
      <Text style={tw`mt-3 text-sm`}>{item.title}</Text>
    </Pressable>
  )
}

export default OtherItem
