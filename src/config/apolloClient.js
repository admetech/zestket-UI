import {
  ApolloClient,
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import {
  API_BASE_URL,
  API_BASE_PATH,
  API_BASE_PATH_EXTERNAL,
} from 'src/config/env';
import toaster from 'src/web/components/atoms/toaster';
import { RESPONSE_CODES } from 'src/config/definitions';
import {
  getAccessAndNewRefreshToken,
  isRefreshTokenAvailable,
  logOut,
  getAuthToken,
} from 'src/web/common/authUtils';

export const cache = new InMemoryCache({
  addTypename: false,
});

const httpLink = new HttpLink({
  uri: `${API_BASE_URL}/${API_BASE_PATH}`,
  credentials: 'same-origin',
});

const retryLastAPICall = new RetryLink({
  delay: {
    initial: 100,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    // eslint-disable-next-line consistent-return
    retryIf: (error, operation) => {
      if (error.statusCode === RESPONSE_CODES.ERROR) {
        return false;
      }
      return operation;
    },
  },
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: getAuthToken(),
    },
  });

  return forward(operation);
});

// error handler
const errorHandler = onError(({
  graphQLErrors, networkError, operation, forward,
}) => {
  // handle graphQL errors
  if (graphQLErrors) {
    // eslint-disable-next-line no-restricted-syntax
    for (const err of graphQLErrors) {
      // eslint-disable-next-line no-console
      console.log('[graphQLErrors]', err.message);
      toaster({ type: 'error', msg: err.message });
      // if (err.message === 'Signature has expired'
      //   || err.message === 'Error decoding signature'
      // ) {
      //   if (isRefreshTokenAvailable) {
      //     getAccessAndNewRefreshToken();
      //   } else logOut();
      // }

      // return the error to the caller for local handling of the error
      return forward(operation);
    }
  }
  if (networkError) {
    const errorStatsInNetwork = `${networkError}`;
    const locationState = Object.values(RESPONSE_CODES)
      .find((item) => errorStatsInNetwork.includes(item));

    localStorage.setItem('networkErrorState', locationState);

    if (locationState === RESPONSE_CODES.UNAUTHORIZED && isRefreshTokenAvailable) {
      getAccessAndNewRefreshToken();
    } else logOut();

    // eslint-disable-next-line no-console
    console.log(`[Network error]: ${networkError}`);
    return forward(operation);
    // if you would also like to retry automatically on
    // network errors, we recommend that you use
    // apollo-link-retry
  }

  return forward(operation);
});

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    errorHandler,
    retryLastAPICall,
    authMiddleware,
    httpLink,
  ]),
  fetchOptions: {
    mode: 'no-cors',
  },
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
    },
  },
});

// EXTERNAL API
const httpLinkExternal = new HttpLink({
  uri: `${API_BASE_URL}/${API_BASE_PATH_EXTERNAL}`,
  credentials: 'same-origin',
});

export const clientExternal = new ApolloClient({
  cache,
  link: ApolloLink.from([
    errorHandler,
    retryLastAPICall,
    authMiddleware,
    httpLinkExternal,
  ]),
  fetchOptions: {
    mode: 'no-cors',
  },
});
