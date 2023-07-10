import { ICard } from '@/components/screens/home/types/ICard'
import { db } from '@/firebase'
import { collection, doc, getDoc, getDocs, limit, query, updateDoc, where } from 'firebase/firestore'
import { Alert } from 'react-native'

export async function transfer(fromCard: ICard, toCard: string) {
  Alert.prompt('Transfer', 'Enter amount to transfer', async (sum) => {
    try {
			if (fromCard.balance < Number(sum)) {
				Alert.alert('Error', 'Not enough funds')

				return
			}
			
			let toCardId: string = ''
			let toCardBalance: number = 0

      const querySnapshot = await getDocs(
        query(collection(db, 'cards'), where('cardNumber', '==', toCard), limit(1))
      )

			querySnapshot.docs.forEach(doc => {
				toCardId = doc.id
			})

			const gocRefToCard = doc(db, 'cards', toCardId)
			const docRefFromCard = doc(db, 'cards', fromCard._id)
			const docSnapToCard = await getDoc(gocRefToCard)

			if (docSnapToCard.exists()) {
				toCardBalance = docSnapToCard.data().balance
			} else {
				Alert.alert('Error', 'Card not found')

				return
			}

			console.log('toCardBalance', toCardId);

			await updateDoc(gocRefToCard, {
				balance: toCardBalance + Number(sum)
			})

			await updateDoc(docRefFromCard, {
				balance: fromCard.balance - Number(sum)
			})
    } catch (error: any) {
      Alert.alert('Error', error.message)
    }
  })
}
