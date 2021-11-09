import styled, { css } from 'styled-components';
import { FLEX } from '../../common/styles';

const size = {
  xs: css`
    min-height: 32px;
    min-width: 32px;
    font-size: var(--fs-12);
    line-height: 28px;
  `,
  sm: css`
    min-height: 40px;
    min-width: 40px;
    font-size: var(--fs-14);
    line-height: 40px;
  `,
  md: css`
    min-height: 48px;
    min-width: 48px;
    line-height: 48px;
  `,
  lg: css`
    min-height: 60px;
    min-width: 60px;
    line-height: 60px;
    font-size: var(--fs-20);
  `,
  xxl: css`
    min-height: 96px;
    min-width: 96px;
    line-height: 96px;
    font-size: var(--fs-24);
    background-color: var(--color-gallery);
  `,
  default: css`
    min-height: 36px;
    min-width: 36px;
    font-size: var(--fs-14);
    line-height: 36px;
  `,
};

const getSize = (p) => size[p.size] || size.default;

const AvatarContainer = styled.div`
  border-radius: 50%;
  color: var(--color-emperor);
  font-size: var(--fs-18);
  font-weight: var(--fw-semi-bold);
  user-select: none;
  text-transform: uppercase;
  ${FLEX('center', 'center')};

  ${(p) => ({
    navbar: css`
      background-color: var(--color-gallery);
    `,
  }[p.elemType] || css`
    background-color: var(--color-wild-sand);
  `)};

  ${(p) => getSize(p)};
`;

export { AvatarContainer };
