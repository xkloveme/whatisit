import {
  initializeApp
} from 'firebase/app'
import 'firebase/firestore'
import {
  firebaseConfig
} from './firebase.config'

const app = initializeApp(firebaseConfig)
export const db = app.firestore()
export const todosCollection = db.collection('todos') // 导出你拥有的 collection
