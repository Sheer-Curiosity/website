import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Provider>
  )
}

export default MyApp