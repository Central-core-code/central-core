import WineNutrition from '@components/WineNutrition';

const frankovkaData = {
  name: "Frankovka Modrá",
  vintage: "2025",
  alcoholContent: "12.0",
  energyValueKj: "316",
  caloriesPer100ml: "76",
  fat: "0",
  saturatedFat: "0",
  carbohydratesPer100ml: "0",
  sugarsPer100ml: "0",
  protein: "0",
  salt: "0",
  sulphites: "Zawiera siarczyny",
  allergens: "Może zawierać śladowe ilości białka jaja i mleka",
  servingTemp: "16-18°C",
  region: "Dolina Wisły",
  grapeVariety: "Frankovka Modrá",
  wineType: "Wino czerwone wytrawne",
  color: "#722f37" // Deep red color
};

export default function Frankovka25() {
  return <WineNutrition wineData={frankovkaData} />;
}

// This page doesn't use the main Layout component to avoid navigation and footer
Frankovka25.getLayout = function getLayout(page) {
  return page;
};