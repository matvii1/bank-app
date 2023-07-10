import { Button, Padding } from '@/components/ui'
import { db } from '@/firebase'
import { useAuth } from '@/hooks'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { Alert } from 'react-native'
import tw from 'twrnc'
import { asyncAlert } from '../asyncAlert'
import { getRandomCardNumber } from '@/utils/getRandomCardNumber'

const NewCard = () => {
  const { user } = useAuth()

  async function newCardHandler() {
    try {
      const currency = await asyncAlert({
        title: 'Currency',
        message: 'Select card currency:',
        buttons: [
          {
            text: 'USD',
            resolveValue: 'USD',
          },
          {
            text: 'UAH',
            resolveValue: 'UAH',
          },
        ],
      })

      const cardType = await asyncAlert({
        title: 'Type',
        message: 'Select card type:',
        buttons: [
          {
            text: 'Kids',
            resolveValue: 'Kids',
          },
          {
            text: 'Clasic',
            resolveValue: 'Clasic',
          },
        ],
      })

      await addDoc(collection(db, 'cards'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        currency,
        balance: 0,
        cardNumber: getRandomCardNumber(),
        type: cardType,
      })
    } catch (error: any) {
      Alert.alert('Error in creating new card', error)
    }
  }

  return (
    <Padding style={tw`mt-5`}>
      <Button onPress={newCardHandler} title="Add new card" />
    </Padding>
  )
}

export default NewCard
