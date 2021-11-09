import API_END_POINTS from 'src/config/integrations';
import { postWithResponseObject } from 'src/web/common/restApiFunctions';

const UseLoginForm = () => {
  const getOtp = async (phoneNumber) => {
    const formData = new FormData();
    formData.append('phone', phoneNumber);

    const response = await postWithResponseObject(
      API_END_POINTS.getOtp,
      formData,
    );
    return response;
  };

  const loginUser = async (phoneNumber, otp) => {
    const formData = new FormData();
    formData.append('phone', phoneNumber);
    formData.append('password', otp);

    const response = await postWithResponseObject(
      API_END_POINTS.login,
      formData,
    );
    return response;
  };

  return {
    getOtp,
    loginUser,
  };
};

export default UseLoginForm;
