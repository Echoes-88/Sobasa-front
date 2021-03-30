import {useContext} from 'react';

import Head from "next/head";
import AppContext from "../context/AppContext";

// Components
import DesktopNavbar from './Navbar/Desktop';
import MobileNavbar from './Navbar/Mobile'

import Footer from './Footer';

export default function Layout(props) {
  // const title = "Welcome to the restaurant L'émotion !"
  
  // const [mobMenu, setMobMenu] = useState(false);
  const { mobileNav, setMobileNav } = useContext(AppContext); 

  return (
    <div>

      <Head>
        {/* <title>{title}</title> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://js.stripe.com/v3" />
      </Head>

      <header>

        <div>
          <DesktopNavbar setMobMenu={setMobileNav} mobMenu={mobileNav}/>
          {mobileNav && (
            <MobileNavbar setMobMenu={setMobileNav} mobMenu={mobileNav}/>
          )}

        </div>

        <div className="container">{props.children}</div>

        <footer>
          <Footer />
        </footer>
      </header>
    </div>
  )
}