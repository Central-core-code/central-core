import printHouse from "public/projects/printHouse.webp";
import printHouse1 from "public/projects/printHouse.png";
import staszica16 from "public/projects/staszica16.webp";
import staszica161 from "public/projects/staszica16.png";
import newArtDesign from "public/projects/newArtDesign.webp";
import newArtDesign1 from "public/projects/newArtDesign.jpg";
import pizzaNowar from "public/projects/pizzaNowar.webp";
import pizzaNowar1 from "public/projects/pizzaNowar.jpg";
import skyTower from "public/projects/skyTower.webp";
import skyTower1 from "public/projects/skyTower.png";
import printHouseLogo from "public/projects/printHouseLogo.svg";
import staszica16Logo from "public/projects/staszica16Logo.svg";
import newArtDesignLogo from "public/projects/newArtDesignLogo.svg";
import pizzaNowarLogo from "public/projects/pizzaNowarLogo.svg";
import skyTowerLogo from "public/projects/skyTowerLogo.svg";
import alchimowiczBike from "public/projects/alchimowiczBike.webp";
import alhimowiczBikeLogo from "public/projects/alhimowiczBikeLogo.svg";
import motoTravels from "public/projects/motoTravels.webp";
import motoTravels1 from "public/projects/motoTravels.jpg";
import motoTravelsLogo from "public/projects/motoTravelsLogo.svg";

export const slides = [
  {
    title: "Sky tower apartment",
    imgWebp: skyTower,
    imgPng: skyTower1,
    logo: skyTowerLogo,
    logoWidth: "150",
    logoHeight: "150",
    alt: {
      en: "Sky tower apartments reservation system page",
      pl: "Sky tower apartamenty system rezerwacji",
    },
  },
  {
    title: "Alchimowiczbike",
    imgWebp: alchimowiczBike,
    imgPng: alchimowiczBike,
    logo: alhimowiczBikeLogo,
    alt: {
      en: "Alchimowiczbike company page",
      pl: "Alchimowiczbike strona firmowa",
    },
  },
  {
    title: "Mototravels",
    imgWebp: motoTravels,
    imgPng: motoTravels1,
    logo: motoTravelsLogo,
    alt: {
      en: "Mototravels company page",
      pl: "Mototravels strona firmowa",
    },
  },

  {
    title: "New Art Design",
    imgWebp: newArtDesign,
    imgPng: newArtDesign1,
    logo: newArtDesignLogo,
    logoWidth: "150",
    logoHeight: "150",
    alt: {
      en: "New Art Design company page",
      pl: "New Art Design strona firmowa",
    },
  },
  {
    title: "Pizza Nowar",
    imgWebp: pizzaNowar,
    imgPng: pizzaNowar1,
    logo: pizzaNowarLogo,
    logoWidth: "150",
    logoHeight: "150",
    alt: {
      en: "Pizza Nowar company page",
      pl: "Pizza Nowar strona firmowa",
    },
  },
  {
    title: "Staszica 16",
    imgWebp: staszica16,
    imgPng: staszica161,
    logo: staszica16Logo,
    logoWidth: "185",
    logoHeight: "70",
    alt: {
      en: "Staszica16 apartment booking",
      pl: "Staszica16 rezerwacja apratamentów",
    },
  },
  {
    title: "Print House",
    imgWebp: printHouse,
    imgPng: printHouse1,
    logo: printHouseLogo,
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
