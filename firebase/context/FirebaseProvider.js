import { createContext } from 'react'
import firebase from '../firebase'

const FirebaseContext = createContext()

const FirebaseProvider = ({children}) => {

  console.log(firebase)

  return (
    <FirebaseContext.Provider 
      value={{
        firebase
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

export {
  FirebaseProvider
}

export default FirebaseContext