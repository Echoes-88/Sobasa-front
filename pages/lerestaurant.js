import {useEffect, useContext} from 'react';
import AppContext from "../context/AppContext";
import Head from "next/head";

import HalfTextImg from '../components/Blocks/HalfTextImg';
import Gallery2 from '../components/Gallery/FourColumns'

const restaurantImg = "img/restaurant.webp";

export default function LeRestaurant() {

  const { setMobileNav } = useContext(AppContext); 

  useEffect(()=> {
    setMobileNav(false);
  }, [])

  return (
      <>
        <Head>
          <title>Le Sobasa - Le restaurant</title>
          <meta name="description" content="Découvrez notre restaurant en photos. Le Sobasa proprose un cadre architectural moderne et chaleureux afin d'apprécier au mieux votre repas." />
        </Head>
        <HalfTextImg image={restaurantImg} title="Le restaurant" button={false}/>
        <Gallery2 />
      </>
  )
}
