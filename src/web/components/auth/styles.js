import styled from 'styled-components';
import Button from '../atoms/button';
import Input from '../atoms/input';
import { FLEX } from '../common/styles';

export const Form = styled.form`
  margin: 16px auto 0;
  max-width: 360px;

  @media screen and (min-width: 769px) {
    margin: auto;
    border-radius: 4px;
  }
`;

export const CreateButton = styled(Button)`
  margin-top: var(--m-16);
  font-size: var(--fs-16);
  padding: 12px;
`;

export const LoginButton = styled(CreateButton)`
  position: fixed;
  max-width: 90%;
  bottom: 24px;
  left: auto;
  right: auto;

  @media screen and (min-width: 769px) {
    position: unset;
    max-width: unset;
    max-width: unset;
  }
`;

export const FormInput = styled(Input)`
  margin-bottom: 14px;
`;

export const Checkbox = styled.div`
  margin: 32px 0 8px;
  text-align: left;
  ${FLEX('center')};

  > input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  > div {
    padding-left: 6px;
    font-size: var(--fs-12);
    color: var(--color-mine-shaft);

    > span {
      color: var(--color-info);
    }
  }
`;
