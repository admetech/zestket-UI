const process = require('process');

const {
  REACT_APP_API_BASE_URL,
  REACT_APP_ENVIRONMENT,
} = process.env;

// COMMON
export const API_BASE_PATH = 'graph';
export const API_BASE_PATH_EXTERNAL = `${API_BASE_PATH}/external`;

/* DEV environment for experimental features */
export const API_BASE_URL = REACT_APP_API_BASE_URL || 'https://devapi.mrktyz.advertyzement.com';
export const APP_ENVIRONMENT = REACT_APP_ENVIRONMENT || 'development';
