import {useContext} from 'react';
import Head from "next/head";
import dynamic from 'next/dynamic'

// Components
// const DesktopNavbar = dynamic(() => import('./Navbar/Desktop'));
// const MobileNavbar = dynamic(() => import('./Navbar/Mobile'));
// const AppContext = dynamic(() => import('../context/AppContext'));
// const Footer = dynamic(() => import('./Footer'));
import DesktopNavbar from './Navbar/Desktop';
import MobileNavbar from './Navbar/Mobile'
import AppContext from "../context/AppContext";
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
      </Head>

      <header>
        <div>
          <DesktopNavbar setMobMenu={setMobileNav} mobMenu={mobileNav}/>

            <MobileNavbar setMobMenu={setMobileNav} mobMenu={mobileNav}/>

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