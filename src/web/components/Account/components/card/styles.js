import styled from 'styled-components';
import { FLEX } from 'src/web/components/common/styles';

export const Container = styled.div`

`;

export const SubContainer = styled.div`
  position: relative;
  ${FLEX('center')};
  padding: 16px 20px;
  background-color: var(--color-white);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-wild-sand);
  }
`;

export const CardIcon = styled.div`
  margin-right: 20px;
`;

export const CardName = styled.div`
  color: var(--color-primary);
  font-weight: var(--fw-bold);
`;

export const CardDesc = styled.div`
  padding-top: 6px;
  color: var(--color-boulder);
  font-size: var(--fs-12);
`;

export const CardArrow = styled.div`
  position: absolute;
  right: 20px;
  top: 33.33%;
`;
