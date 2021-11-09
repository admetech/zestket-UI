import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const getShadow = (elevation = 1) => {
  const extraEl = elevation - 1;
  const getSize = (v1, v24) => `${v1 + Math.round(((v24 - v1) / 23) * extraEl)}px`;
  const getShade = (y, blur, spread, alpha) => `0 ${getSize(y[0], y[1])} ${getSize(blur[0], blur[1])} ${getSize(spread[0], spread[1])} rgba(0,0,0,${alpha})`;

  return `box-shadow: ${getShade([2, 11], [1, 15], [-1, -7], 0.2)}, ${getShade([1, 24], [1, 38], [0, 3], 0.14)}, ${getShade([1, 9], [3, 46], [0, 8], 0.12)};`;
};

const BasePaper = styled.div`
  border-radius: ${(p) => (p.square ? 0 : 4)}px;
  width: ${(p) => p.w};
  height: ${(p) => p.h};
  background-color: ${(p) => (p.trans ? 'transparent' : 'var(--color-white)')};

  ${(p) => (p.elevate >= 1) && css`
    ${getShadow(p.elevate)}
  `};

  ${(p) => p.theme.PHONE`
    box-shadow: unset;
  `}
`;

const Paper = ({
  elevate = 1,
  square = false,
  children,
  w,
  h,
  trans = false,
  ...rest
}) => (
  <BasePaper
    square={square}
    elevate={elevate}
    w={w}
    h={h}
    trans={trans}
    {...rest}
  >
    {children}
  </BasePaper>
);

Paper.propTypes = {
  elevate: PropTypes.number,
  square: PropTypes.bool,
  w: PropTypes.string,
  h: PropTypes.string,
  trans: PropTypes.bool,
  children: PropTypes.node,
};

export default Paper;
