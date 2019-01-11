import styled from '@emotion/styled';
import * as React from 'react';
import { Component } from 'react';
import { IPlayer } from '../../interfaces/playerInformations';
import BestDeck from './BestDeck';
import GrandChallange from './GrandChallange';
import PlayerInformations from './PlayerInformations';
import Ranking from './Ranking';

interface IState {
  player: IPlayer;
}

interface IProps {}

const Player = styled.div`
  display: flex;
  font-family: Arial;
`;

const VerticalSeparator = styled.div`
  border-left: 1px solid #c3c3c3;
`;

const HorizontalSeparator = styled.div`
  border-bottom: 1px solid #c3c3c3;
  width: 100%;
  position: relative;
  margin: 10px 0;
`;

const Performance = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 12px;
  justify-content: center;
`;

export default class Header extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      player: {
        bestDeck: [
          { image: 'https://bit.ly/2FoDHQL' },
          { image: 'https://bit.ly/2FoDHQL' },
          { image: 'https://bit.ly/2FoDHQL' },
          { image: 'https://bit.ly/2FoDHQL' },
          { image: 'https://bit.ly/2FoDHQL' },
          { image: 'https://bit.ly/2FoDHQL' },
        ],
        grandChallenge: {
          name: 'GC-12',
          wins: 22,
        },
        informations: {
          avatar: 'https://bit.ly/2skaQ8x',
          clanImage: 'https://bit.ly/2M3hgSD',
          clanName: 'Hiiyar',
          id: '#2cccp',
          username: 'LoudJean',
        },
        ranking: {
          lastPositionDifference: 32,
          position: 1234,
        },
      },
    };
  }

  public render() {
    const { player } = this.state;

    return (
      <div>
        <Player>
          <PlayerInformations user={player.informations} />
          <VerticalSeparator />
          <Performance>
            <Ranking ranking={player.ranking} />
            <GrandChallange grandChallenge={player.grandChallenge} />
          </Performance>
          <VerticalSeparator />
          <BestDeck deck={player.bestDeck} />
        </Player>

        <HorizontalSeparator />
      </div>
    );
  }
}
