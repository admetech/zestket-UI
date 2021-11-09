import styled from 'styled-components';
import { FLEX } from 'src/web/components/common/styles';

export const Container = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--color-white);
  z-index: var(--navbar-z-index);
  transition: top ${(p) => p.theme.MEDIUM_TRANSIT};
`;

export const SubContainer = styled.div`
  padding: 0 15px;
  width: 100%;
  height: var(--navbar-height-m);
  background-color: var(--color-white);
  line-height: var(--navbar-height-m);

  @media screen and (min-width: 769px) {
    margin: auto;
    padding: 0 30px;
    max-width: var(--main-max-width);
    height: var(--navbar-height);
    text-align: center;
    ${FLEX('center', 'space-between')};
  };
`;

export const GoBackAndTitle = styled.div`
  ${FLEX('center')};
`;

export const GoBack = styled.div`
  width: 32px;
  height: 32px;
  ${FLEX('center')};
`;

export const HeaderTitle = styled.div`
  margin-left: 8px;
  font-size: var(--fs-16);
  font-weight: var(--fw-semi-bold);
`;

export const AddAddressButton = styled.div`
  position: sticky;
  top: 56px;
  z-index: 12;
  padding: 12px 20px;
  text-align: center;
  color: var(--color-link);
  font-size: var(--fs-12);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-wild-sand);
`;

export const AddressViewList = styled.div`

`;
