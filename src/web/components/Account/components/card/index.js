import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from 'src/web/components/atoms/icons';
import { getUrlSlug } from 'src/web/common/utils';
import * as S from './styles';

const Card = ({
  items,
}) => {
  const slug = getUrlSlug();

  return (
    <S.Container>
      {items.map((item, index) => (
        <S.SubContainer
          key={index}
          as={Link}
          to={{ pathname: item.linkTo(slug) }}
        >
          {item.iconName ? <S.CardIcon>{item.iconName}</S.CardIcon> : null}
          <div>
            <S.CardName>{item.name}</S.CardName>
            <S.CardDesc>{item.desc}</S.CardDesc>
          </div>
          <S.CardArrow>
            <Icon name='arrow-right' width='24px' height='24px' />
          </S.CardArrow>
        </S.SubContainer>
      ))}
    </S.Container>
  );
};

Card.propTypes = {
  items: arrayOf(shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    iconName: PropTypes.string,
    linkTo: PropTypes.func,
  })).isRequired,
};

export default Card;
