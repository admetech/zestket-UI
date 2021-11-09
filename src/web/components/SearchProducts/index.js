import React from 'react';
import * as S from './styles';

const SearchProducts = () => {
  const searchHandler = (_e) => {
    // const { value } = e.target;
  };

  return (
    <S.Container>
      <S.FormContainer onSubmit={() => {}}>
        <S.Input
          type='text'
          name='search'
          placeholder='Search products...'
          onChange={() => searchHandler}
        />
      </S.FormContainer>
    </S.Container>
  );
};

export default SearchProducts;
