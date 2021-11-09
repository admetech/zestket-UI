import styled from 'styled-components';

export const FormGroupTitle = styled.p`
  margin: ${(p) => (p.isFirstChild ? '0 0 16px 2px' : '20px 0 16px 2px')};
  display: inline-block;
  font-size: var(--fs-14);
  font-weight: var(--fw-bold);

  &::first-letter {
    text-transform: uppercase;
  }
`;
