import { Loader } from '@/components/ui'
import { BOX_SHADOW } from '@/styles'
import React from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import { useCurrencies } from '../../hooks/useCurrencies'
import { CurrencyItem } from '../CurrencyItem'
import { ErrorMessage } from '../ErrorMessage'

const Currencies = () => {
  const { currencies, isLoading, isError, isSuccess } = useCurrencies()
  return (
    <View
      style={{
        ...tw`bg-white rounded-xl py-5 px-4 mt-6 flex-row items-center justify-around`,
        ...BOX_SHADOW,
      }}
    >
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      {isSuccess &&
        currencies.map((currency) => (
          <CurrencyItem
            key={currency.code}
            code={currency.code}
            value={currency.value}
          />
        ))}
    </View>
  )
}

export default Currencies
