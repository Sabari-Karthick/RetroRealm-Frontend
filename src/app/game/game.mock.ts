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
    gameGenre: ["Adventure", "RPG"],
    discountedGamePrice: 53.99, // Calculated with discount,
    gameDescription: "Embark on an epic quest in this thrilling adventure game.",
    gameRating: 4.5
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
    gameGenre: ["Sci-Fi", "Simulation"],
    discountedGamePrice: 31.99, // Calculated with discount,
    gameDescription: "Explore the vastness of space in this simulation game.",
    gameRating: 4.2
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
    gameGenre: ["Fantasy", "MMORPG"],
    discountedGamePrice: 47.49, // Calculated with discount,
    gameDescription: "Dive into the mystic realms in this fantasy MMORPG.",
    gameRating: 4.3
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
    gameGenre: ["Action", "Sci-Fi"],
    discountedGamePrice: 59.49, // Calculated with discount,
    gameDescription: "Join the cyber warriors in this action-packed game.",
    gameRating: 4.6
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
    gameGenre: ["Adventure", "Puzzle"],
    discountedGamePrice: 22.49, // Calculated with discount,
    gameDescription: "Solve ancient puzzles in this legendary adventure game.",
    gameRating: 4.1
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
    gameGenre: ["Strategy", "Sci-Fi"],
    discountedGamePrice: 55.99, // Calculated with discount,
    gameDescription: "Conquer the galaxy in this epic strategy game.",
    gameRating: 4.8
  },
  {
    gameId: 7,
    gameName: "Mystery Mansion",
    gameOwner: {
      gameOwnerID: 107,
      companyName: "Mystery Games",
      email: "contact@mysterygames.com",
      games: [],
      isVerified: true,
    },
    gamePrice: 19.99,
    gameVersion: 1.5,
    gameReleasedDate: new Date(2021, 3, 15),
    gameDiscount: 10, // percentage
    gameGenre: ["Horror", "Puzzle"],
    discountedGamePrice: 17.99, // Calculated with discount,
    gameDescription: "Uncover the secrets of the mystery mansion.",
    gameRating: 4.0
  },
  {
    gameId: 8,
    gameName: "Racing Rivals",
    gameOwner: {
      gameOwnerID: 108,
      companyName: "Speed Studios",
      email: "info@speedstudios.com",
      games: [],
      isVerified: true,
    },
    gamePrice: 24.99,
    gameVersion: 2.2,
    gameReleasedDate: new Date(2022, 1, 10),
    gameDiscount: 15, // percentage
    gameGenre: ["Racing", "Sports"],
    discountedGamePrice: 21.24, // Calculated with discount,
    gameDescription: "Race against rivals in this high-speed racing game.",
    gameRating: 4.4
  },
  {
    gameId: 9,
    gameName: "Fantasy Kingdom",
    gameOwner: {
      gameOwnerID: 109,
      companyName: "Fantasy Studios",
      email: "support@fantasystudios.com",
      games: [],
      isVerified: false,
    },
    gamePrice: 34.99,
    gameVersion: 3.0,
    gameReleasedDate: new Date(2023, 5, 20),
    gameDiscount: 20, // percentage
    gameGenre: ["Fantasy", "Strategy"],
    discountedGamePrice: 27.99, // Calculated with discount,
    gameDescription: "Build and manage your own fantasy kingdom.",
    gameRating: 4.7
  },
  {
    gameId: 10,
    gameName: "Zombie Apocalypse",
    gameOwner: {
      gameOwnerID: 110,
      companyName: "Zombie Games Inc.",
      email: "contact@zombiegames.com",
      games: [],
      isVerified: true,
    },
    gamePrice: 44.99,
    gameVersion: 1.8,
    gameReleasedDate: new Date(2021, 9, 5),
    gameDiscount: 25, // percentage
    gameGenre: ["Horror", "Action"],
    discountedGamePrice: 33.74, // Calculated with discount,
    gameDescription: "Survive the zombie apocalypse in this action-packed game.",
    gameRating: 4.5
  }
];

// Linking games back to owners (to avoid circular references)
mockGames.forEach((game) => {
  game.gameOwner.games.push(game);
});
