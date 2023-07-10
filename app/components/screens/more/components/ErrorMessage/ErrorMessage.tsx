import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'

const ErrorMessage = () => {
  return (
    <View>
      <Text style={tw`text-sm text-red-500`}>Could not load currencies</Text>
    </View>
  )
}

export default ErrorMessage
