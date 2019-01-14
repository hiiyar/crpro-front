import styled from '@emotion/styled';
import * as React from 'react';

import Layout from '../src/components/Shared/Layout';

import Battles from '../src/components/Battles/index';
import BestDecks from '../src/components/BestDecks/index';
import Header from '../src/components/Header';
import Table from '../src/components/Shared/Table/index';

// XX @pierre: pages shouldn't have any styles on them. just building blocks
const TableContainer = styled.div`
  width: 25%;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
`;

export default class Index extends React.Component {
  public render() {
    return (
      <Layout>
        <Header />
        <Content>
          <TableContainer>
            <Battles />
          </TableContainer>
          <TableContainer>
            <BestDecks />
          </TableContainer>
          <TableContainer>
            <Table title="Grand Challenge" rows={[<div>...</div>]} />
          </TableContainer>
        </Content>
      </Layout>
    );
  }
}
