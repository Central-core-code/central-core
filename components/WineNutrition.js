import React from 'react';
import Head from 'next/head';

const WineNutrition = ({ wineData }) => {
  const {
    name,
    vintage,
    alcoholContent,
    energyValueKj,
    caloriesPer100ml,
    fat,
    saturatedFat,
    carbohydratesPer100ml,
    sugarsPer100ml,
    protein,
    salt,
    sulphites,
    allergens,
    servingTemp,
    region,
    grapeVariety,
    wineType,
    producer,
    description,
    characteristics,
    color
  } = wineData;

  return (
    <>
      <Head>
        <title>{name} - Wartości Odżywcze</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <div className="wine-nutrition-page">
        <div className="wine-container">
          {/* Header with wine name */}
          <div className="wine-header">
            <h1 className="wine-title">{name}</h1>
            <p className="wine-vintage">{vintage}</p>
            {wineType && <p className="wine-type">{wineType}</p>}
            <div className="wine-color-indicator" style={{backgroundColor: color}}></div>
          </div>

          {/* Wine details card */}
          <div className="wine-details-card">
            <div className="wine-info-grid">
              {producer && (
                <div className="wine-info-item">
                  <h3>Producent</h3>
                  <p>{producer}</p>
                </div>
              )}
              <div className="wine-info-item">
                <h3>Region</h3>
                <p>{region}</p>
              </div>
              <div className="wine-info-item">
                <h3>Odmiana winorośli</h3>
                <p>{grapeVariety}</p>
              </div>
              <div className="wine-info-item">
                <h3>Temperatura podawania</h3>
                <p>{servingTemp}</p>
              </div>
            </div>
          </div>

          {/* Wine description */}
          {description && (
            <div className="wine-description-card">
              <h3>Opis wina</h3>
              <p>{description}</p>
              {characteristics && (
                <div className="wine-characteristics">
                  <span>{characteristics}</span>
                </div>
              )}
            </div>
          )}

          {/* Nutrition table */}
          <div className="nutrition-card">
            <h2 className="nutrition-title">Wartości Odżywcze</h2>
            <p className="nutrition-subtitle">na 100ml produktu</p>

            <div className="nutrition-table">
              <div className="nutrition-row main-nutrient">
                <span className="nutrient-name">Zawartość alkoholu</span>
                <span className="nutrient-value">{alcoholContent}% vol.</span>
              </div>

              <div className="nutrition-row">
                <span className="nutrient-name">Wartość energetyczna</span>
                <span className="nutrient-value">
                  {energyValueKj ? `${energyValueKj} kJ / ` : ''}{caloriesPer100ml} kcal
                </span>
              </div>

              <div className="nutrition-row">
                <span className="nutrient-name">Tłuszcz</span>
                <span className="nutrient-value">{fat || '0'} g</span>
              </div>

              <div className="nutrition-row indent">
                <span className="nutrient-name">w tym kwasy tłuszczowe nasycone</span>
                <span className="nutrient-value">{saturatedFat || '0'} g</span>
              </div>

              <div className="nutrition-row">
                <span className="nutrient-name">Węglowodany</span>
                <span className="nutrient-value">{carbohydratesPer100ml}g</span>
              </div>

              <div className="nutrition-row indent">
                <span className="nutrient-name">w tym cukry</span>
                <span className="nutrient-value">{sugarsPer100ml}g</span>
              </div>

              <div className="nutrition-row">
                <span className="nutrient-name">Białko</span>
                <span className="nutrient-value">{protein || '0'} g</span>
              </div>

              <div className="nutrition-row">
                <span className="nutrient-name">Sól</span>
                <span className="nutrient-value">{salt || '0'} g</span>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="additional-info">
            <div className="info-item">
              <h3>Siarczyny</h3>
              <p>{sulphites}</p>
            </div>

            {allergens && (
              <div className="info-item">
                <h3>Alergeny</h3>
                <p>{allergens}</p>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="wine-footer">
            <p className="consumption-warning">
              Spożywaj odpowiedzialnie. Nadmierne spożywanie alkoholu szkodzi zdrowiu.
            </p>
          </div>
        </div>

        <style jsx>{`
          .wine-nutrition-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #F5E6D3 0%, #E8D5C4 50%, #F0C1A8 100%);
            padding: 20px;
            font-family: 'Lato', sans-serif;
          }

          .wine-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            position: relative;
          }

          .wine-header {
            background: linear-gradient(135deg, #8B4B3B 0%, #A0564A 100%);
            color: white;
            padding: 50px 30px;
            text-align: center;
            position: relative;
          }

          .wine-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            margin: 0 0 10px 0;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }

          .wine-vintage {
            font-size: 1.2rem;
            opacity: 0.9;
            margin: 0;
            font-weight: 300;
          }

          .wine-type {
            font-size: 0.95rem;
            opacity: 0.8;
            margin: 5px 0 0 0;
            font-weight: 300;
            font-style: italic;
          }

          .wine-color-indicator {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin: 20px auto 0;
            border: 3px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .wine-details-card {
            padding: 30px;
            border-bottom: 1px solid #eee;
          }

          .wine-description-card {
            padding: 30px;
            border-bottom: 1px solid #eee;
            background: #FBF8F5;
          }

          .wine-description-card h3 {
            color: #8B4B3B;
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            font-weight: 600;
            margin: 0 0 15px 0;
          }

          .wine-description-card p {
            color: #5A4A42;
            line-height: 1.7;
            margin: 0 0 20px 0;
            font-size: 1rem;
          }

          .wine-characteristics {
            text-align: center;
            padding: 15px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .wine-characteristics span {
            color: #E88B73;
            font-weight: 500;
            font-style: italic;
            font-size: 0.95rem;
          }

          .wine-info-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .wine-info-item h3 {
            color: #8B4B3B;
            font-size: 0.9rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0 0 5px 0;
          }

          .wine-info-item p {
            color: #555;
            font-size: 1.1rem;
            margin: 0;
            font-weight: 400;
          }

          .nutrition-card {
            padding: 30px;
            border-bottom: 1px solid #eee;
          }

          .nutrition-title {
            font-family: 'Playfair Display', serif;
            color: #8B4B3B;
            font-size: 1.8rem;
            font-weight: 600;
            margin: 0 0 5px 0;
            text-align: center;
          }

          .nutrition-subtitle {
            text-align: center;
            color: #7f8c8d;
            font-size: 0.9rem;
            margin: 0 0 25px 0;
            font-style: italic;
          }

          .nutrition-table {
            background: #f8f9fa;
            border-radius: 12px;
            overflow: hidden;
          }

          .nutrition-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid #dee2e6;
          }

          .nutrition-row:last-child {
            border-bottom: none;
          }

          .nutrition-row.indent .nutrient-name {
            padding-left: 20px;
            font-size: 0.9rem;
            opacity: 0.9;
          }

          .nutrition-row.main-nutrient {
            background: linear-gradient(135deg, #E88B73 0%, #D4775E 100%);
            color: white;
          }

          .nutrient-name {
            font-weight: 500;
            font-size: 1rem;
          }

          .nutrient-value {
            font-weight: 600;
            font-size: 1.1rem;
          }

          .additional-info {
            padding: 30px;
            border-bottom: 1px solid #eee;
          }

          .info-item {
            margin-bottom: 20px;
          }

          .info-item:last-child {
            margin-bottom: 0;
          }

          .info-item h3 {
            color: #8B4B3B;
            font-size: 1rem;
            font-weight: 600;
            margin: 0 0 8px 0;
          }

          .info-item p {
            color: #555;
            margin: 0;
            line-height: 1.5;
          }

          .wine-footer {
            padding: 25px 30px;
            background: #f8f9fa;
            text-align: center;
          }

          .consumption-warning {
            color: #6c757d;
            font-size: 0.85rem;
            margin: 0;
            font-style: italic;
          }

          @media (max-width: 768px) {
            .wine-nutrition-page {
              padding: 10px;
            }

            .wine-title {
              font-size: 2rem;
            }

            .wine-container {
              margin: 0;
              border-radius: 0;
            }

            .wine-header {
              padding: 30px 20px;
            }

            .wine-details-card,
            .nutrition-card,
            .additional-info {
              padding: 20px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default WineNutrition;