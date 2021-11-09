import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
} from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import RightArrow from 'src/assets/icons/right_arrow.svg';
import { CartContext } from 'src/web/context/CartProvider';
import ImagePlaceholder from 'src/assets/icons/image_placeholder.svg';
import * as S from './styles';
import AddToCart from '../../../AddToCart';
import { getDiscountAsPercentage } from '../../../../common/utils';

const AllProducts = ({
  products,
}) => {
  const session = useContext(CartContext);
  const [cart, setCart] = useState(session);

  const updateSetCart = (productDetails) => {
    setCart(productDetails);
  };

  useEffect(() => {
    session.updateCart(cart);
  }, [JSON.stringify(cart)]);

  return (
    <S.Container>
      {products.Products.edges.map((product) => (
        <Fragment key={product.node.id}>
          <S.ProductCard>
            <S.ProductDetails>
              <S.ProductName>{product.node.name}</S.ProductName>
              <S.ProductUnit>per unit</S.ProductUnit>
              <S.ProductPrice>
                <span>
                  <S.ProductSalesPrice>
                    ₹{Math.round(product.node.price.salesPrice)}
                  </S.ProductSalesPrice>
                  {Number(product.node.price.salesPrice) <= Number(product.node.price.retailPrice) ? (
                    <S.ProductRetailPrice>
                      ₹{Math.round(product.node.price.retailPrice)}
                    </S.ProductRetailPrice>
                  ) : null}
                </span>

                {/* Add to cart */}
                <S.AddToCartProductPage>
                  <AddToCart
                    product={product.node}
                    updateSetCart={updateSetCart}
                  />
                </S.AddToCartProductPage>
              </S.ProductPrice>
              <S.DiscountedPrice>
                {Number(product.node.price.salesPrice) <= Number(product.node.price.retailPrice) ? (
                  `${getDiscountAsPercentage(
                    Number(product.node.price.salesPrice),
                    Number(product.node.price.retailPrice),
                  )} OFF`
                ) : null}
              </S.DiscountedPrice>
            </S.ProductDetails>
            {product.node.pictures?.length ? (
              <S.ProductImageContainer bgColor={product.node.pictures[0].averageColor}>
                <S.ProductPicture>
                  <LazyLoad once>
                    <S.ProductImage
                      src={product.node.pictures[0].url}
                      alt={product.node.name}
                    />
                  </LazyLoad>
                </S.ProductPicture>
              </S.ProductImageContainer>
            ) : (
              <S.ProductPlaceholder>
                <S.ImageIcon src={ImagePlaceholder} alt=''/>
              </S.ProductPlaceholder>
            )}
          </S.ProductCard>

          {/* {<S.ProductSeparator />} */}
        </Fragment>
      ))}

      {products.Products.pageInfo.hasNextPage ? (
        <S.RemainingProducts>
          <div>view all products</div>
          <img src={RightArrow} />
        </S.RemainingProducts>
      ) : null}
    </S.Container>
  );
};

AllProducts.propTypes = {
  products: PropTypes.object,
};

export default AllProducts;
