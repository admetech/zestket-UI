import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.main`
  position: relative;
  padding: 0 0 96px 0;
  background-color: var(--color-wild-sand);
  min-height: calc(100vh - var(--navbar-height-m));
`;

const SubContainer = styled.div`
  max-width: var(--main-max-width);
  margin: auto;
  padding-top: 1px;
  background-color: var(--color-wild-sand);
`;

const Title = styled.div`
  padding: 5px 0;
  font-family: var(--font-family-head);
  font-weight: var(--fw-extra-bold);
  font-size: var(--fs-24);
  color: var(--color-mine-shaft);
  text-transform: capitalize;
`;

const Main = ({
  children,
  title = '',
}) => (
  <Container>
    <SubContainer>
      {title ? <Title>{title}</Title> : null}
      {children}
    </SubContainer>
  </Container>
);

Main.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Main;
