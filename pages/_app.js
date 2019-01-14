import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../lib/with-apollo-client';
import Theme from '../lib/theme';
class CRPRO extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <Head>
          <title>CRPROx</title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no"
          />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/static/normalize.css" type="text/css" />
        </Head>
        <Theme>
          <div css={{ position: 'absolute', width: '100vw', height: '100vh' }}>
            <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
            </ApolloProvider>
          </div>
        </Theme>
      </Container>
    );
  }
}

export default withApolloClient(CRPRO);
