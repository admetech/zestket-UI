import axios from 'axios';
import { RESPONSE_CODES } from './definitions';
import API_END_POINTS from './integrations';

// request interceptor to add the auth token header to requests
axios.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.authorization = `JWT ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refreshToken');

    if (
      refreshToken
      && error.response.status === RESPONSE_CODES.UNAUTHORIZED
      && !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const formData = new FormData();
      formData.append('refresh', refreshToken);

      return axios
        .post(API_END_POINTS.userTokenRefresh, formData)
        // eslint-disable-next-line consistent-return
        .then((res) => {
          if (res.status === RESPONSE_CODES.OK) {
            sessionStorage.setItem('accessToken', res.data.access);
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  },
);

export default axios;
