import {useEffect, useContext} from 'react';
import AppContext from "../context/AppContext";

import HalfTextImg from '../components/Blocks/HalfTextImg';
import Gallery2 from '../components/Gallery/FourColumns'

// Fake datas
import {lunchSetImg, happyHourImg, arrayImg, arrayImg2} from '../datas/img';
import {lunchSetText, presentationText, happyHourText, simpleLorem} from '../datas/text';

const restaurantImg = "img/restaurant.webp";

export default function LeRestaurant() {

  const { setMobileNav } = useContext(AppContext); 

  useEffect(()=> {
    setMobileNav(false);
  }, [])

  return (
      <>
        <HalfTextImg image={restaurantImg} title="Le restaurant" button={false}/>
        <Gallery2 />
      </>
  )
}
