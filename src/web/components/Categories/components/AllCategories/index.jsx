import React from 'react';
import PropTypes from 'prop-types';
import Products from 'src/web/components/Products';
import * as S from './styles';

const AllCategories = ({
  categories,
  slug,
}) => (
  <S.Container>
    {categories.BusinessAndProductCategories.edges.map((pItem) => (
      <S.CategoryContainer key={pItem.node.productcategory.id}>
        <S.CategoryName>
          {pItem.node.productcategory.name} ({pItem.node.productCount})
        </S.CategoryName>
        <Products
          categorySlug={pItem.node.productcategory.slug}
          slug={slug}
        />
      </S.CategoryContainer>
    ))}
  </S.Container>
);

AllCategories.propTypes = {
  categories: PropTypes.object,
  slug: PropTypes.string,
};

export default AllCategories;
