import styled from '@emotion/styled';
import * as React from 'react';

interface IProps {
  title?: string;
  rows: React.ReactNode[];
}
interface IState { }

const Container = styled.div`
  width: 100%;
  font-family: Arial;
`;

const Header = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0 4px 0;
`;

const Button = styled.span`
  font-size: 15px;
`;

const Content = styled.div`
  border: 1px solid;
  height: auto;
  background: #CFDCF4;
  padding: 0 10px;
  height: 490px;
  overflow: hidden;
`;

const Row = styled.div`
  border-bottom: 3px solid;
  padding: 14px 0;
`;

export default class Table extends React.PureComponent<IProps, IState> {
  public render() {
    const { title, rows } = this.props;
    return (
      <Container>
        <Header>
          <span>{title}</span>
          <Button>View All ></Button>
        </Header>
        <Content>
          {
            rows.map((row: React.ReactNode, index: number) =>
              <Row key={index}>
                {row}
              </Row>
            )
          }
        </Content>
      </Container>
    );
  }
}