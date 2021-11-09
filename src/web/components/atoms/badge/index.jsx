import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Badge = ({
  msg,
}) => (
  <S.BadgeItem>
    {msg}
  </S.BadgeItem>
);

Badge.propTypes = {
  msg: PropTypes.string,
};

export default Badge;
