import styled, { css } from 'styled-components';

export const WaitingIndicatorContainer = styled.div`
  ${(p) => {
    if (p.fullWidth) {
      return css`
        width: 100%;
        height: max-content;
        text-align: center;
      `;
    }
    if (p.fullScreen) {
      return css`
        width: 100%;
        height: calc(100vh - var(--navbar-height));
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `;
    }
    return null;
  }};

  ${(p) => p.isFixed && css`
    z-index: var(--spinner-z-index);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const WaitingIndicatorSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  ${(p) => p.hasBackground && css`
    padding: 24px 32px;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(4px);
    box-shadow: 6px 6px 54px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
  `}
`;

export const WaitingLoader = styled.img`
  height: 12px;
`;
