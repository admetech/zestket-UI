import styled from 'styled-components';
import { FLEX } from '../../../common/styles';

export const Container = styled.div`
`;

export const CategoryContainer = styled.div`
  margin-bottom: 12px;
`;

export const CategoryName = styled.div`
  position: sticky;
  top: var(--searchbar-height);
  z-index: var(--category-name-z-index);
  padding: 12px 16px;
  color: var(--mine-shaft);
  font-weight: var(--fw-bold);
  font-size: var(--fs-14);
  background-color: var(--color-white);
  ${FLEX('center')};
  text-transform: capitalize;
  border-bottom: 1px solid var(--color-wild-sand);
`;
