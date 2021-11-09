import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { openRoutes } from '../../../routes';
import * as S from './styles';
import AddFollowUp from '../AddFollowUp';
import UserProfileDropdown from './UserProfileDropdown';
import UseCommonForm from '../services';
import WaitingIndicator from '../../atoms/waitingIndicator';
import { VerticalSeparator } from '../styles';

const DEFAULT_COMPANY = 'mktyz';

const Navbar = () => {
  const { GET_USER_DETAILS } = UseCommonForm();
  const { data: userDetails } = useQuery(GET_USER_DETAILS);

  return (
    <S.NavbarContainer>
      <Link to={openRoutes.root}>
        {userDetails ? (
          <S.Company>{userDetails.me.company.name || DEFAULT_COMPANY}</S.Company>
        ) : <WaitingIndicator msg='' />}
      </Link>

      <S.NavbarListItemContainer>
        <AddFollowUp />

        <VerticalSeparator />

        <S.NavbarListItemUserInformation>
          {userDetails ? (
            <Fragment>
              <S.NavbarListItem>{userDetails.me.name}</S.NavbarListItem>
              <S.NavbarListItem>{userDetails.me.role.title}</S.NavbarListItem>
            </Fragment>
          ) : <WaitingIndicator msg='' />}
        </S.NavbarListItemUserInformation>

        <UserProfileDropdown />
      </S.NavbarListItemContainer>
    </S.NavbarContainer>
  );
};

export default Navbar;
