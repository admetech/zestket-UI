import React from 'react';
import { useHistory } from 'react-router-dom';
import ErrorPlaceholder from 'src/assets/images/error_404.png';
import * as S from './styles';

const PageNotFound = () => {
  const history = useHistory();

  return (
    <S.Wrapper>
      <S.ErrorImage src={ErrorPlaceholder} />
      <S.Content>Page not found</S.Content>
      <S.GoBack onClick={() => history.goBack()}>
        Back to home
      </S.GoBack>
    </S.Wrapper>
  );
};

export default PageNotFound;
