import { Loader, Padding } from '@/components/ui'
import React, { FC } from 'react'
import { Text } from 'react-native'

import tw from 'twrnc'
import { useCards } from '../../hooks'
import { CardsList } from '../CardsList'

const Cards: FC = () => {
  const { cards, isLoading } = useCards()

  return (
    <Padding style={tw`mt-10`}>
      {isLoading ? (
        <Loader />
      ) : cards.length > 0 ? (
        <CardsList cards={cards} />
      ) : (
        <Text style={tw`mt-10`}>You have no cards yet</Text>
      )}
    </Padding>
  )
}

export default Cards
