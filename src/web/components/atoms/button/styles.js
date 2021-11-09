import styled, { css } from 'styled-components';
import { FLEX } from 'src/web/components/common/styles';

const variant = {
  primary: css`
    color: var(--color-white);
    border-color: var(--color-space-cadet);
  `,
  secondary: css`
    color: var(--color-space-cadet);
    background-color: transparent;
    border: 1px solid currentColor;
  `,
  ternary: css`
    color: var(--color-white);
    border-color: var(--color-silver-chalice);
  `,
  cancel: css`
    color: var(--color-space-cadet);
    background-color: transparent;
    border-color: transparent;

    &:hover {
      background-color: var(--color-space-cadet-light);
      transition: background-color var(--very-fast-transit) ease;
    }
  `,
  transparent: css`
    border-color: transparent;
    background-color: transparent;
    color: var(--color-space-cadet);

    &:hover {
      background-color: var(--color-space-cadet-light);
      transition: background-color var(--very-fast-transit) ease;
    }
  `,
  default: css`
    color: var(--color-white);
    background-color: var(--color-mine-shaft);
    border: 1px solid var(--color-silver-chalice);
  `,
};

const size = {
  sm: css`
    padding: 5px 12px;
    font-size: var(--fs-12);
  `,
  md: css`
    padding: 9px 16px;
    font-size: var(--fs-14);
  `,
  lg: css`
    padding: 11px 20px;
    font-size: var(--fs-16);
  `,
  default: css`
    padding: 9px 16px;
    font-size: var(--fs-14);
  `,
};

const getVariant = (p) => variant[p.variant] || variant.default;
const getSize = (p) => size[p.size] || size.default;

const BaseButton = styled.button`
  border-radius: 4px;
  width: fit-content;
  height: fit-content;
  transition: all ${(p) => p.theme.FAST_TRANSIT} ease;
  background-color: var(--color-space-cadet);
  font-weight: var(--fw-semi-bold);
  border: 1px solid var(--color-space-cadet);
  ${FLEX('center', 'center')};

  ${(p) => getVariant(p)};
  ${(p) => getSize(p)};

  &:hover {
    transition: all 180ms ease;
  }

  &:disabled {
    background-color: var(--color-silver-chalice);
    border-color: var(--color-silver-chalice);
    cursor: not-allowed;
  }

  ${(p) => p.fullWidth && css`
    width: 100%;
    padding: 11px 16px;
  `};
`;

export const BaseIcon = styled.img`
  margin-left: 8px;
  max-width: 20px;
  filter: invert(1);
`;

export {
  BaseButton,
};
