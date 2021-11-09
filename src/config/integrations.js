import { API_BASE_URL } from './env';

const root = API_BASE_URL;
const version = 'v1';
const BASE_URL_V1 = `${root}/${version}`;

const API_END_POINTS = {
  getOtp: `${BASE_URL_V1}/user/otp/send`,
  login: `${BASE_URL_V1}/user/token/`, // Get the token if params are correct
  userTokenRefresh: `${BASE_URL_V1}/user/token/refresh/`, // Refreshes the user access and refresh token
  accessTokenVerify: `${BASE_URL_V1}/user/token/verify/`, // Verify access token
  checkPincode: `${BASE_URL_V1}/communication/validate/pincode/`, // Verify pin code
  uploadMedia: `${BASE_URL_V1}/storage/upload`, // Upload a media
};

export default API_END_POINTS;
