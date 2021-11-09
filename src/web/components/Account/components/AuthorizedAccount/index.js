import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Icon from 'src/web/components/atoms/icons';
import Main from 'src/web/components/templates/main';
// import { CartContext } from 'src/web/context/CartProvider';
import { protectedRoutes } from 'src/web/routes';
import Card from '../card';
import * as S from './styles';

const ACCOUNT_DIVISIONS = [
  {
    name: 'Orders',
    type: 'orders',
    desc: 'Check your order status',
    // iconName: 'account_order',
    iconName: 'ao',
    linkTo: (slug) => protectedRoutes.orders(slug),
  },
  {
    name: 'Address',
    type: 'address',
    desc: 'Save addresses for a hassle-free checkout',
    // iconName: 'account_address',
    iconName: 'aa',
    linkTo: (slug) => protectedRoutes.address(slug),
  },
  {
    name: 'Settings',
    type: 'settings',
    desc: 'App settings',
    // iconName: 'account_settings',
    iconName: 'as',
    linkTo: (slug) => protectedRoutes.settings(slug),
  },
];

const AuthorizedAccount = () => {
  const history = useHistory();
  // const session = useContext(CartContext);

  return (
    <Fragment>
      <S.Container>
        <S.SubContainer>
          <S.GoBackAndTitle>
            <S.GoBack onClick={() => history.goBack()}>
              <Icon name='goback' width='24px' height='24px' />
            </S.GoBack>
            <S.HeaderTitle>My Account</S.HeaderTitle>
          </S.GoBackAndTitle>
        </S.SubContainer>
      </S.Container>

      <Main>
        <Card items={ACCOUNT_DIVISIONS} />
      </Main>
    </Fragment>
  );
};

export default AuthorizedAccount;
