import Head from 'next/head';
import { Component } from 'react';
import * as React from 'react';

export default class Index extends Component {
  public render() {
    return (
      <Head>
        <title>CRPRO</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
    );
  }
}