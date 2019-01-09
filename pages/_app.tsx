import App, { Container } from 'next/app';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../lib/with-apollo-client';

class CRPRO extends App {
  public render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <div>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </div>
      </Container>
    );
  }
}

export default withApolloClient(CRPRO);