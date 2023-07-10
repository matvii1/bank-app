import { useAuth } from '@/hooks'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'
import { IMessage } from '../types'

type MessageProps = {
  message: IMessage
}

const Message: FC<MessageProps> = ({ message }) => {
  const { user } = useAuth()
  const { userId, timestamp, text } = message

  const isMessageByUser = userId === user?.uid
  const stylesContainer = isMessageByUser
    ? tw`self-end bg-blue-500`
    : tw`self-start bg-gray-200`

  const stylesText = isMessageByUser ? tw`text-white` : tw`text-gray-800`
  const stylesTimestamp = isMessageByUser ? tw`text-white` : tw`text-gray-700`

  return (
    <View
      style={{
        ...tw`flex-row items-end rounded-lg my-2 py-2 px-2 mx-1`,
        ...stylesContainer,
      }}
    >
      <Text style={stylesText}>{text}</Text>
      <Text
        style={{
          ...stylesTimestamp,
          ...tw`opacity-70 ml-2`,
          ...{ fontSize: 10 },
        }}
      >
        {timestamp as string}
      </Text>
    </View>
  )
}

export default Message
