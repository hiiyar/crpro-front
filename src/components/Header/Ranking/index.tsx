import styled from '@emotion/styled';
import * as React from 'react';
import { IRanking } from '../../../interfaces/playerInformations';

interface IProps {
  ranking: IRanking;
}

interface IState { }

const Container = styled.div`
  display: flex;
  padding: 12px;
  width: 60%;
  font-size: 30px;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid;
`;

const Position = styled.span`
  margin: 0 10px;
`;

const LastPositionDifference = styled.span`
  font-size: 18px;
  bottom: 20px;
  position: relative;
`;

const ArrowIcon = styled.img`
  width: 15px;
`;

export default class Ranking extends React.PureComponent<IProps, IState> {
  public render() {
    const { ranking } = this.props;

    return (
      <Container>
        <Content>
          <Icon src='https://bit.ly/2FoDHQL' alt='Ranking' />
          <Position>
            {ranking.position}
            <LastPositionDifference>
              {ranking.lastPositionDifference}
              <ArrowIcon src='/static/icons/arrowTop.svg' />
            </LastPositionDifference>
          </Position>
        </Content>
      </Container>
    );
  }
}