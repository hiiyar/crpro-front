import styled from '@emotion/styled';
import * as React from 'react';
import { IBestDeck } from '../../interfaces/deck';
import Deck from '../Shared/Deck';
import Table from '../Shared/Table';

interface IState {
  bestDecks: IBestDeck[];
}

interface IProps { }

const Row = styled.div`
  font-size: 30px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DeckInformations = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class BestDecks extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      bestDecks: [
        {
          deck: {
            cards: [
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' }
            ],
            name: 'Ram Bridge'
          },
          draw: 1,
          lose: 2,
          wins: 3
        },
        {
          deck: {
            cards: [
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' }
            ],
            name: 'Defensive Deck'
          },
          draw: 3,
          lose: 2,
          wins: 5
        },
        {
          deck: {
            cards: [
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' }
            ],
            name: 'Ram Bridge'
          },
          draw: 1,
          lose: 2,
          wins: 3
        }
      ]
    };
  }

  public getBestDecks = (): React.ReactNode[] => {
    const { bestDecks } = this.state;
    const rows: React.ReactNode[] = [];

    bestDecks.map((bestDeck: IBestDeck) =>
      rows.push(
        <Row>
          <DeckInformations>
            <span>{bestDeck.deck.name}</span>
            <span>{bestDeck.wins}W {bestDeck.lose}L {bestDeck.draw}D</span>
          </DeckInformations>
          <div>
            <Deck deck={bestDeck.deck} />
          </div>
        </Row>
      )
    );

    return rows;
  }

  public render() {

    return (
      <Table
        title='Battles'
        rows={this.getBestDecks()}
      />
    );
  }
}