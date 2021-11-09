import React from 'react';
import PropTypes from 'prop-types';
import AnimatedLoader from 'src/assets/icons/animated_loader.svg';
import {
  WaitingIndicatorContainer,
  WaitingIndicatorSubContainer,
  WaitingLoader,
} from './styles';

const Loader = ({
  fullScreen = false,
  fullWidth = false,
  hasBackground = false,
  isFixed = false,
}) => (
  <WaitingIndicatorContainer
    fullWidth={fullWidth}
    fullScreen={fullScreen}
    isFixed={isFixed}
  >
    <WaitingIndicatorSubContainer hasBackground={hasBackground}>
      <WaitingLoader src={AnimatedLoader} alt='' />
    </WaitingIndicatorSubContainer>
  </WaitingIndicatorContainer>
);

Loader.propTypes = {
  fullScreen: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isModal: PropTypes.bool,
  hasBackground: PropTypes.bool,
  isFixed: PropTypes.bool,
  msg: PropTypes.string,
};

export default Loader;
