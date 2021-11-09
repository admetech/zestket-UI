import styled from 'styled-components';
import { FADE_ANIMATION_IN, FLEX } from '../styles';

export const NavbarContainer = styled.nav`
  z-index: var(--navbar-z-index);
  grid-area: navbar;
  padding: 0 24px;
  height: var(--navbar-height);
  box-shadow: 4px 1px 6px 0 #00000016;
  background-color: var(--color-white);
  will-change: opacity;
  ${FLEX('center', 'space-between')};
  ${FADE_ANIMATION_IN};
`;

export const NavbarLogo = styled.img`
  height: 40px;
  max-width: 100%;
  max-height: 100%;
`;

export const Company = styled.div`
  font-size: var(--fs-16);
  font-weight: var(--fw-extra-bold);
  color: var(--color-space-cadet);
  text-transform: uppercase;
`;

export const NavbarListItemContainer = styled.div`
  position: relative;
  ${FLEX('center')};
`;

export const NavbarListItemUserInformation = styled.div`
  text-align: right;
`;

export const NavbarListItem = styled.div`
  font-size: var(--fs-14);
  font-weight: var(--fw-bold);
  color: var(--color-mine-shaft);
  
  &:nth-child(2) {
    padding-top: 2px;
    font-size: var(--fs-12);
    font-weight: unset;
  }
`;
