import { initializeApp } from "firebase/app"

import firebaseConfig from "./config"

let app = null
class Firebase {
  constructor() {
    app = initializeApp({firebaseConfig})
  }
}

const firebase = new Firebase()

export default firebase