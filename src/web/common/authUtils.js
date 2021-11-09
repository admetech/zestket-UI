import API_END_POINTS from '../../config/integrations';
import toaster from '../components/atoms/toaster';
import { RESPONSE_CODES } from '../../config/definitions';
import { postWithResponseObject } from './restApiFunctions';
import { APP_ENVIRONMENT } from '../../config/env';
import { openRoutes } from '../routes';

const RANDOM_TIMEOUT = 500;

export const isTokenAvailable = Boolean(localStorage.getItem('refreshToken')
  && sessionStorage.getItem('accessToken'));

export const setAuthCredentials = (access, refresh) => {
  localStorage.setItem('refreshToken', refresh);
  sessionStorage.setItem('accessToken', access);
};

export const reloadWindow = () => {
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
};

/**
 * Check for accessToken existence
 * if exists then replace it with new token
 * if not exists then call getAccessAndNewRefreshToken()
 */

export const removeAuthCredentials = () => {
  localStorage.removeItem('refreshToken');
  sessionStorage.removeItem('accessToken');
};

export const logOut = (history) => {
  removeAuthCredentials();

  setTimeout(() => {
    history.push(openRoutes.root);
    reloadWindow();
  }, RANDOM_TIMEOUT);
};

/**
 * 1. Get the refresh token from localStorage
 * 2. If valid
 *   2.1. Make a POST API call with the current refresh token
 *   2.2. If status of OK, then setAuthCredentials for access and refresh token
 *        and return true else false for all other status codes
 * 3. If refresh token is unavailable then return false
 */
export const getAccessAndNewRefreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (refreshToken) {
    const formData = new FormData();
    formData.append('refresh', refreshToken);

    const response = await postWithResponseObject(
      API_END_POINTS.userTokenRefresh,
      formData,
    );

    if (response && (response.status === RESPONSE_CODES.OK)) {
      const { access, refresh } = response.data;
      let isAccessTokenExists = false;

      if (sessionStorage.getItem('accessToken')) {
        isAccessTokenExists = true;
      }
      if (!isAccessTokenExists) {
        reloadWindow();
      }

      setAuthCredentials(access, refresh);
      return true;
    }
    if (response && (response.status === RESPONSE_CODES.UNAUTHORIZED)) {
      removeAuthCredentials();
      reloadWindow();
      return false;
    }
    return false;
  }

  if (APP_ENVIRONMENT === 'development') {
    toaster({
      type: 'error',
      msg: 'Session expired!',
    });
  }

  return false;
};

export const verifyAccessToken = async () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const formData = new FormData();
  formData.append('token', accessToken);

  const response = await postWithResponseObject(
    API_END_POINTS.accessTokenVerify,
    formData,
  );

  if (response && (response.status === RESPONSE_CODES.OK)) {
    return true;
  }
  return false;
};

export const checkForAuth = async () => {
  if (sessionStorage.getItem('accessToken')) {
    const response = await verifyAccessToken();
    if (!response) {
      if (localStorage.getItem('refreshToken')) {
        const refreshTokenResponse = await getAccessAndNewRefreshToken();
        return refreshTokenResponse;
      }
      return false;
    }
    return response;
  }
  if (localStorage.getItem('refreshToken')) {
    const response = await getAccessAndNewRefreshToken();
    return response;
  }
  return false;
};

export const getAuthToken = () => {
  const token = sessionStorage.getItem('accessToken');
  if (!token) return undefined;
  return `JWT ${token}`;
};

export const isUserAuthorized = Boolean(sessionStorage.getItem('accessToken'));

export const isRefreshTokenAvailable = Boolean(localStorage.getItem('refreshToken'));
