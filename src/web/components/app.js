import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as qs from 'qs';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import Homepage from './Homepage';
import theme from '../theme';
import { openRoutes, protectedRoutes } from '../routes';
import { CloseButton } from '../components/atoms/toaster';
import { ERROR_ROUTES } from '../routes/componentRoutes';
// import Search from './Search';
import Cart from './Cart';
import Account from './Account';
import Orders from './Account/components/Orders';
import Address from './Account/components/Address';
import Settings from './Account/components/Settings';
import CartProvider from '../context/CartProvider';
import 'react-toastify/dist/ReactToastify.css';

const App = ({
  match,
  location,
  history,
}) => {
  const [companyDetails, setCompanyDetails] = useState('');

  useEffect(() => {
    setCompanyDetails({
      ...match.params,
      ...qs.parse(location.search, { ignoreQueryPrefix: true }),
    });
  }, [JSON.stringify(match.params), location.search]);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={{ ...theme.default }}>
      <CartProvider>
        <Switch location={location} history={history}>
          <Route
            exact={true}
            path={openRoutes.homepage(companyDetails.slug)}
            component={Homepage}
          />
          {/* <Route
            exact={true}
            path={openRoutes.search(companyDetails.slug)}
            component={Search}
          /> */}
          <Route
            exact={true}
            path={openRoutes.cart(companyDetails.slug)}
            component={Cart}
          />
          <Route
            exact={true}
            path={protectedRoutes.account(companyDetails.slug)}
            component={Account}
          />
          <Route
            path={protectedRoutes.orders(companyDetails.slug)}
            component={Orders}
          />
          <Route
            path={protectedRoutes.address(companyDetails.slug)}
            component={Address}
          />
          <Route
            path={protectedRoutes.settings(companyDetails.slug)}
            component={Settings}
          />
          <Route component={ERROR_ROUTES.pageNotFound.component} />
        </Switch>
      </CartProvider>

      <ToastContainer
        bodyClassName={'toastify'}
        closeButton={<CloseButton />}
        position="top-center"
      />
    </ThemeProvider>
  );
};

App.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(App);
