import styled from 'styled-components';
import { FLEX } from '../../../common/styles';

export const Container = styled.div`
  background-color: var(--color-white);
  padding-top: 24px;

  > div {
    &:first-child {
      padding-top: 0;
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-wild-sand);
    }
  }
`;

export const ProductCard = styled.div`
  position: relative;
  ${FLEX('flex-start')};
  margin: 0 15px;
  padding: 24px 0 60px;
`;

export const ProductImageContainer = styled.div`
  width: 96px;
  height: 96px;
  overflow: hidden;
  border-radius: 4px;
  ${FLEX('center')};
  background-color: ${(p) => p.bgColor || 'var(--color-white)'};
`;

export const ProductPicture = styled.picture``;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const ProductPlaceholder = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 4px;
  overflow: hidden;
  ${FLEX('center', 'center')};
`;

export const ImageIcon = styled.img`
  height: 48px;
  opacity: 0.6;
`;

export const AddToCartProductPage = styled.div`
  position: absolute;
  right: 0;
  bottom: 12px;
`;

export const ProductDetails = styled.div`
  flex: 1 1;
  margin-right: 12px;
`;

export const ProductName = styled.div`
  font-size: var(--fs-14);
`;

export const ProductUnit = styled.div`
  margin-top: 4px;
  font-size: var(--fs-12);
  color: var(--color-emperor);
`;

export const ProductPrice = styled.div`
  margin-top: 12px;
  ${FLEX('center', 'space-between')};

  > span {
    ${FLEX('center')};
  }
`;

export const ProductSalesPrice = styled.div`
  font-size: var(--fs-16);
  font-weight: var(--fw-semi-bold);
`;

export const ProductRetailPrice = styled.div`
  padding-left: 8px;
  font-size: var(--fs-12);
  color: var(--color-boulder);
  text-decoration: line-through;
`;

export const DiscountedPrice = styled.div`
  display: inline-block;
  color: var(--color-discount);
  font-weight: var(--fw-bold);
  font-size: var(--fs-12);
  text-transform: uppercase;
  border-radius: 2px;
`;

export const RemainingProducts = styled.div`
  margin: 16px auto 24px;
  padding: 6px 10px 6px 12px;
  width: fit-content;
  ${FLEX('center')};
  border-radius: 4px;
  background-color: var(--color-wild-sand);

  > div {
    margin-right: 6px;
    font-weight: var(--fw-semi-bold);
    color: var(--color-mine-shaft);
  }

  > img {
    margin-top: 2px;
    width: 14px;
  }
`;
