import React, {useEffect, useContext } from 'react';
import AppContext from "../context/AppContext";
import Head from "next/head";
import dynamic from 'next/dynamic'

// Components
const TextImg = dynamic(() => import('../components/Blocks/TextImg'))
const Features = dynamic(() => import('../components/Products/Features'));
// import TextImg from '../components/Blocks/TextImg';
// import Features from '../components/Products/Features'

// Fake datas
import {lunchSetText, soba, appetizers, drinks} from '../datas/text';
import {lunchSetImg} from '../datas/img';

const restaurantImg = "img/restaurant.webp";

export default function LeRestaurant() {

  const { setMobileNav, setCurrentPage } = useContext(AppContext); 

  useEffect(()=> {
    setMobileNav(false);
    setCurrentPage("menu")
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
      <div className="block flex justify-content-center text-align-center padding-1">
        <h2>- Soba -</h2>
        <Features products={soba}/>
        <h2>- Entrées -</h2>
        <Features products={appetizers}/>
        <h2>- Saké -</h2>
        <Features products={drinks}/>
      </div>
    </div>
  )
}
