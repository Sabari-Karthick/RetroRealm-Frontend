import { GameOwner } from "./GameOwner";

export interface Game {
    gameId: number;
    gameName: string;
    gameOwner : GameOwner;
    gamePrice: number;
    gameVersion: number;
    gameReleasedDate:Date;
    gameDiscount:number;
    gameGenere:string[];
    discountedGamePrice:number;
  }