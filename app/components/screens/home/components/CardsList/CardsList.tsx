import React, { FC } from 'react'
import { FlatList } from 'react-native'
import { ICard } from '../../types/ICard'
import { CardItem } from '../CardItem'
import AnimatedCard from '../CardItem/components/AnimatedCard'

type CardsListProps = {
  cards: ICard[]
}

const CardsList: FC<CardsListProps> = ({ cards }) => {
  return (
    <FlatList
      data={cards}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <AnimatedCard card={item} />}
    />
  )
}

export default CardsList
