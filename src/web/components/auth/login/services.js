import { useHistory } from 'react-router-dom';
import API_END_POINTS from 'src/config/integrations';
import toaster from 'src/web/components/atoms/toaster';
import { postWithResponseObject } from 'src/web/common/restApiFunctions';
import { RESPONSE_CODES } from 'src/config/definitions';
import { setAuthCredentials } from 'src/web/common/authUtils';

const UseLoginForm = () => {
  const history = useHistory();
  const loginUser = async (username, password) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const response = await postWithResponseObject(
      API_END_POINTS.login,
      formData,
    );

    if (response && (response.status === RESPONSE_CODES.OK)) {
      const { access, refresh } = response.data;
      setAuthCredentials(access, refresh);
      window.location.reload();
    } else {
      toaster({
        type: 'error',
        msg: 'Either employee ID or password is incorrect!',
      });
    }
  };

  return {
    loginUser,
  };
};

export default UseLoginForm;
