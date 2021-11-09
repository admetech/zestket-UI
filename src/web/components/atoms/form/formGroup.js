import styled, { css } from 'styled-components';
import { FLEX } from '../../common/styles';

/**
 * gx: gutter both horizontal and vertical
 * gh: gutter horizontal
 * gv: gutter vertical
 */

const DEFAULT_GUTTER = 2;

export const FormGroup = styled.div`
  ${FLEX()};

  ${(p) => p.gx && css`
    gap: ${(p) => p.gx * DEFAULT_GUTTER}px;
  `}

  ${(p) => p.gh && css`
    column-gap: ${(p) => p.gh * DEFAULT_GUTTER}px;
  `}

  ${(p) => p.gv && css`
    row-gap: ${(p) => p.gv * DEFAULT_GUTTER}px;
  `}
`;
