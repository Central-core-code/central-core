import WineNutrition from '@components/WineNutrition';

const solarisData = {
  name: "Solaris",
  vintage: "2025",
  wineType: "Wino białe półwytrawne",
  alcoholContent: "14.0",
  energyValueKj: "377",
  caloriesPer100ml: "91",
  fat: "0",
  saturatedFat: "0",
  carbohydratesPer100ml: "1.5",
  sugarsPer100ml: "1.5",
  protein: "0",
  salt: "0",
  sulphites: "Zawiera siarczyny",
  allergens: "Może zawierać śladowe ilości białka jaja i mleka",
  servingTemp: "8-10°C",
  region: "Złoty Stok",
  grapeVariety: "Solaris",
  producer: "Aurum Terra",
  description: "Na bazie gron odmiany Solaris. Urzeka aromatami grejpfruta, limonki i dojrzałych cytrusów, wzbogaconycg delikatną nutą owoców tropikalnych. Naturalny cukier resztkowy subtelnie równoważy żywą kwasowość, tworząc harmonijne, soczyste i niezwykle świeże wino o długim finiszu.",
  characteristics: "krągłe • harmonijne • egzotyczne",
  color: "#E88B73" // Coral/peach color from label
};

export default function Solaris25() {
  return <WineNutrition wineData={solarisData} />;
}

// This page doesn't use the main Layout component to avoid navigation and footer
Solaris25.getLayout = function getLayout(page) {
  return page;
};