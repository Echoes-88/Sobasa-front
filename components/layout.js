import {useContext} from 'react';

import Head from "next/head";
import { Html } from 'next/document'

import AppContext from "../context/AppContext";

// Components
import DesktopNavbar from './Navbar/Desktop';
import MobileNavbar from './Navbar/Mobile'

import Footer from './Footer';

export default function Layout(props) {

  const { mobileNav, setMobileNav } = useContext(AppContext); 

  return (

    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="Le restaurant Sobasa propose un large choix de plats autour des nouilles Soba. Nous proposons également d'autres spécialités japonaises" />
        <meta name="twitter:title" content="Post headline" />
        <meta name="twitter:image" content="https://zealous-babbage-bfd2b3.netlify.app/img/soba/soba4.jpg" />
        <meta name="twitter:site" content="@sobasaRestaurant" />
        <script src="https://js.stripe.com/v3" />
      </Head>

      <header>
        <div>
          <DesktopNavbar setMobMenu={setMobileNav} mobMenu={mobileNav}/>
          {mobileNav && (
            <MobileNavbar setMobMenu={setMobileNav} mobMenu={mobileNav}/>
          )}
        </div>
      </header>

      <main>
        <div className="container">{props.children}</div>
      </main>

      <footer>
        <Footer/>
      </footer>

    </>
  )
}