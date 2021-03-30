
// Components

import Banner from '../components/Banner';
import TextBlock from '../components/Blocks/SimpleText';
import TextImg from '../components/Blocks/TextImg';

import HalfTextImg from '../components/Blocks/HalfTextImg';

import Grid from '../components/Grid';

import Gallery from '../components/Gallery';
import Gallery2 from '../components/Gallery/FourColumns'

import Features from '../components/Products/Features';


// Data import
import {lunchSetText, presentationText, happyHourText} from '../datas/text';

import {lunchSetImg, happyHourImg, arrayImg1, arrayImg2} from '../datas/img';

export default function Demo() {
  return (
    <div>
        <div className="banner">
          <Banner />
        </div>

        <div className="textImg">
          <TextImg text={lunchSetText()} img={lunchSetImg}/>
        </div>

        <div className="textImg">
          <TextImg text={happyHourText()} img={happyHourImg}/>
        </div>

        <div className="textBlock greyBg">
          <TextBlock text={presentationText()}/>
        </div>

        <div className="textBlock">
          <HalfTextImg image={happyHourImg}/>
        </div>
        

        <div className="grid">
          <Grid />
        </div>
        
        <div className="block flex">
          <div className="gallery two-column">
            <Gallery productsFeature={arrayImg1} />
            <Gallery productsFeature={arrayImg2} />
          </div>
          <div className="gallery two-column">
            <Gallery productsFeature={arrayImg2} />
            <Gallery productsFeature={arrayImg1} />
          </div>
        </div>

        <Gallery2 />
    </div>
  )
}