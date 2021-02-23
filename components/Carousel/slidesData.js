import printHouse from "public/projects/printHouse.jpg";
import staszica16 from "public/projects/staszica16.jpg";
import newArtDesign from "public/projects/newArtDesign.jpg";
import pizzaNowar from "public/projects/pizzaNowar.jpg";
import skyTower from "public/projects/skyTower.png";
import printHouseLogo from "public/projects/logo_v1.png";
import staszica16Logo from "public/projects/logo_v1.png";
import newArtDesignLogo from "public/projects/logo_v1.png";
import pizzaNowarLogo from "public/projects/logo_v1.png";
import skyTowerLogo from "public/projects/logo_v1.png";

export const slides = [
  {
    title: "Sky tower reservation",
    img: skyTower,
    logo: skyTowerLogo,
    alt: {
      en: "Sky tower apartments reservation system page",
      pl: "Sky tower apartamenty system rezerwacji",
    },
  },

  {
    title: "New Art Design",
    img: newArtDesign,
    logo: newArtDesignLogo,
    alt: {
      en: "New Art Design company page",
      pl: "New Art Design strona firmowa",
    },
  },
  {
    title: "Pizza Nowar",
    img: pizzaNowar,
    logo: pizzaNowarLogo,
    alt: {
      en: "Pizza Nowar company page",
      pl: "Pizza Nowar strona firmowa",
    },
  },
  {
    title: "Staszica 16",
    img: staszica16,
    logo: staszica16Logo,
    alt: {
      en: "Staszica16 apartment booking",
      pl: "Staszica16 rezerwacja apratamentów",
    },
  },
  {
    title: "Print House",
    img: printHouse,
    logo: printHouseLogo,
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
