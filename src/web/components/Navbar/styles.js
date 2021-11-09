import styled, { css } from 'styled-components';
import { FLEX } from '../common/styles';

export const Container = styled.nav`
  width: 100%;
  background-color: var(--color-white);
  z-index: var(--navbar-z-index);
  transition: top ${(p) => p.theme.MEDIUM_TRANSIT};
`;

export const SubContainer = styled.div`
  padding: 0 15px;
  width: 100%;
  height: var(--navbar-height-m);
  background-color: var(--color-white);

  @media screen and (min-width: 769px) {
    margin: auto;
    padding: 0 30px;
    max-width: var(--main-max-width);
    height: var(--navbar-height);
    text-align: center;
    ${FLEX('center', 'space-between')};
  };
`;

export const LogoContainer = styled.div`
  text-decoration: none;
  height: 100%;
  line-height: var(--navbar-height-m);

  @media screen and (min-width: 769px) {
    line-height: var(--navbar-height);
  };
`;

export const Logo = styled.div`
  font-size: var(--fs-14);
  font-weight: var(--fw-bold);
  line-height: var(--navbar-height-m);
  text-transform: capitalize;

  @media screen and (min-width: 769px) {
    font-size: var(--fs-18);
  };
`;

export const NavItems = styled.ul`
  display: none;

  @media screen and (min-width: 769px) {
    margin: 0;
    padding: 0;
    list-style-type: none;
    ${FLEX('center')};
  };
`;

export const NavItem = styled.div`
  display: inline-block;
  padding: 8px 12px;
  font-size: var(--fs-12);
  color: var(--color-emperor);
  border-radius: 4px;
  text-decoration: none;
  border: 1px solid currentColor;

  ${(p) => p.variant === 'login' && css`
    margin-right: 24px;
    padding: unset;
    border: 0;

    &:hover {
      color: var(--color-mine-shaft);
    };

    ${p.theme.PHONE`
      margin-right: 16px;
    `};
  `};

  ${(p) => p.variant === 'signup' && css`
    border: 0;
    padding: 9px 16px;
    background-color: var(--color-emperor);
    color: var(--color-white);
  `};

  ${(p) => p.variant === 'logout' && css`
    margin-left: 24px;
    border: 0;
    padding: 8px;
    cursor: pointer;
  `};
`;

export const NavbarMobileMenu = styled.div`
  position: absolute;
  top: 12px;

  @media screen and (min-width: 769px) {
    display: none;
  };
`;

export const NavbarHamburgerCheckbox = styled.input`
  z-index: 20;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 24px;
  height: 24px;
  opacity: 0;

  &[type='checkbox']:checked ~ div {
    display: block;
  }

  &[type='checkbox']:checked ~ span {
    > div {
      transition: all 180ms ease;
      background-color: var(--color-mine-shaft);

      &:nth-child(1) {
        transform: rotate(45deg) translateX(4px);
      }

      &:nth-child(2) {
        display: none;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translateX(4px);
        width: 20px;
      }
    }
  }
`;

export const NavbarHamburger = styled.span`
  z-index: 3;
  position: relative;
  width: 24px;
  height: 24px;
  ${FLEX(null, 'center', 'column')};

  > div {
    background-color: var(--color-mine-shaft);
    height: 2px;
    border-radius: 2px;

    &:nth-child(1) { width: 20px; }
    &:nth-child(2) { width: 24px; }
    &:nth-child(3) { width: 16px; }
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;

export const NavbarBackdrop = styled.div`
  z-index: 1;
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  animation: navbar-backdrop 80ms linear;
  @keyframes navbar-backdrop {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const NavbarListItemsMobile = styled.div`
  display: none;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  padding: 72px 16px 16px 24px;
  width: 75%;
  height: 100vh;
  background-color: var(--color-white);
  backdrop-filter: blur(4px);
  will-change: transform;
  animation: navbar-pull-right ${(p) => p.theme.FAST_TRANSIT} ease forwards;

  @keyframes navbar-pull-right {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const NavbarListItem = styled.div`
  padding: 16px 0;
  width: 100%;
  text-align: left;
  text-decoration: none;
  letter-spacing: 0.025rem;
  color: var(--color-mine-shaft);
  ${FLEX('center')};
`;

export const NavbarListItemIcon = styled.img`
  width: 24px;
`;

export const NavbarListItemText = styled.div`
  padding-left: 12px;
  font-weight: var(--fw-bold);
`;

export const NavbarAuth = styled.div`
  padding: 6px 0;
  ${FLEX('center')};
  border-radius: 2px;
  border: 1px solid var(--color-alto);
`;

export const NavbarAuthItem = styled.div`
  padding: 6px 12px;
  width: 50%;
  display: block;
  text-decoration: none;
  font-size: var(--fs-12);
  font-weight: var(--fw-bold);
  color: var(--color-mine-shaft);

  &:not(:last-child) {
    border-right: 1px solid var(--color-alto);
  }
`;

export const UserAvatar = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;

  @media screen and (min-width: 769px) {
    display: none;
  };
`;
