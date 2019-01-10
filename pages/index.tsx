import Head from 'next/head';
import { Component } from 'react';
import * as React from 'react';
import Header from '../src/components/Header';

export default class Index extends Component {
  public render() {
    return (
      <div>
        <Head>
          <title>CRPRO</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <Header />
      </div>
    );
  }
}