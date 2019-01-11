export interface IDeck {
  name: string;
  cards: ICard[];
}

export interface ICard {
  image: string;
}

export interface IBestDeck {
  deck: IDeck;
  draw: number;
  lose: number;
  wins: number;
}