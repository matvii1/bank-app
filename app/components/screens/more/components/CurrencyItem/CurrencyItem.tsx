import React, { FC } from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'
import { ICurrency } from '../../types'

type CurrencyItemProps = ICurrency & {}
const CurrencyItem: FC<CurrencyItemProps> = ({ code, value }) => {
  const formattedCurrency = (1 / value).toFixed(2)

  return (
    <View style={tw`flex-row items-center gap-1`}>
      <Text style={tw`font-light text-slate-500`}>{code}</Text>
      <Text style={tw`font-semibold text-md`}>{formattedCurrency}</Text>
    </View>
  )
}

export default CurrencyItem
