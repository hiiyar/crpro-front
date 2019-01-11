import styled from '@emotion/styled';
import * as React from 'react';
import { IGrandChallenge } from '../../../interfaces/playerInformations';

interface IProps {
  grandChallenge: IGrandChallenge;
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

const Challange = styled.span`
  margin: 0 10px;
`;

const ChallangeWins = styled.span`
  margin: 0 20px;
`;

export default class GrandChallange extends React.PureComponent<IProps, IState> {
  public render() {
    const { grandChallenge } = this.props;

    return (
      <Container>
        <Content>
          <Icon src='https://bit.ly/2FoDHQL' alt='Ranking' />
          <Challange>
            <span>{grandChallenge.name}</span>
            <ChallangeWins>{grandChallenge.wins}</ChallangeWins>
          </Challange>
        </Content>
      </Container>
    );
  }
}