import { db } from '@/firebase'
import { useAuth, useProfile } from '@/hooks'
import { collection, doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { Alert } from 'react-native'

export function useUpdateProfile(updatedName: string, docId: string) {
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	async function updateProfile() {
		try {
			setIsLoading(true)
			const userDocRef = doc(db, 'users', docId)

			await updateDoc(userDocRef, {
				displayName: updatedName,
			})

			setIsSuccess(true)

			setTimeout(() => {
				setIsSuccess(false)
			}, 3000);			
		} catch (error: any) {
			Alert.alert('Error in updating profile', error.message)
		} finally {
			setIsLoading(false)
		}
	}
	

	return {
		isUpdateLoading: isLoading,
		isSuccess,
		updateProfile,
	}
}