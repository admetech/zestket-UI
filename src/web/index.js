import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { client } from 'src/config/apolloClient';
import App from 'src/web/components/app';
import configureWebFontService from 'src/web/common/WebFontService';
import history from 'src/web/redux/history';

import 'src/web/css/root.scss';
import 'src/web/css/index.scss';

function AppInitializer() {
  render(
    <BrowserRouter history={history}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
}

const main = () => {
  AppInitializer();
  configureWebFontService();
};

try {
  main();
  // eslint-disable-next-line no-console
  console.info('App initialized');
} catch (err) {
  // eslint-disable-next-line no-console
  console.error('Unable to initialize app. See following error', err);
}
