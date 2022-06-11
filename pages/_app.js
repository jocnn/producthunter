import '../styles/globals.css'
import { FirebaseProvider } from '../firebase/context/FirebaseProvider'

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <Component {...pageProps} />
    </FirebaseProvider>
  )
}

export default MyApp
