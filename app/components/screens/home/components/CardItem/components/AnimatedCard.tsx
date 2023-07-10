import React, { FC } from 'react'
import { Animated } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { ICard } from '../../../types/ICard'
import CardItem from '../CardItem'

type AnimatedCardProps = {
  card: ICard
}

const AnimatedCard: FC<AnimatedCardProps> = ({ card }) => {
	const gestureHandler = {}

  return (
    <Animated.View>
      <CardItem card={card} />
    </Animated.View>
  )
}

export default AnimatedCard
