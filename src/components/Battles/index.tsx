import styled from '@emotion/styled';
import * as React from 'react';
import { IBattle } from '../../interfaces/battles';
import Deck from '../Shared/Deck';
import Table from '../Shared/Table';

interface IState {
  battles: IBattle[];
}

interface IProps {}

const Row = styled.div`
  font-size: 30px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Clan = styled.div`
  font-size: 14px;
`;

export default class Battles extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      battles: [
        {
          clan: 'Hiiyar',
          crownsReceived: 20,
          deck: {
            cards: [
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
            ],
            name: 'Ram Bridge',
          },
          opponentName: '4ever',
        },
        {
          clan: 'Hiiyar',
          crownsReceived: 20,
          deck: {
            cards: [
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
            ],
            name: 'Ram Bridge',
          },
          opponentName: 'Skull33',
        },
        {
          clan: 'Hiiyar',
          crownsReceived: 20,
          deck: {
            cards: [
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
            ],
            name: 'Ram Bridge',
          },
          opponentName: '4ever',
        },
        {
          clan: 'Hiiyar',
          crownsReceived: 20,
          deck: {
            cards: [
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
              { image: 'https://bit.ly/2FoDHQL' },
            ],
            name: 'Ram Bridge',
          },
          opponentName: '4ever',
        },
      ],
    };
  }

  public getBattles = (): React.ReactNode[] => {
    const { battles } = this.state;
    const rows: React.ReactNode[] = [];

    battles.map((battle: IBattle) =>
      rows.push(
        <Row>
          <div>
            <span>{battle.opponentName}</span>
            <Clan>{battle.clan}</Clan>
            <span>+{battle.crownsReceived}</span>
          </div>
          <div>
            <Deck deck={battle.deck} />
          </div>
        </Row>,
      ),
    );

    return rows;
  };

  public render() {
    return <Table title="Battles" rows={this.getBattles()} />;
  }
}
