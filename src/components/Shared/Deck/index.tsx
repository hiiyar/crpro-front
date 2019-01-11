import styled from '@emotion/styled';
import * as React from 'react';
import { ICard, IDeck } from '../../../interfaces/deck';

interface IProps {
  deck: IDeck;
}

interface IState { }

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
`;

const Cart = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid;
`;

export default class Deck extends React.PureComponent<IProps, IState> {
  public render() {
    const { deck } = this.props;
    return (
      <Container>
        {deck.cards.map((card: ICard, index: number) => {
          return <Cart src={card.image} key={index} />;
        })}
      </Container>
    );
  }
}