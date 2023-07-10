import { ICard } from '@/components/screens/home/types/ICard'
import { getCurrencyIcon } from '@/utils/getCurrencyIcon'
import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'

const CardIcon = ({ card }: { card: ICard }) => {
  const currencyIcon = getCurrencyIcon(card.currency)
  return (
    <View
      style={tw`h-11 w-11 bg-blue-500 rounded-full justify-center items-center`}
    >
      <View
        style={{
          ...tw`h-7 w-7 bg-blue-900 rounded-full justify-center items-center`,
          backgroundColor: '#EDF7FF',
        }}
      >
        <Text style={tw`text-gray-900 text-center text-lg`}>
          {currencyIcon}
        </Text>
      </View>
    </View>
  )
}

export default CardIcon
