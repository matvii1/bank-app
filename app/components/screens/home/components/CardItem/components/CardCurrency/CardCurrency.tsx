import { ICard } from '@/components/screens/home/types/ICard'
import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'

const CardCurrency = ({ card }: { card: ICard }) => {
  const { balance, currency } = card

  const formattedBalance = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currency,
  }).format(balance)

  return (
    <View style={tw`flex-row items-center gap-2`}>
      <Text style={tw`font-bold text-sm`}>{currency}</Text>
      <Text>{formattedBalance}</Text>
    </View>
  )
}

export default CardCurrency
