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

    function hamburger(){
      document.getElementById('line1').classList.toggle('line_1');
      document.getElementById('line2').classList.toggle('line_2');
      document.getElementById('line3').classList.toggle('line_3');
      document.getElementById('nav').classList.toggle('in');
      };
      document.getElementById('hamburger').addEventListener('click',function(){
        hamburger();
      });
      document.getElementById('nav').addEventListener('click',function(){
        hamburger();
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