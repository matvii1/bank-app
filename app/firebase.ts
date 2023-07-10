// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDrPahHhylScl8q3VZ9JFnpICfJbgpyu4A',
  authDomain: 'bank-app-73f47.firebaseapp.com',
  projectId: 'bank-app-73f47',
  storageBucket: 'bank-app-73f47.appspot.com',
  messagingSenderId: '282431426055',
  appId: '1:282431426055:web:39bda90249519d61dfe4a2',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()

export function register(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export async function login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
  return signOut(auth)
}

export const db = getFirestore()
