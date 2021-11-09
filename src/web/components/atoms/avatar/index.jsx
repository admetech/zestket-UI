/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { AvatarContainer } from './styles';
import UseCommonForm from '../../common/services';
import WaitingIndicator from '../waitingIndicator';

function getInitials(fullName) {
  let initials;
  const fullNameSplitted = fullName.split(' ');

  if (fullNameSplitted.length >= 2) {
    initials = fullNameSplitted[0].charAt(0) + fullNameSplitted[1].charAt(0);
  } else {
    initials = fullNameSplitted[0].charAt(0);
  }
  return initials;
}

const Avatar = ({
  size = 'md',
  elemType = 'default',
}) => {
  const { GET_AVATAR } = UseCommonForm();
  const { data: userDetails } = useQuery(GET_AVATAR);

  return (
    <AvatarContainer size={size} elemType={elemType}>
      {userDetails ? getInitials(userDetails.me.name) : <WaitingIndicator msg='' />}
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  elemType: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
};

const CardAvatar = ({
  fullName = '',
  size = 'md',
}) => {
  const initials = getInitials(fullName);

  return (
    <AvatarContainer size={size}>
      {fullName ? initials : <WaitingIndicator msg='' />}
    </AvatarContainer>
  );
};

CardAvatar.propTypes = {
  fullName: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
};

export default Avatar;
export {
  CardAvatar,
};
