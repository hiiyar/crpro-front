import styled from '@emotion/styled';
import * as React from 'react';
import { IPlayerInformations } from '../../../interfaces/playerInformations';

interface IProps {
  user: IPlayerInformations;
}

interface IState {}

const Container = styled.div`
  display: flex;
  padding: 12px;
  width: 100%;
  justify-content: center;
`;

const Avatar = styled.div`
  background: #daedf9;
  height: 120px;
  width: 120px;
`;

const AvatarImage = styled.img`
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  justify-content: space-evenly;
  margin: 0 15px;
`;

const ClashRoyaleId = styled.small`
  font-size: 14px;
`;

const Clan = styled.div`
  align-items: center;
  display: flex;
`;

const ClanWrapper = styled.div`
  height: 40px;
  width: 40px;
  margin: 0 15px 0 0;
`;

export default class PlayerInformations extends React.PureComponent<
  IProps,
  IState
> {
  public render() {
    const { user } = this.props;

    return (
      <Container>
        <Avatar>
          <AvatarImage src={user.avatar} alt="LoudJean" />
        </Avatar>
        <User>
          <span>{user.username}</span>
          <ClashRoyaleId>{user.id}</ClashRoyaleId>
          <Clan>
            <ClanWrapper>
              <AvatarImage src={user.clanImage} alt={user.clanName} />
            </ClanWrapper>
            {user.clanName}
          </Clan>
        </User>
      </Container>
    );
  }
}
