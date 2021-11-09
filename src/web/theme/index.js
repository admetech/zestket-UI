import { css, keyframes } from 'styled-components';

export const BREAKPOINTS = {
  PHONE: 576,
  TABLET: 768,
  DESKTOP: 1012,
  WIDE_DESKTOP: 1280,
  XL_DESKTOP: 1366,
};

export const transitionDurations = {
  VERY_FAST_TRANSIT: '80ms',
  FAST_TRANSIT: '160ms',
  MEDIUM_TRANSIT: '240ms',
  SLOW_TRANSIT: '320ms',
  VERY_SLOW_TRANSIT: '560ms',
};

const media = Object.keys(BREAKPOINTS).reduce(
  (acc, label) => ({
    ...acc,
    [label]: (...args) => css`
      @media (max-width: ${BREAKPOINTS[label]}px) {
        ${css(...args)}
      }
    `,
  }),
  {},
);

const mappedKeyFrames = {
  smoothBounce: keyframes`
    0% { transform: translateY(0); }
    20% { transform: translateY(0); }
    40% { transform: translateY(0); }
    50% { transform: translateY(5px); }
    80% { transform: translateY(0); }
    100% { transform: translateY(0); }
  `,
};

export default {
  default: {
    ...media,
    ...mappedKeyFrames,
    ...transitionDurations,
  },
};
