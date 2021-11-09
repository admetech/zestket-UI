import { gql } from '@apollo/client';
import { RESPONSE_CODES } from '../../../config/definitions';
import API_END_POINTS from '../../../config/integrations';
import { getAuthToken } from '../../common/authUtils';
import { postWithResponseObject } from '../../common/restApiFunctions';

const UseCommonForm = () => {
  const headers = {
    'Content-Type': 'multipart/form-data',
    authorization: getAuthToken(),
  };

  const uploadMedia = async (media) => {
    const formData = new FormData();
    formData.append('file', media);

    const response = await postWithResponseObject(
      API_END_POINTS.uploadMedia,
      formData,
      headers,
    );

    let uploadMediaResponse;
    if (response && (response.status === RESPONSE_CODES.CREATED)) {
      uploadMediaResponse = response.data.file;
    } else {
      uploadMediaResponse = false;
    }

    return uploadMediaResponse;
  };

  const GET_AVATAR = gql`
    query {
      me {
        name
      }
    }
  `;

  const GET_USER_DETAILS = gql`
    query {
      me {
        name
        role {
          title
          identifier
        }
        company {
          name
        }
      }
    }
  `;

  return {
    GET_AVATAR,
    GET_USER_DETAILS,
    uploadMedia,
  };
};

export default UseCommonForm;
