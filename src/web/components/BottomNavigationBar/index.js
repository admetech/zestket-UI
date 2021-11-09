import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { getUrlSlug } from 'src/web/common/utils';
import { openRoutes, protectedRoutes } from '../../routes';
import * as S from './styles';
import Icon from '../atoms/icons';
import { CartContext } from '../../context/CartProvider';

const NAV_ITEMS = [
  {
    displayName: 'Home',
    name: 'home',
    path: (slug) => openRoutes.homepage(slug),
    isDisabled: false,
  },
  {
    displayName: 'Search',
    name: 'search',
    path: () => {},
    isDisabled: true,
  },
  {
    displayName: 'Cart',
    name: 'cart',
    path: (slug) => openRoutes.cart(slug),
    isDisabled: false,
  },
  {
    displayName: 'Account',
    name: 'account',
    path: (slug) => protectedRoutes.account(slug),
    isDisabled: false,
  },
];

const BottomNavigationBar = () => {
  const { pathname } = useLocation();
  const slug = getUrlSlug();
  const session = useContext(CartContext);
  const CartCount = session?.cart?.length;

  return (
    <S.Container>
      <S.NavListItems>
        {NAV_ITEMS.map((navItem) => (
          <S.NavListItem
            key={navItem.name}
            to={{
              pathname: navItem.path(slug),
              disabled: navItem.isDisabled,
              isActive: pathname.includes(navItem.path(slug)),
            }}
          >
            {navItem.name === 'cart' && CartCount ? (
              <S.NavListItemCartCount>
                {CartCount}
              </S.NavListItemCartCount>
            ) : null}
            <Icon name={navItem.name} width='24px' height='24px' />
            <S.NavListItemName>{navItem.displayName}</S.NavListItemName>
          </S.NavListItem>
        ))}
      </S.NavListItems>
    </S.Container>
  );
};

export default BottomNavigationBar;
