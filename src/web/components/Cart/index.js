import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import EmptyCartPlaceholder from 'src/assets/images/empty_cart.svg';
import Main from '../templates/main';
import { CartContext } from '../../context/CartProvider';
import CartProducts from './CartProducts';
import * as S from './styles';
import Icon from '../atoms/icons';

// const getTotalAmount = (cart) => {
//   console.log('cart: ', cart);
//   // const total = cart.reduce((a, c) => {

//   // }, 0);
// };

const Cart = () => {
  const history = useHistory();
  const session = useContext(CartContext);

  return (
    <Fragment>
      <S.Container>
        <S.SubContainer>
          <S.GoBackAndTitle>
            <S.GoBack onClick={() => history.goBack()}>
              <Icon name='goback' width='24px' height='24px' />
            </S.GoBack>
            <S.HeaderTitle>Shopping bag</S.HeaderTitle>
          </S.GoBackAndTitle>
        </S.SubContainer>
      </S.Container>

      <Main>
        {session.cart?.length ? (
          <Fragment>
            <S.TotalCartItems>
              <S.TotalItems>{session.cart.length} item{session.cart.length > 1 ? 's' : null}</S.TotalItems>
              {/* <S.TotalPrice>{getTotalAmount(session.cart)}</S.TotalPrice> */}
            </S.TotalCartItems>
            <CartProducts products={session.cart} />
            <S.ThatsAllFolks>&mdash;</S.ThatsAllFolks>
          </Fragment>
        ) : (
          <S.EmptyCart>
            <S.EmptyCartImage src={EmptyCartPlaceholder} alt='' />
            <S.EmptyCartMessage>
              <h3>Your shopping bag is empty!</h3>
              <p>{"Let's pull some items from the shop ;)"}</p>
            </S.EmptyCartMessage>
            <S.BrowseAllProducts onClick={() => history.goBack()}>
              Browse products
            </S.BrowseAllProducts>
          </S.EmptyCart>
        )}
      </Main>

      {session.cart?.length ? (
        <S.PlaceOrder>
          <S.PlaceOrderButton>
            Proceed to Buy ({session.cart.length} item{session.cart.length > 1 ? 's' : null})
          </S.PlaceOrderButton>
        </S.PlaceOrder>
      ) : null}
    </Fragment>
  );
};

export default Cart;
