import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logOut } from '../../../../common/authUtils';
// import { protectedRoutes } from '../../../routes';
import Avatar from '../../../atoms/avatar';
import * as S from './styles';

const UserProfileDropdown = () => {
  const history = useHistory();
  const refOfOuterBlock = useRef();
  const [isDropdownOpen, toggleDropdown] = useState(false);

  const handleClickOutside = (e) => {
    if (refOfOuterBlock.current.contains(e.target)) return;
    toggleDropdown(false);
  };

  // const handleActionRoutes = (type) => () => {
  //   toggleDropdown(false);
  //   history.push(protectedRoutes[type]);
  // };

  useEffect(() => {
    if (isDropdownOpen) document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <S.Container ref={refOfOuterBlock}>
      <S.UserAvatarContainer onClick={() => toggleDropdown(!isDropdownOpen)}>
        <Avatar size={'sm'} elemType={'navbar'} />
      </S.UserAvatarContainer>
      {isDropdownOpen ? (
        <S.DropdownContainer>
          {/* <S.DropdownItem
            as={Link}
            to={protectedRoutes.profile}
            onClick={handleActionRoutes('profile')}
          >Profile</S.DropdownItem>
          <S.DropdownItem
            as={Link}
            to={protectedRoutes.settings}
            onClick={handleActionRoutes('settings')}
          >Settings</S.DropdownItem> */}
          <S.DropdownItemActions>
            <S.DropdownItem variant='logout' onClick={() => logOut(history)}>Logout</S.DropdownItem>
          </S.DropdownItemActions>
        </S.DropdownContainer>
      ) : null}
    </S.Container>
  );
};

export default UserProfileDropdown;
