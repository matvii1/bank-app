import { db } from '@/firebase'
import { useAuth } from '@/hooks'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { ICard } from '../types/ICard'

export function useCards() {
  const { user } = useAuth()
  const [cards, setCards] = useState<ICard[]>([])
  const [loading, setLoading] = useState(true)

  const accountsCollectionRef = collection(db, 'cards')

  useEffect(() => {    
    const unsubscribe = onSnapshot(
      query(accountsCollectionRef, where('userId', '==', user?.uid)),
      (snapshot) => {
        const data = snapshot.docs.map(
          (doc) =>
            ({
              _id: doc.id,
              ...doc.data(),
            } as ICard)
        )

        setCards(data)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [user?.uid])

  return {
    cards,
    isLoading: loading,
  }
}
