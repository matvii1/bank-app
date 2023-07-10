import { Padding } from '@/components/ui'
import { HEADER_SHADOW } from '@/styles'
import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from 'twrnc'

const Header = () => {
  return (
    <View
      style={{
        ...HEADER_SHADOW,
        ...tw`bg-white pt-4 rounded-md`,
      }}
    >
      <Padding style={tw`mb-2 py-1 -mt-2 flex-row items-center gap-2`}>
        <Image
          source={require('../../../../../assets/mono.jpg')}
          style={tw`h-10 w-10 rounded-full`}
        />
        <View>
          <Text style={tw`font-semibold text-lg`}>Support</Text>
          <Text style={tw`text-xs text-slate-600`}>We are here 24/7</Text>
        </View>
      </Padding>
    </View>
  )
}

export default Header
