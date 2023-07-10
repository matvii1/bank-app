import { db } from '@/firebase'
import { useAuth } from '@/hooks'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { Alert, Pressable, TextInput, View } from 'react-native'
import tw from 'twrnc'

const SupportField = () => {
  const [message, setMessage] = useState('')
  const { user } = useAuth()

  async function sendMessage() {
    try {
      await addDoc(collection(db, 'messages'), {
        text: message,
        timestamp: serverTimestamp(),
        userId: user?.uid,
      })
    } catch (error: any) {
      Alert.alert(error.message)
    } finally {
      setMessage('')
    }
  }

  return (
    <View style={tw`flex-row items-center mt-5 gap-4`}>
      <TextInput
        placeholder="Type a message"
        value={message}
        onChangeText={setMessage}
        autoCapitalize="none"
        showSoftInputOnFocus={false}
        style={tw`h-10 bg-gray-100 flex-1 rounded-2xl px-4`}
      />
      <Pressable onPress={sendMessage}>
        <MaterialCommunityIcons
          name="send-circle-outline"
          size={30}
          style={tw`text-blue-900`}
        />
      </Pressable>
    </View>
  )
}

export default SupportField
