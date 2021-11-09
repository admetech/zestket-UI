import { gql } from '@apollo/client';

const UseCategoriesForm = () => {
  const GET_CATEGORIES = gql`
    query (
      $company_Slug: String!,
    ) {
      BusinessAndProductCategories (
        company_Slug: $company_Slug,
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            productcategory {
              id
              name
              slug
            }
            productCount
          }
        }
      }
    }
  `;

  return {
    GET_CATEGORIES,
  };
};

export default UseCategoriesForm;
