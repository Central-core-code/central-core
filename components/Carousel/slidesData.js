export const slides = [
  {
    title: "Sky tower apartment",
    imgWebp: "/projects/skyTower.webp",
    imgPng: "/projects/skyTower.png",
    logo: "/projects/skyTowerLogo.svg",
    logoWidth: "150",
    logoHeight: "150",
    alt: {
      en: "Sky tower apartments reservation system page",
      pl: "Sky tower apartamenty system rezerwacji",
    },
  },
  {
    title: "Alchimowiczbike",
    imgWebp: "/projects/alchimowiczBike.webp",
    imgPng: "/projects/alchimowiczBike.webp",
    logo: "/projects/alhimowiczBikeLogo.svg",
    alt: {
      en: "Alchimowiczbike company page",
      pl: "Alchimowiczbike strona firmowa",
    },
  },
  {
    title: "Mototravels",
    imgWebp: "/projects/motoTravels.webp",
    imgPng: "/projects/motoTravels.jpg",
    logo: "/projects/motoTravelsLogo.svg",
    alt: {
      en: "Mototravels company page",
      pl: "Mototravels strona firmowa",
    },
  },

  {
    title: "New Art Design",
    imgWebp: "/projects/newArtDesign.webp",
    imgPng: "/projects/newArtDesign.jpg",
    logo: "/projects/newArtDesignLogo.svg",
    logoWidth: "150",
    logoHeight: "150",
    alt: {
      en: "New Art Design company page",
      pl: "New Art Design strona firmowa",
    },
  },
  {
    title: "Pizza Nowar",
    imgWebp: "/projects/pizzaNowar.webp",
    imgPng: "/projects/pizzaNowar.jpg",
    logo: "/projects/pizzaNowarLogo.svg",
    logoWidth: "150",
    logoHeight: "150",
    alt: {
      en: "Pizza Nowar company page",
      pl: "Pizza Nowar strona firmowa",
    },
  },
  {
    title: "Staszica 16",
    imgWebp: "/projects/staszica16.webp",
    imgPng: "/projects/staszica16.png",
    logo: "/projects/staszica16Logo.svg",
    logoWidth: "185",
    logoHeight: "70",
    alt: {
      en: "Staszica16 apartment booking",
      pl: "Staszica16 rezerwacja apratamentów",
    },
  },
  {
    title: "Print House",
    imgWebp: "/projects/printHouse.webp",
    imgPng: "/projects/printHouse.png",
    logo: "/projects/printHouseLogo.svg",
    logoWidth: "185",
    logoHeight: "90",
    alt: {
      en: "Print House company page",
      pl: "Print House strona firmowa",
    },
  },
];

export const settings = {
  centerMode: true,
  centerPadding: "120px",
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
