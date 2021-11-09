import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  bottom: auto;
  left: auto;
  z-index: var(--searchbar-z-index);
  height: var(--searchbar-height);
  padding: 12px 0 11px;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-wild-sand);
  overflow-anchor: none;
`;

export const FormContainer = styled.form`
  margin: 0 15px;
  padding: 8px;
  border-radius: 4px;
  font-size: var(--fs-14);
  color: var(--color-boulder);
  background-color: var(--color-wild-sand);
`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  padding: 4px 0;
  width: 100%;

  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: none;
  }
`;
