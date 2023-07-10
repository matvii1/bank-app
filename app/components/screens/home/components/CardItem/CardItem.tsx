import React, { FC } from 'react'
import { Image, ImageBackground, ImageBackgroundBase, Text, View } from 'react-native'
import tw from 'twrnc'
import { ICard } from '../../types/ICard'
import { CardBody, CardIcon, CardType, Currency } from './components'

type CardItemProps = {
  card: ICard
}

const CardItem: FC<CardItemProps> = ({ card }) => {
  return (
    <CardBody>
      <View style={tw`flex-row items-center gap-4`}>
        <CardIcon card={card} />
        <View>
          <CardType card={card} />
          <Currency card={card} />
        </View>
      </View>
      <Image
        source={require('../../../../../../assets/monobank.png')}
        style={tw`w-10 h-7`}
        resizeMode='contain'
      />
    </CardBody>
  )
}

export default CardItem
