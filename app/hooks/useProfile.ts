import { db } from '@/firebase'

import { collection, limit, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useMemo, useState } from 'react'
import { useAuth } from './useAuth'

interface IProfile {
  _id: string
  displayName: string
  docId: string
}

export function useProfile() {
  const { user } = useAuth()

  const [isLoading, setIsLoading] = useState(true)
  const [profile, setProfile] = useState<IProfile>({} as IProfile)
  const [name, setName] = useState('')
  const usersCollectionRef = collection(db, 'users')

  useEffect(() => {
    const unsubscibe = onSnapshot(
      query(usersCollectionRef, where('_id', '==', user?.uid), limit(1)),
      (snapshot) => {
        const profile = snapshot.docs.map((doc) => ({
          ...(doc.data() as Omit<IProfile, 'docId'>),
          docId: doc.id,
        }))[0]

        setProfile(profile)
        setName(profile.displayName)
        setIsLoading(false)
      }
    )
    
    return () => unsubscibe()
  }, [])

  const value = useMemo(
    () => ({
      profile,
      isLoading,
      name,
      setName,
    }),
    [profile, isLoading, name]
  )

  return value
}
