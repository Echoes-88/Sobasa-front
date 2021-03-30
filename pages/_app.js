import {useState} from 'react';

import Layout from '../components/layout'
import AppContext from "../context/AppContext";


import '../styles/reset.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [mobileNav, setMobileNav] = useState(false);
  
  return (
    <AppContext.Provider value={{ mobileNav, setMobileNav }}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
