import styled from 'styled-components';
import { FLEX } from '../common/styles';

export const Container = styled.div`
`;

export const CartContainer = styled.div`
  width: 96px;
  border-radius: 4px;
  background-color: var(--color-athens-gray);
  border: 1px solid rgb(40, 48, 68, 12%);
  ${FLEX('center', 'center')};
  overflow: hidden;
  cursor: pointer;
  user-select: none;
`;

export const CartContent = styled.div`
  min-width: ${(p) => (p.isCartValue ? '34px' : '100%')};
  height: 32px;
  ${FLEX('center', 'center')};
  font-size: ${(p) => (p.isCartValue ? 'var(--fs-16)' : 'var(--fs-14)')};
  color: var(--color-primary);
  font-weight: var(--fw-bold);
`;

export const CartContentDec = styled.div`
  min-width: 26px;
  height: 32px;
  ${FLEX('center', 'center')};

  > svg {
    transform-origin: center center;
    transform: scale(0.7);
    fill: var(--color-dusty-gray);
  }
`;

export const CartContentInc = styled(CartContentDec)`
  color: var(--color-primary);

  > svg {
    fill: var(--color-primary);
  }
`;
