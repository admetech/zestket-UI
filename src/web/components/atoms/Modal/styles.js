import styled, { css } from 'styled-components';
import { FLEX, FADE_ANIMATION_IN } from '../../common/styles';

export const ModalContainer = styled.div`
  z-index: var(--modal-backdrop-z-index);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100vh;
  backdrop-filter: ${(p) => (p.backgroundBlur ? 'blur(5px)' : 'unset')};
  opacity: 0;
  ${FADE_ANIMATION_IN};

  ${(p) => p.isBodyScroll && css`
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0,0,0,0.5);
  `}
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(p) => (p.backgroundBlur ? 'rgba(0,0,0,0.5)' : 'transparent')};
  
  ${(p) => p.isBodyScroll && css`
    background-color: unset;
  `}
`;

export const ModalContent = styled.div`
  z-index: var(--modal-content-z-index);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: fit-content;
  max-width: 90vw;
  height: fit-content;
  max-height: 90vh;

  ${(p) => p.isBodyScroll && css`
    bottom: unset;
    margin: 72px auto;
    width: 100%;
    height: unset;
    max-height: unset;
    padding-bottom: 10vh;
  `}

  ${(p) => p.theme.TABLET`
    width: 95%;
  `};
`;

export const ModalHead = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.CATSKILL_WHITE};
  padding: 12px 24px 6px;
  ${FLEX('center', 'space-between')};
`;

export const ModalTitle = styled.div`
  font-size: ${(p) => p.theme.XX_LARGE};
  font-weight: ${(p) => p.theme.SEMI_BOLD_FONT};
  color: ${(p) => p.theme.SHARK};

  ${(p) => p.theme.TABLET`
    font-size: ${p.theme.LARGE};
    font-weight: ${p.theme.REGULAR_FONT};
  `}
`;

export const ModalDescription = styled.p`
  font-size: ${(p) => p.theme.MEDIUM};
  color: ${(p) => p.theme.WATERLOO};

  ${(p) => p.theme.TABLET`
    font-size: ${p.theme.SMALL};
  `};
`;

export const ModalBody = styled.div`
  padding: 16px 24px;
  font-size: ${(p) => p.theme.MEDIUM};
  color: ${(p) => p.theme.SHARK};

  ${(p) => p.theme.TABLET`
    font-size: ${p.theme.SMALL};
  `};
`;

export const ModalActions = styled.div`
  width: 100%;
  padding: 12px 24px 24px;
  ${FLEX('center', 'flex-end')};
`;

export const ModalClose = styled.div`
  z-index: var(--modal-close-z-index);
  font-size: ${(p) => p.theme.HEADING};
  color: ${(p) => p.theme.SHARK};
  width: 32px;
  height: 32px;
  ${FLEX('center', 'center')};
  cursor: pointer;
`;
