import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '~/store';

import Layot from '~/components/Layout';
import GlobalStyle from '~/styles/GlobalStyle';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <GlobalStyle />
        <Layot>
          <Component {...pageProps} />
        </Layot>
      </Provider>
    );
  }
}

export default withRedux(initializeStore)(MyApp);
