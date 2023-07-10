import { db } from '@/firebase'
import { useAuth } from '@/hooks'
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { IContact } from '../types'

export const useContacts = () => {
  const [contacts, setContacts] = useState<IContact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'cards'), where('userId', '!=', user?.uid)),
      async (snapshot) => {
        const contactsFire = await Promise.all(
          snapshot.docs.map(async (d) => {
            const data = d.data() as IContact & { userId: string }
            let displayName = ''

            const q = query(
              collection(db, 'users'),
              where('_id', '==', data.userId)
            )

            const querySnapshot = await getDocs(q)

            querySnapshot.forEach((doc) => {
              displayName = doc.data().displayName
            })

            return {
              ...data,
              displayName,
              _id: d.id,
            }
          })
        )

        const filteredContacts = contactsFire
          .filter((contact, index, thisArr) => {
            return (
              thisArr.findIndex((c) => c.userId === contact.userId) === index
            )
          })
          .filter((contact) => contact.displayName)

        setContacts(filteredContacts)
        setIsLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  return {
    contacts,
    isLoading,
  }
}
