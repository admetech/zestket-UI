import { gql } from '@apollo/client';

const UseProductsForm = () => {
  const GET_PRODUCTS = gql`
    query (
      $first: Int,
      $last: Int,
      $after: String,
      $before: String,
      $company_Slug: String!,
      $category_Slug: String,
    ) {
      Products (
        first: $first,
        last: $last,
        after: $after,
        before: $before,
        company_Slug: $company_Slug,
        category_Slug: $category_Slug
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            name
            pictures {
              url
              averageColor
            }
            price {
              salesPrice
              retailPrice
              discountType
            }
          }
        }
      }
    }
  `;

  return {
    GET_PRODUCTS,
  };
};

export default UseProductsForm;
