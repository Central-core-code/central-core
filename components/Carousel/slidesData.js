import printHouse from "public/projects/printHouse.svg";
import staszica16 from "public/projects/staszica16.svg";
import newArtDesign from "public/projects/newArtDesign.svg";
import pizzaNowar from "public/projects/pizzaNowar.svg";
import skyTower from "public/projects/skyTower.svg";

export const slides = [
  {
    title: "Sky tower reservation",
    img: skyTower,
    alt: {
      en: "Sky tower apartments reservation system page",
      pl: "Sky tower apartamenty system rezerwacji",
    },
    link: "https://skytowerapartment.com/",
  },

  {
    title: "New Art Design",
    img: newArtDesign,
    alt: {
      en: "New Art Design company page",
      pl: "New Art Design strona firmowa",
    },
    link: "https://www.newartdesign.pl/",
  },
  {
    title: "Pizza Nowar",
    img: pizzaNowar,
    alt: {
      en: "Pizza Nowar company page",
      pl: "Pizza Nowar strona firmowa",
    },
    link: "http://pizzerianowar.pl/",
  },
  {
    title: "Staszica 16",
    img: staszica16,
    alt: {
      en: "Staszica16 apartment booking",
      pl: "Staszica16 rezerwacja apratamentów",
    },
    link: "https://www.staszica16.com/",
  },
  {
    title: "Print House",
    img: printHouse,
    alt: {
      en: "Print House company page",
      pl: "Print House strona firmowa",
    },
    link: "https://printhousedbk.pl/",
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
  pauseOnHover: true,
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
