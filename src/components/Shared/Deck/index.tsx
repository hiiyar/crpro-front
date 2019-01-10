import styled from '@emotion/styled';
import * as React from 'react';
import { IDeck } from '../../../interfaces/playerInformations';

interface IProps {
  deck: IDeck[];
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
`;

export default class Deck extends React.PureComponent<IProps, IState> {
  public render() {
    const { deck } = this.props;
    return (
      <Container>
        {deck.map((card: IDeck, index: number) => {
          return <Cart src={card.image} key={index} />;
        })}
      </Container>
    );
  }
}