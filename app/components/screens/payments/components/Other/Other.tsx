import { Padding } from '@/components/ui'
import { SubHeading } from '@/components/ui/SubHeading'
import { otherItems } from '@/mocks/otherData'
import React from 'react'
import { ScrollView, View } from 'react-native'
import tw from 'twrnc'
import { OtherItem } from '../OtherItem'

const Other = () => {
  return (
    <View>
      <Padding>
        <SubHeading text="Important transfers" />
      </Padding>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`flex-row gap-3 py-5 px-5`}
      >
        {otherItems.map((item) => (
          <OtherItem key={item.title} item={item} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Other
