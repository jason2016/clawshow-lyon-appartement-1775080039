export const SITE_DATA = {
  "siteName": "Lyon Appartement",
  "contactEmail": "puflorent@gmail.com",
  "contactPhone": "+33 6 42 98 45 35",
  "currency": "€",
  "language": "fr",
  "properties": [
    {
      "name": "Appartement Lyon Centre",
      "location": "Lyon, France",
      "description": "Bel appartement d'une chambre au cœur de Lyon, idéal pour découvrir la capitale des Gaules. Profitez du charme lyonnais, des traboules du Vieux-Lyon et de la gastronomie réputée de la ville, à deux pas de votre logement.",
      "bedrooms": 1,
      "bathrooms": 1,
      "maxGuests": 2,
      "pricePerNight": 90,
      "amenities": [
        "WiFi",
        "Cuisine équipée",
        "Chauffage",
        "Linge de maison"
      ]
    }
  ]
};

export type SiteData = typeof SITE_DATA;
