import {useEffect, useContext} from 'react';
import AppContext from "../context/AppContext";
import Head from "next/head";
import dynamic from 'next/dynamic'

// Components
const Gallery = dynamic(() => import('../components/Gallery'));
const HalfTextImg = dynamic(() => import('../components/Blocks/HalfTextImg'));
const SimpleText = dynamic(() => import('../components/Blocks/SimpleText'));
// import Gallery from '../components/Gallery';
// import HalfTextImg from '../components/Blocks/HalfTextImg';
// import SimpleText from '../components/Blocks/SimpleText';

// Fake datas
import {soba} from '../datas/img';
import {simpleLorem, featured1, featured2, featured3, featured4} from '../datas/text';

export default function Home() {

  const { setMobileNav } = useContext(AppContext); 

  useEffect(()=> {
    setMobileNav(false);
  }, [])

  return (
      <>
          <Head>
            <title>Le Sobasa - Accueil</title>
            <meta name="description" content="Le restaurant Sobasa propose un large choix de plats autour des nouilles Soba. Nous proposons également d'autres spécialités japonaises" />
          </Head>
        <div className="greyBg-1">
          <SimpleText text={simpleLorem()} title="Le Sobasa"/>
        </div>

        <HalfTextImg image={soba} title="Le soba, notre spécialité" button={true}/>

        <div className="flex justify-content-center vert-padding greyBg-1 wrap">
          <div className="gallery width-80">
            <Gallery productsFeature={featured3} />
            <Gallery productsFeature={featured1} />
          </div>
          <div className="gallery width-80">
            <Gallery productsFeature={featured2} />
            <Gallery productsFeature={featured4} />
          </div>
        </div>

      </>
  )
}
