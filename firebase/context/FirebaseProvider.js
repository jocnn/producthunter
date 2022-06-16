import { createContext } from 'react'
import firebase from '../firebase'

const FirebaseContext = createContext()

const FirebaseProvider = ({children}) => {

  const handleSignUp = (fields_SignUp) => {
    console.log(fields_SignUp)
  }

  return (
    <FirebaseContext.Provider 
      value={{
        firebase,
        handleSignUp,
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