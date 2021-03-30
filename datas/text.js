export const presentationText = () => {
  return(
      <>
      <p className="backline strong">Just a word of thanks:</p>
      <p className="backline strong">Thank you for supporting our small business during this unprecedented time.
      We appreciate all your supports so that we can keep more of our hard earned profits.</p>
      <p className="backline strong">It's thanks to customers like you, we can keep our door open.
      Thank you for supporting us since 1996!</p>

      <p className="linebreak">As we all stand together during these uncertain times, we remain steadfast at Sobaya to make sure that you — our valued guests — can enjoy Japan without airfare.</p>

      <p className="linebreak ">The health and well-being of our guests, staff, family, and friends are our number one priority. We are confident in bringing you a safe dining experience with our Outdoor Dining & 25% Indoor Capacity.</p>
      </>
  )
}

export const lunchSetText = () => {
  return(
    <>
      <h1>Offre spéciale</h1>
      <p className="strong lineHeight-l">VENDREDI, SAMEDI & DIMANCHE MIDI</p>
      <p className="backline lineHeight-l">L'occasion idéale pour découvrir un vaste panel de notre cuisine authentique.</p>
      <p className="backline lineHeight-l">Composition du set : Gomadare soba, Tofu frais au gingembre, Epinards marinés & assortiment de légumes croquants saumurés.</p>
    </>
  )
}

export const happyHourText = () => {
  return(
    <>
      <p className="strong">10% OFF SAKE BOTTLES</p>
      <h2>Happy Hour Special</h2>
      <p className="backline">$2 Discount on All Drinks (Beer Bottles and Sake) with Homemade "Otoshi"</p>
      <p className="backline strong">Wednesday to Friday 4:00 PM - 5:00 PM</p>
    </>
  )
}

export const simpleLorem = () => {
  return(
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sapien imperdiet, lacinia lorem ut, faucibus dolor. Cras leo arcu, convallis vitae feugiat et, facilisis eget augue. Integer ut metus maximus, interdum felis convallis, porttitor nisi. In cursus elit dolor, id rutrum mi blandit id. Integer accumsan et nibh ut molestie. Quisque laoreet justo ut justo facilisis scelerisque. Maecenas eget nunc interdum lorem porta lobortis quis et tellus.</p>
  )
}

export const adress = () => {
  return(
    <>
    <h3>Sobaya</h3>
    <p>229 E 9TH ST</p>
    <p>NEW YORK, New York 10003, US</p>
    <p>+1 212-533-6966</p>
    <p>info@sobaya-nyc.com</p>
    </>
)
}

export const soba = [
  {
      name: 'もりそば',
      price: '13€50',
      description: '“Mori Soba” Pâtes sur panier rond avec sauce soja',
      onSale: false,
      img: "img/soba/soba1.jpg"
  },
  {
    name: '胡麻だれそば',
    price: '16€50',
    description: '“Gomadare Soba“ Pâtes sur panier rond avec sauce sésame',
    onSale: false,
    img: "img/soba/soba2.jpg"
  },
  {
    name: '鴨せいろ',
    price: '21€50',
    description: '“Kamo Seiro” Emincés de magret de canard en bouillon et pâtes sur panier rond',
    onSale: false,
    img: "img/soba/soba3.jpg"
  },
  {
    name: '天せいろ',
    price: '8€',
    description: '“Ten Seiro” Pâtes sur panier rond et beignets légers de crevettes et légumes',
    onSale: false,
    img: "img/soba/soba4.jpg"
  },
  {
    name: 'かけそば',
    price: '12€',
    description: '“Kake Soba” Pâtes en soupe chaude',
    onSale: false,
    img: "img/soba/soba5.jpg"
  },
  {
    name: '花巻そば',
    price: '16€50',
    description: '“Hanamaki Soba“ Pâtes, graines de sarrasin frites et noix de coquille St-Jacques sur algues',
    onSale: false,
    img: "img/soba/soba6.jpg"
  }
];

export const appetizers = [
  {
      name: '冷奴',
      price: '12€50',
      description: 'Tofu frais au gingembre',
      onSale: false,
      img: "img/appetizer/Hiyayakko.jpg"
  },
  {
    name: '帆立貝柱、いんげん梅肉和え',
    price: '12€50',
    description: 'Haricots verts et noix de 㻿t-Jacques à la sauce prune',
    onSale: false,
    img: "img/appetizer/haricots.jpg"
  },
  {
    name: 'そ䜀みそ',
    price: '8€',
    description: 'Pâte de soja douce avec graines de sarrasin grilles sur deux cuillères en bois',
    onSale: false,
    img: "img/appetizer/sobamiso.jpg"
  },
  {
    name: 'ほうれん草䛾おひたし',
    price: '10€',
    description: 'Épinard marinés',
    onSale: false,
    img: "img/appetizer/ohitashi.jpg"
  },
  {
    name: '鮪と若布 小葱䛾酢みそ和え',
    price: '16€50€',
    description: 'Thon cru mariné avec algues et poireaux à la sauce Miso',
    onSale: false,
    img: "img/appetizer/nutaae.jpg"
  },
  {
    name: '漬け物盛り合わせ',
    price: '15€',
    description: 'Assortiment de légumes croquants saumurés',
    onSale: false,
    img: "img/appetizer/Otsukemono.jpg"
  }
];

export const drinks = [
  {
      name: 'Kozaemon',
      price: '12€',
      description: 'Tokubetsu Junmai',
      onSale: false,
      img: "img/drinks/kozaemon.jpg"
  },
  {
    name: 'Azumaichi',
    price: '14€50',
    description: 'Junmai Daiginjo',
    onSale: false,
    img: "img/drinks/azumaichi.jpg"
  },
  {
    name: 'Dassai',
    price: '15€',
    description: 'Junmai Ginjo',
    onSale: false,
    img: "img/drinks/dassai.jpg"
  }
];

export const featured1 = [
  {
    name: 'Dassai',
    price: '15€',
    description: 'Junmai Ginjo',
    onSale: false,
    img: "img/drinks/dassai.jpg"
  },
  {
    name: '鮪と若布 小葱䛾酢みそ和え',
    price: '16€50€',
    description: 'Thon cru mariné avec algues et poireaux à la sauce Miso',
    onSale: false,
    img: "img/appetizer/nutaae.jpg"
  }
]

export const featured2 = [
  {
    name: '漬け物盛り合わせ',
    price: '15€',
    description: 'Assortiment de légumes croquants saumurés',
    onSale: false,
    img: "img/appetizer/Otsukemono.jpg"
  },
  {
    name: 'ほうれん草䛾おひたし',
    price: '10€',
    description: 'Épinard marinés',
    onSale: false,
    img: "img/appetizer/ohitashi.jpg"
  }
]

export const featured3 = [
  {
    name: '冷奴',
    price: '12€50',
    description: 'Tofu frais au gingembre',
    onSale: false,
    img: "img/appetizer/Hiyayakko.jpg"
}
]

export const featured4 = [
  {
    name: '天せいろ',
    price: '8€',
    description: '“Ten Seiro” Pâtes sur panier rond et beignets légers de crevettes et légumes',
    onSale: false,
    img: "img/soba/soba4.jpg"
  }
]