import styled, { css } from 'styled-components';
import { FADE_ANIMATION_IN } from '../../common/styles';

export const DrawerContainer = styled.div`
  z-index: var(--drawer-backdrop-z-index);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100vh;
  ${FADE_ANIMATION_IN()};
  transition: all ${(p) => p.theme.SLOW_TRANSIT} ease 0ms;
  
  ${(p) => !p.showDrawer && css`
    visibility: hidden;
    opacity: 0;
  `};

  ${(p) => p.showDrawer && css`
    opacity: 1;
    visibility: visible;
  `};

  ${(p) => p.backgroundBlur && css`
    backdrop-filter: blur(4px);
  `}

  ${(p) => p.isBodyScroll && css`
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0,0,0,0.5);

    ${p.backgroundBlur && css`
      backdrop-filter: blur(4px);
    `}
  `}
`;

export const DrawerBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(p) => (p.backgroundBlur ? 'rgba(0,0,0,0.5)' : 'transparent')};
  transition: all ${(p) => p.theme.SLOW_TRANSIT} ease 0ms;
  
  ${(p) => !p.showDrawer && css`
    visibility: hidden;
    opacity: 0;
  `};

  ${(p) => p.showDrawer && css`
    opacity: 1;
    visibility: visible;
  `};
  
  ${(p) => p.isBodyScroll && css`
    background-color: unset;
  `};

  ${(p) => p.darkBackground && css`
    background-color: rgba(0, 0, 0, 0.4);
  `};
`;

export const DrawerContent = styled.div`
  z-index: var(--drawer-content-z-index);
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 0 8px 0;
  background-color: var(--color-white);
  width: ${(p) => p.width};
  max-width: 600px;
  height: fit-content;
  height: 100vh;
  will-change: transform;
  overflow-y: auto;
  transform: translateX(100%);

  ${(p) => !p.showDrawer && css`
    animation: grow-out ${p.theme.MEDIUM_TRANSIT} ease-in forwards;

    @keyframes grow-out {
      0% {
        transform: translateX(0);
      };
      100% {
        transform: translateX(100%);
      };
    };
  `}


  ${(p) => p.showDrawer && css`
    animation: grow-in ${p.theme.MEDIUM_TRANSIT} ease-out forwards;

    @keyframes grow-in {
      0% {
        transform: translateX(100%);
      };
      100% {
        transform: translateX(0);
      };
    };
  `}

  ${(p) => p.isBodyScroll && css`
    bottom: unset;
    margin: 72px auto;
    height: unset;
    max-height: unset;
  `};

  ${(p) => p.isFullScreen && css`
    width: 100%;
    height: 100vh;
    max-width: unset;
    max-height: unset;
    overflow-y: auto;
    background-color: var(--color-white);
  `};

  ${(p) => p.theme.TABLET`
    margin: 0;
    width: 100%;
    max-width: unset;
  `};
`;
