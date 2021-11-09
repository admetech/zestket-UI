import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { queryPaginationIndicators } from 'src/web/components/common/constants';
import { getUrlSlug } from 'src/web/common/utils';
import AllProducts from '../components/AllProducts';
import UseProductsForm from '../components/AllProducts/services';
import ProductPlaceholder from '../components/ProductPlaceholder';

const ProductsContainer = ({
  categorySlug,
}) => {
  const [firstAndOffset, _setFirstAndOffset] = useState(
    queryPaginationIndicators('products'),
  );
  const slug = getUrlSlug();

  const { GET_PRODUCTS } = UseProductsForm();

  const {
    data: products,
  } = useQuery(GET_PRODUCTS, {
    variables: {
      firstAndOffset,
      company_Slug: slug,
      category_Slug: categorySlug,
    },
  });

  return (
    products ? (
      <AllProducts
        products={products}
      />
    ) : <ProductPlaceholder />
  );
};

ProductsContainer.propTypes = {
  categorySlug: PropTypes.string,
};

export default ProductsContainer;
