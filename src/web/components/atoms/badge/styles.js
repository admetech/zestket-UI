import styled from 'styled-components';
import { FLEX } from '../../common/styles';

export const BadgeItem = styled.div`
  ${FLEX('center', 'center')};
  border-radius: 50%;
  text-transform: uppercase;
  font-size: var(--fs-10);
  font-weight: var(--fw-bold);
  color: var(--color-alert);
`;
