import styled, { css } from 'styled-components';
import { FLEX } from 'src/web/components/common/styles';
import { FADE_ANIMATION_IN } from '../../common/styles';

const SPAN_WIDTH = 12.5; // span will be 8 in total which equals 100%

export const BaseInputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  height: 40px;
  border-radius: 4px;
  background-color: var(--color-white);
  border: 1px solid var(--color-alto);

  &:focus-within {
    border-color: var(--color-boulder);
  };

  ${(p) => p.disabled && css`
    opacity: 0.5;
  `};

  width: ${(p) => p.span * SPAN_WIDTH}%;
`;

export const BaseInputLabel = styled.label`
  position: absolute;
  top: -10px;
  left: 4px;
  padding: 0 4px;
  font-size: var(--fs-12);
  color: var(--color-boulder);
  background-color: var(--color-white);
  user-select: none;
  pointer-events: none; 
  ${FADE_ANIMATION_IN()};

  &::first-letter {
    text-transform: uppercase;
  }

  ${(p) => p.isInputAdornment && css`
    left: 44px;
  `}
`;

export const BaseInputAdornment = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 4px;
  width: 40px;
  height: 100%;
  font-size: var(--fs-14);
  color: var(--color-emperor);
  background-color: var(--color-wild-sand);
  border-radius: 4px 0 0 4px;
  ${FLEX('center', 'center')};
`;

export const BaseInput = styled.input`
  border: 0;
  padding: 0 24px 0 10px;
  height: 100%;
  width: 100%;
  letter-spacing: 0.0125rem;
  border: 0;
  border-radius: 4px;
  color: var(--color-mine-shaft);
  background-color: transparent;

  &:focus {
    outline: 0;
  };

  &::placeholder {
    opacity: 0.75;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:-internal-autofill-selected {
    background-color: transparent !important;
  };

  ${(p) => p.isInputAdornment && css`
    padding: 0 24px 0 48px;
  `}
`;

export const BaseInputPatternHelpInfo = styled.div`
  position: absolute;
  bottom: 12px;
  right: 4px;
  cursor: pointer;
  width: 12px;
  height: 12px;
  ${FLEX('center', 'center')};

  &::before {
    content: '';
    position: absolute;
    background-color: var(--color-error);
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;

export const BaseInputErrorMsg = styled.div`
  position: absolute;
  bottom: -14px;
  right: 4px;
  font-size: var(--fs-10);
  font-weight: var(--fw-regular);
  color: var(--color-error);
`;

export const BaseInputSuccessMsg = styled.div`
  position: absolute;
  bottom: -8px;
  left: 4px;
  font-size: var(--fs-12);
  color: var(--color-success);
`;

export const BaseInputPasswordVisibility = styled.div`
  position: absolute;
  bottom: 8px;
  right: 24px;
  width: 20px;
  height: 20px;
  ${FLEX('center', 'center')};
  cursor: pointer;
`;

export const VisibilityIcon = styled.img`
  width: 16px;
  filter: contrast(0.75);
`;
