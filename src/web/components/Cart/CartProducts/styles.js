import styled from 'styled-components';
import { FLEX } from '../../common/styles';

export const Container = styled.div`
  margin: 12px 0 16px;
`;

export const ProductCard = styled.div`
  margin: 8px 0;
  padding: 24px 16px;
  ${FLEX('center')};
  background-color: var(--color-white);
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
  border: 1px solid var(--color-gallery);
`;

export const ImageIcon = styled.img`
  height: 48px;
  opacity: 0.6;
`;

export const ProductDetails = styled.div`
  flex: 1 1;
  margin-left: 12px;
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
  ${FLEX('center')};
  color: var(--color-discount);
  font-weight: var(--fw-bold);
  font-size: var(--fs-12);
  border-radius: 2px;

  /* > div:not(:last-child) {
    font-weight: var(--fw-regular);
  } */
`;
