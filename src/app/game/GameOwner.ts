import { Game } from "./Game";

export interface GameOwner {
    gameOwnerID: number;
    companyName: string;
    email: string;
    games: Game[];
    isVerified: boolean;
  }