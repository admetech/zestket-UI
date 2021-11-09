import React, { Fragment } from 'react';
import BottomNavigationBar from 'src/web/components/BottomNavigationBar';
import { isUserAuthorized } from 'src/web/common/authUtils';
import UnauthorizedAccount from '../components/UnauthorizedAccount';
import AuthorizedAccount from '../components/AuthorizedAccount';

const AccountContainer = () => (
  <Fragment>
    {isUserAuthorized
      ? <AuthorizedAccount />
      : <UnauthorizedAccount />
    }
    <BottomNavigationBar />
  </Fragment>
);

export default AccountContainer;
