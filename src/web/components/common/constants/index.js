const INITIAL_OFFSET = 0;
const FETCH_DATA_LIMIT = 50;
const FETCH_DATA_LIMIT_FOR_PRODUCTS = 10;

export const queryPaginationIndicators = (type = '') => {
  let indicatorObject = null;

  switch (type) {
    case 'products': {
      indicatorObject = {
        first: FETCH_DATA_LIMIT_FOR_PRODUCTS,
      };
      break;
    }
    default: {
      indicatorObject = {
        first: FETCH_DATA_LIMIT,
      };
    }
  }

  return {
    ...indicatorObject,
    offset: INITIAL_OFFSET,
  };
};
