import React from 'react';
import PropTypes from 'prop-types';
import {
  add as addProduct,
  remove as removeProduct,
  get as getProductDetails,
  quantity as updateProductQty,
  list as productsList,
} from 'src/web/common/CartStorage';
import Icon from '../atoms/icons';
import * as S from './styles';

const AddToCart = ({
  product,
  updateSetCart,
}) => {
  const addProductItem = () => {
    addProduct(product, 1);
    updateSetCart({
      ...product,
      quantity: 1,
    });
  };

  const incProductItem = () => {
    updateProductQty(product.id, 1);
    updateSetCart({
      ...product,
      quantity: 1,
    });
  };

  const decProductItem = () => {
    if (getProductDetails(product.id)?.quantity <= 1) {
      removeProduct(product.id);
      updateSetCart({
        ...product,
        quantity: 0,
      });
    } else {
      updateProductQty(product.id, -1);
      updateSetCart({
        ...product,
        quantity: productsList().find((__) => __.id === product.id).quantity - 1,
      });
    }
  };

  return (
    <S.Container>
      <S.CartContainer>
        {getProductDetails(product.id)?.quantity ? (
          <S.CartContentDec role='button' onClick={decProductItem}>
            <Icon name='dec' width='24px' height='24px' />
          </S.CartContentDec>
        ) : null}
        <S.CartContent
          isCartValue={getProductDetails(product.id)?.quantity}
          onClick={() => (getProductDetails(product.id)?.quantity ? {} : addProductItem())}
        >
          {getProductDetails(product.id)?.quantity || 'ADD'}
        </S.CartContent>
        {getProductDetails(product.id)?.quantity ? (
          <S.CartContentInc role='button' onClick={incProductItem}>
            <Icon name='inc' width='24px' height='24px' />
          </S.CartContentInc>
        ) : null}
      </S.CartContainer>
    </S.Container>
  );
};

AddToCart.propTypes = {
  product: PropTypes.object,
  updateSetCart: PropTypes.func,
};

export default AddToCart;
