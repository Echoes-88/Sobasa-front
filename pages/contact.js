import {useEffect, useContext} from 'react';
import AppContext from "../context/AppContext";

import SimpleText from '../components/Blocks/SimpleText';
import {simpleLorem, adress} from '../datas/text';
export default function Contact() {

  const { setMobileNav } = useContext(AppContext); 

  useEffect(()=> {
    setMobileNav(false);
  }, [])
  
  return (
    
   <>
        <div className="greyBg-1 text-align-center">
      <SimpleText text={adress()} title="Adresse"/>
    </div>
    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6480.9720611431385!2d139.6957016444572!3d35.68965550781751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd10d9c2a93%3A0x47b8001b506ac354!2z5Lmd5bee54ax5Lit5bGLIOaWsOWuv-ilv-WPo-mnheWJjUxJVkU!5e0!3m2!1sfr!2sfr!4v1617017155141!5m2!1sfr!2sfr"></iframe>

  </>
   )
}
