import '../styles/globals.css'
import * as React from 'react'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  },[])

  return (
    <ChakraProvider>
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp