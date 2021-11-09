import styled from 'styled-components';
import { FADE_ANIMATION_IN, FLEX } from '../styles';

export const Wrapper = styled.main`
  position: relative;
  padding: 24px 24px 48px 24px;
  height: 100vh;
  background-color: var(--color-athens-gray);
  overflow-y: auto;
  ${FLEX('center', 'center')};
  flex-direction: column;
  will-change: opacity;
  ${FADE_ANIMATION_IN('MEDIUM_TRANSIT')};
`;

export const Content = styled.div`
  font-size: var(--fs-16);
  font-weight: var(--fw-semi-bold);
`;

export const ErrorImage = styled.img`
  max-width: 100%;
  height: 240px;
  filter: grayscale(1) contrast(1);
`;

export const GoBack = styled.div`
  margin: 32px auto 0;
  padding: 8px 24px;
  border: 1px solid currentColor;
  color: var(--primary-color);
  width: fit-content;
  cursor: pointer;
`;
