import styled from 'styled-components';
import { FLEX } from '../common/styles';

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

export const EmptyCart = styled.div`
  padding: 48px 30px;
  text-align: center;
`;

export const EmptyCartImage = styled.img`
  max-width: 100%;
  height: 192px;
  filter: drop-shadow(1px 2px 4px var(--color-silver-chalice));
`;

export const EmptyCartMessage = styled.div`
  margin: auto;
  padding: 32px 0 16px;

  > p {
    padding-top: 8px;
  }
`;

export const BrowseAllProducts = styled.div`
  margin: 16px auto 0;
  padding: 8px 24px;
  border: 1px solid currentColor;
  color: var(--primary-color);
  width: fit-content;
  cursor: pointer;
`;

export const PlaceOrder = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 8px 15px;
  background-color: var(--color-white);
  box-shadow: 0 0 1px 1px var(--color-gallery);
`;

export const PlaceOrderButton = styled.div`
  margin: 0 auto;
  padding: 16px;
  ${FLEX('center', 'center')};
  border-radius: 4px;
  color: var(--color-white);
  font-weight: var(--fw-semi-bold);
  background-color: var(--color-primary);
  cursor: pointer;

  @media screen and (min-width: 769px) {
    width: fit-content;
  }
`;

export const ThatsAllFolks = styled.div`
  margin: 30px 0;
  color: var(--color-boulder);
  text-align: center;
`;

export const TotalCartItems = styled.div`
  padding: 30px 15px 3px;
  ${FLEX('center', 'space-between')};
`;

export const TotalItems = styled.div``;
export const TotalPrice = styled.div``;
