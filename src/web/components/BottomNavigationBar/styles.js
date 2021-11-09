import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FLEX } from '../common/styles';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--bottombar-z-index);
  padding: 8px 0;
  width: 100%;
  height: var(--bottombar-height);
  box-shadow: 0 0 1px 1px var(--color-gallery);
  background-color: var(--color-white);
  /* animation: slide-up var(--slow-transit) ease-out forwards;
  transform: translateY(var(--bottombar-height));

  @keyframes slide-up {
    to {
      transform: translateY(0);
    }
  } */

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const NavListItems = styled.div`
  ${FLEX('center')};
`;

export const NavListItemName = styled.div`
  margin-top: 2px;
  text-transform: uppercase;
  color: var(--color-manatee);
  font-size: var(--fs-10);
  font-weight: var(--fw-semi-bold);
`;

export const NavListItem = styled(Link)`
  position: relative;
  text-align: center;
  margin: auto;

  > svg {
    fill: var(--color-manatee);

    ${(p) => p.to.isActive && css`
      fill: var(--color-primary);
    `}
  }

  ${(p) => p.to.disabled && css`
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.4;
  `};

  > ${NavListItemName} {
    ${(p) => p.to.isActive && css`
      color: var(--color-primary);
    `}
  }
`;

export const IconWrapper = styled.div`
  position: relative;
`;

export const NavListItemCartCount = styled.div`
  position: absolute;
  top: -4px;
  right: -8px;
  min-width: 16px;
  height: 16px;
  line-height: 16px;
  background-color: var(--color-alert);
  border-radius: 4px;
  color: var(--color-white);
  font-size: var(--fs-12);
  font-weight: var(--fw-bold);
`;
