import styled from '@emotion/styled';
import * as React from 'react';
import { IDeck } from '../../../interfaces/playerInformations';
import Deck from '../../Shared/Deck';

interface IProps {
  deck: IDeck[];
}

interface IState { }

const Container = styled.div`
  width: 100%;
  font-size: 30px;
  display: flex;
  padding: 12px;
  align-items: center;
`;

const BestCards = styled.div`
  width: 50%;
  margin: 0 15px;
`;

export default class BestDeck extends React.PureComponent<IProps, IState> {
  public render() {
    const { deck } = this.props;

    return (
      <Container>
        <span>Best Deck</span>
        <BestCards>
          <Deck deck={deck} />
        </BestCards>
        <span>Best Deck Against</span>
        <BestCards>
          <Deck deck={deck} />
        </BestCards>
      </Container>
    );
  }
}