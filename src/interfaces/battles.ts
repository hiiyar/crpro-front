import { IDeck } from './deck';

export interface IBattle {
  clan: string;
  crownsReceived: number;
  deck: IDeck;
  opponentName: string;
}
