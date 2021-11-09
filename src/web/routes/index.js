const ROUTE_CONSTANTS = {
  company: 'c',
};

export const openRoutes = {
  root: '/',
  homepage: (slug = ':slug') => `/${ROUTE_CONSTANTS.company}/${slug}`,
  // search: (slug = ':slug') => `/${ROUTE_CONSTANTS.company}/${slug}/search`,
  cart: (slug = ':slug') => `/${ROUTE_CONSTANTS.company}/${slug}/cart`,
};

export const protectedRoutes = {
  account: (slug = ':slug') => `/${ROUTE_CONSTANTS.company}/${slug}/account`,
  orders: (slug = ':slug') => `/${ROUTE_CONSTANTS.company}/${slug}/account/orders`,
  address: (slug = ':slug') => `/${ROUTE_CONSTANTS.company}/${slug}/account/address`,
  settings: (slug = ':slug') => `/${ROUTE_CONSTANTS.company}/${slug}/account/settings`,
};

export const errorRoutes = {
  pageNotFound: '/404',
};
