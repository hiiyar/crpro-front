import { IDeck } from './deck';

export interface IPlayer {
  informations: IPlayerInformations;
  ranking: IRanking;
  grandChallenge: IGrandChallenge;
  bestDeck: IDeck;
  bestDeckAgainst?: IDeck;
}

export interface IPlayerInformations {
  id: string;
  username: string;
  avatar?: string;
  clanName?: string;
  clanImage?: string;
}

export interface IRanking {
  position: number;
  lastPositionDifference: number;
}

export interface IGrandChallenge {
  name: string;
  wins: number;
}