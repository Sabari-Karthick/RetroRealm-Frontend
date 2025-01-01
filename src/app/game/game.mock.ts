import { Game } from "./Game";

export const mockGames: Game[] = [
  {
    gameId: 1,
    gameName: "Epic Quest",
    gameOwner: {
      gameOwnerID: 101,
      companyName: "Epic Games Ltd.",
      email: "contact@epicgames.com",
      games: [],
      isVerified: true,
    },
    gamePrice: 59.99,
    gameVersion: 1.2,
    gameReleasedDate: new Date(2022, 5, 15),
    gameDiscount: 10, // percentage
    gameGenere: ["Adventure", "RPG"],
    discountedGamePrice: 53.99, // Calculated with discount
  },
  {
    gameId: 2,
    gameName: "Space Odyssey",
    gameOwner: {
      gameOwnerID: 102,
      companyName: "Galactic Studios",
      email: "info@galacticstudios.com",
      games: [],
      isVerified: true,
    },
    gamePrice: 39.99,
    gameVersion: 3.5,
    gameReleasedDate: new Date(2023, 2, 10),
    gameDiscount: 20, // percentage
    gameGenere: ["Sci-Fi", "Simulation"],
    discountedGamePrice: 31.99, // Calculated with discount
  },
  {
    gameId: 3,
    gameName: "Mystic Realms",
    gameOwner: {
      gameOwnerID: 103,
      companyName: "Mystic Arts Inc.",
      email: "support@mysticarts.com",
      games: [],
      isVerified: false,
    },
    gamePrice: 49.99,
    gameVersion: 2.0,
    gameReleasedDate: new Date(2021, 10, 5),
    gameDiscount: 5, // percentage
    gameGenere: ["Fantasy", "MMORPG"],
    discountedGamePrice: 47.49, // Calculated with discount
  },
  {
    gameId: 4,
    gameName: "Cyber Warriors",
    gameOwner: {
      gameOwnerID: 104,
      companyName: "CyberTech Studios",
      email: "contact@cybertech.com",
      games: [],
      isVerified: true,
    },
    gamePrice: 69.99,
    gameVersion: 4.1,
    gameReleasedDate: new Date(2023, 7, 20),
    gameDiscount: 15, // percentage
    gameGenere: ["Action", "Sci-Fi"],
    discountedGamePrice: 59.49, // Calculated with discount
  },
  {
    gameId: 5,
    gameName: "Ancient Legends",
    gameOwner: {
      gameOwnerID: 105,
      companyName: "Legendary Games",
      email: "support@legendarygames.com",
      games: [],
      isVerified: true,
    },
    gamePrice: 29.99,
    gameVersion: 1.0,
    gameReleasedDate: new Date(2020, 11, 25),
    gameDiscount: 25, // percentage
    gameGenere: ["Adventure", "Puzzle"],
    discountedGamePrice: 22.49, // Calculated with discount
  },
  {
    gameId: 6,
    gameName: "Galactic Conquest",
    gameOwner: {
      gameOwnerID: 106,
      companyName: "Star Studios",
      email: "info@starstudios.com",
      games: [],
      isVerified: false,
    },
    gamePrice: 79.99,
    gameVersion: 2.3,
    gameReleasedDate: new Date(2022, 8, 30),
    gameDiscount: 30, // percentage
    gameGenere: ["Strategy", "Sci-Fi"],
    discountedGamePrice: 55.99, // Calculated with discount
  }
];

// Linking games back to owners (to avoid circular references)
mockGames.forEach((game) => {
  game.gameOwner.games.push(game);
});
