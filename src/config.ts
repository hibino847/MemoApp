import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_o6T5SmhyxHedfb-Een6vEPx1gnQ8fHM',
  authDomain: 'memoapp-236a9.firebaseapp.com',
  projectId: 'memoapp-236a9',
  storageBucket: 'memoapp-236a9.firebasestorage.app',
  messagingSenderId: '136438830218',
  appId: '1:136438830218:web:650c58c5a9697d31db4973'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }

