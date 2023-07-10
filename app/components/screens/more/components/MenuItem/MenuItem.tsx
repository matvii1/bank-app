import { BOX_SHADOW } from '@/styles'
import { MaterialIcons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'
import { IMoreItem } from '../../types/IMoreItem'

const MenuItem: FC<{ item: IMoreItem }> = ({ item }) => {
  const { title, description, icon } = item
  return (
    <View
      style={{
        ...tw`bg-white rounded-xl py-5 px-4 mt-5 flex-row justify-between items-center`,
        ...BOX_SHADOW,
      }}
    >
      <View style={tw`max-w-[80%]`}>
        <Text style={tw`text-lg font-bold`}>{title}</Text>
        <Text style={tw`mt-2`}>{description}</Text>
      </View>

      <MaterialIcons name={icon} size={35} style={tw`text-slate-700`} />
    </View>
  )
}

export default MenuItem
