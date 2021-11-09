import styled, { css } from 'styled-components';

export const FADE_ANIMATION_IN = (transitType = 'FAST_TRANSIT') => css`
  opacity: 0;
  animation: fadeAnimationIn ${(p) => p.theme[transitType]} ease forwards;
  @keyframes fadeAnimationIn {
    to {
      opacity: 1;
    }
  }
`;

export const FADE_ANIMATION_OUT = css`
  animation: fadeAnimationOut ${(p) => p.theme.FAST_TRANSIT} ease-out forwards;
  @keyframes fadeAnimationOut {
    to {
      opacity: 0;
    }
  }
`;

export const FLEX = (
  align = null,
  justify = null,
  direction = null,
  wrap = null,
) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-direction: ${direction};
  flex-wrap: ${wrap ? 'wrap' : null};
`;

export const TRUNCATE_TEXT = (
  maxWidth = null,
) => css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: ${maxWidth};
`;

export const CLAMP_TEXT = (
  lines = 3,
) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Separator = styled.div`
  margin: ${(p) => (p.size ? p.size * 8 : 32)}px 0;
  width: 100%;
  height: 1px;
  background-color: var(--color-wild-sand);
  border-radius: 1px;
`;

export const VerticalSeparator = styled.div`
  margin: 0 24px;
  width: 1px;
  height: var(--navbar-height);
  background-color: var(--color-gallery);
  border-radius: 1px;
`;
