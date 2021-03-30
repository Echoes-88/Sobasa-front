import {useEffect, useContext} from 'react';
import AppContext from "../context/AppContext";
import Head from "next/head";

import TextImg from '../components/Blocks/TextImg';
import Features from '../components/Products/Features'

// Fake datas
import {lunchSetText, soba, appetizers, drinks} from '../datas/text';
import {lunchSetImg} from '../datas/img';

const restaurantImg = "img/restaurant.webp";

export default function LeRestaurant() {

  const { setMobileNav } = useContext(AppContext); 

  useEffect(()=> {
    setMobileNav(false);
  }, [])
  
  return (
    <div className="flex justify-content-center flex-column align-items-center">
      <Head>
        <title>Le Sobasa - Menu</title>
        <meta name="description" content="Le menu du Sobasa est constitué d'une quinzaine de plats avec principalement des Soba et des spécialitées japonaises en entrée." />
      </Head>
      <div className="fullVw greyBg-1">
        <TextImg text={lunchSetText()} img={lunchSetImg}/>
      </div>
      <div className="block flex justify-content-center text-align-center width-80">
        <h1>- Soba -</h1>
        <Features products={soba}/>
        <h1>- Entrées -</h1>
        <Features products={appetizers}/>
        <h1>- Saké -</h1>
        <Features products={drinks}/>
      </div>
    </div>
  )
}
