import { useCards } from '@/components/screens/home/hooks'
import { Avatar } from '@/components/ui'
import { transfer } from '@/utils/transfer'
import React, { FC } from 'react'
import { Pressable, Text } from 'react-native'
import tw from 'twrnc'
import { IContact } from '../../types'

type ContactItemProps = {
  contact: IContact
}

const ContactItem: FC<ContactItemProps> = ({ contact }) => {
  const preview = contact.displayName[0].toUpperCase()
  const { cards } = useCards()

  function handleTransfer(cardNumber: string) {
    transfer(cards[0], cardNumber)
  }

  return (
    <Pressable
      style={tw`ml-4 items-center`}
      onPress={() => handleTransfer(contact.cardNumber)}
    >
      <Avatar size="large" preview={preview} />
      <Text>{contact.displayName}</Text>
    </Pressable>
  )
}

export default ContactItem
