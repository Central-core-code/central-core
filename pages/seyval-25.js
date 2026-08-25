import WineNutrition from '@components/WineNutrition';

const seyvalData = {
  name: "Seyval Blanc",
  vintage: "2025",
  alcoholContent: "12.0",
  energyValueKj: "321",
  caloriesPer100ml: "77",
  fat: "0",
  saturatedFat: "0",
  carbohydratesPer100ml: "0.5",
  sugarsPer100ml: "0.5",
  protein: "0",
  salt: "0",
  sulphites: "Zawiera siarczyny",
  allergens: "Może zawierać śladowe ilości białka jaja i mleka",
  servingTemp: "9-11°C",
  region: "Dolina Wisły",
  grapeVariety: "Seyval Blanc",
  color: "#f8f5a4" // Light golden color
};

export default function Seyval25() {
  return <WineNutrition wineData={seyvalData} />;
}

// This page doesn't use the main Layout component to avoid navigation and footer
Seyval25.getLayout = function getLayout(page) {
  return page;
};