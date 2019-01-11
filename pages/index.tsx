import styled from '@emotion/styled';
import Head from 'next/head';
import { Component } from 'react';
import * as React from 'react';
import Battles from '../src/components/Battles/index';
import BestDecks from '../src/components/BestDecks/index';
import Header from '../src/components/Header';
import Table from '../src/components/Shared/Table/index';

const TableContainer = styled.div`
  width: 25%;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
`;

export default class Index extends Component {
  public render() {
    return (
      <div>
        <Head>
          <title>CRPRO</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

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
      </div>
    );
  }
}
