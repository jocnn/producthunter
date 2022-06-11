import { initializeApp } from "firebase/app";

import firebaseConfig from "./config"

class Firebase {
  constructor() {
    if (!initializeApp.length) {
      initializeApp({firebaseConfig});
    }
  }
}

const firebase = new Firebase()

export default firebase