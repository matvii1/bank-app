import { db } from '@/firebase'
import dayjs from 'dayjs'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { IMessage } from '../types'

export function useMessages() {
  const [messages, setMessages] = useState<IMessage[]>([])
  const [isLoaindg, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const messagesCollection = collection(db, 'messages')

    return onSnapshot(
      query(messagesCollection, orderBy('timestamp', 'asc')),
      (snapshot) => {
        const messasges = snapshot.docs.map((doc) =>
          doc.data()?.timestamp
            ? ({
                _id: doc.id,
                ...doc.data(),
                timestamp: dayjs
                  .unix(doc.data().timestamp.seconds)
                  .format('HH:mm'),
              } as IMessage)
            : ({
                _id: doc.id,
                ...doc.data(),
              } as IMessage)
        )

        setMessages(messasges)
        setIsLoading(false)
      }
    )
  }, [])

  return {
    messages,
    isLoaindg,
  }
}
