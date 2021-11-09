import React from 'react';
import { useQuery } from '@apollo/client';
import { getUrlSlug } from 'src/web/common/utils';
import WaitingIndicator from 'src/web/components/atoms/waitingIndicator';
import AllCategories from '../components/AllCategories';
import UseCategoriesForm from '../components/AllCategories/services';

const CategoriesContainer = () => {
  const { GET_CATEGORIES } = UseCategoriesForm();
  const slug = getUrlSlug();

  const {
    data: categories,
  } = useQuery(GET_CATEGORIES, {
    variables: {
      company_Slug: slug,
    },
  });

  return (
    categories ? (
      <AllCategories
        categories={categories}
        slug={slug}
      />
    ) : <WaitingIndicator msg='' fullScreen={true} isFixed={true} />
  );
};

export default CategoriesContainer;
