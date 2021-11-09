import styled from 'styled-components';
import Input from 'src/web/components/atoms/input';
import { FLEX } from '../../../common/styles/index';

export const Container = styled.div`
`;

export const SubContainer = styled.div`
  padding: var(--navbar-height-m) 15px 15px 15px;
  background-color: var(--color-white);
  min-height: calc(100vh - var(--bottombar-height));
  ${FLEX(null, 'center', 'column')};

  @media screen and (min-width: 769px) {
    padding: 30px;
  }
`;

export const Title = styled.div`
  font-size: var(--fs-24);
  font-weight: var(--fw-bold);
  color: var(--color-primary);
`;

export const Info = styled.p`
  padding-top: 12px;
  font-size: var(--fs-14);
  color: var(--color-mine-shaft);
`;

export const PhoneNumberAndOtp = styled.div`
  ${FLEX('center')};
`;

export const TextInput = styled(Input)`
  width: ${(p) => (p.isValid ? '70%' : '100%')};
  margin-top: 32px;
  border: 0;

  > * {
    font-size: var(--fs-16);
  }

  > div {
    background-color: transparent;
    border-right: 1px solid var(--color-gallery);
  }

  > input {
    font-weight: var(--fw-bold);

    &::placeholder {
      font-weight: normal;
    }
  }
`;

export const TextInputOtp = styled(Input)`
  margin-top: 32px;
  width: 50%;

  > * {
    font-size: var(--fs-16);
  }

  > div {
    background-color: transparent;
    border-right: 1px solid var(--color-gallery);
  }

  > input {
    font-weight: var(--fw-bold);

    &::placeholder {
      font-weight: normal;
    }
  }
`;

export const SendOtpButton = styled.div`
  margin: 32px 0 20px;
  padding: 8px 16px;
  ${FLEX('center', 'center')};
  border-radius: 4px;
  color: var(--color-shamrock);
  font-weight: var(--fw-semi-bold);
  cursor: pointer;
`;

export const SuccessOtp = styled.div`
  ${FLEX('center')};

  > div {
    padding-left: 8px;
    font-size: var(--fs-12);
    color: var(--color-shamrock);
  }
`;
