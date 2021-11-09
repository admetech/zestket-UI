import React from 'react';
import PropTypes from 'prop-types';
import { getUrlSlug } from 'src/web/common/utils';
import * as S from './styles';
import './index.scss';

const Navbar = () => {
  const slug = getUrlSlug();

  return (
    <S.Container id='navbar'>
      <S.SubContainer>
        <S.Logo>{slug || 'adme'}</S.Logo>
      </S.SubContainer>
    </S.Container>
  );
};

Navbar.propTypes = {
  slug: PropTypes.string,
};

export default Navbar;
