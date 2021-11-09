import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-left: 16px;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: calc(var(--navbar-height) - 6px);
  right: 0;
  width: 180px;
  border: 1px solid var(--color-gallery);
  max-height: 204px;
  overflow-y: auto;
  background-color: var(--color-white);
  border-radius: 4px;
  z-index: var(--dropdown-z-index);
  cursor: default;
`;

export const UserAvatarContainer = styled.div``;

export const DropdownItem = styled.div`
  display: block;
  padding: 8px 12px;
  font-size: var(--fs-14);
  color: var(--color-mine-shaft);
  text-decoration: none;
  cursor: pointer;

  /* ${(p) => p.variant === 'logout' && css`
    margin: 6px 0;
  `}; */

  &:hover {
    background-color: var(--color-wild-sand);
  };
`;

export const DropdownItemActions = styled.div`
  margin: 6px 0;
  /* border-top: 1px solid var(--color-gallery); */
`;
