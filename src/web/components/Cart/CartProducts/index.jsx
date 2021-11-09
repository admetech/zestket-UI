import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
} from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { CartContext } from 'src/web/context/CartProvider';
import AddToCart from 'src/web/components/AddToCart';
import ImagePlaceholder from 'src/assets/icons/image_placeholder.svg';
import ProductPlaceholder from 'src/web/components/Products/components/ProductPlaceholder';
import * as S from './styles';
import { getDiscountAsAmount } from '../../../common/utils';

const CartProducts = ({
  products,
}) => {
  const session = useContext(CartContext);
  const [cart, setCart] = useState(session);

  const updateSetCart = (productDetails) => {
    setCart(productDetails);
  };

  useEffect(() => {
    session.updateCart(cart);
  }, [JSON.stringify(cart), cart]);

  return (
    products ? (
      <S.Container>
        {products.map((product) => (
          <Fragment key={product.id}>
            <S.ProductCard>
              {product.pictures?.length ? (
                <S.ProductImageContainer bgColor={product.pictures[0].averageColor}>
                  <S.ProductPicture>
                    <LazyLoad once>
                      <S.ProductImage
                        src={product.pictures[0].url}
                        alt={product.name}
                      />
                    </LazyLoad>
                  </S.ProductPicture>
                </S.ProductImageContainer>
              ) : (
                <S.ProductPlaceholder>
                  <S.ImageIcon src={ImagePlaceholder} alt=''/>
                </S.ProductPlaceholder>
              )}
              <S.ProductDetails>
                <S.ProductName>{product.name}</S.ProductName>
                <S.ProductUnit>per unit</S.ProductUnit>
                <S.ProductPrice>
                  <span>
                    <S.ProductSalesPrice>
                      ₹{Math.round(Number(product.price.salesPrice) * product.quantity)}
                    </S.ProductSalesPrice>
                    {Number(product.price.salesPrice) <= Number(product.price.retailPrice) ? (
                      <S.ProductRetailPrice>
                        ₹{Math.round(Number(product.price.retailPrice) * product.quantity)}
                      </S.ProductRetailPrice>
                    ) : null}
                  </span>

                  {/* Add to cart */}
                  <AddToCart
                    product={product}
                    updateSetCart={updateSetCart}
                  />
                </S.ProductPrice>
                <S.DiscountedPrice>
                  {Number(product.price.salesPrice) <= Number(product.price.retailPrice) ? (
                    <Fragment>
                      {/* <div>You save&nbsp;</div> */}
                      <div>
                        {getDiscountAsAmount(
                          Number(product.price.salesPrice) * product.quantity,
                          Number(product.price.retailPrice) * product.quantity,
                        )} OFF
                      </div>
                    </Fragment>
                  ) : null}
                </S.DiscountedPrice>
              </S.ProductDetails>
            </S.ProductCard>
          </Fragment>
        ))}
      </S.Container>
    ) : <ProductPlaceholder />
  );
};

CartProducts.propTypes = {
  products: PropTypes.array,
};

export default CartProducts;
