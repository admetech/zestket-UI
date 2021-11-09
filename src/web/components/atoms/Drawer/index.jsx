import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ESCAPE_KEY } from 'src/web/common/utils';
import {
  DrawerContainer,
  DrawerBackdrop,
  DrawerContent,
} from './styles';

let drawerRoot = document.getElementsByTagName('body')[0];

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    if (!drawerRoot) {
      drawerRoot = document.getElementsByTagName('body')[0];
    }
    drawerRoot.appendChild(this.el);
    document.addEventListener('keydown', this.escFunction, true);
  }

  componentWillUnmount() {
    if (drawerRoot) drawerRoot.removeChild(this.el);
    document.removeEventListener('keydown', this.escFunction, true);
  }

  escFunction = (event) => {
    if (event.defaultPrevented) {
      return; // return if default action cancelled
    }

    // checking all possible values for cross browser support
    const key = event.key || event.keyIdentifier || event.keyCode;
    const handled = false;
    if (key === 'Escape' || key === 'Esc' || key === ESCAPE_KEY) {
      this.props.toggleDrawer();
    }

    if (handled) {
      // Suppress "double action" if event handled
      event.preventDefault();
    }
  };

  render() {
    const {
      toggleDrawer,
      disableBackdropClick = false,
      children,
      isBodyScroll = false,
      backgroundBlur = false,
      darkBackground = true,
      isFullScreen = false,
      showDrawer = false,
      width = '480px',
    } = this.props;
    const drawer = (
      <DrawerContainer
        showDrawer={showDrawer}
        isBodyScroll={isBodyScroll}
        backgroundBlur={backgroundBlur}
      >
        {!isFullScreen ? (
          <DrawerBackdrop
            showDrawer={showDrawer}
            backgroundBlur={backgroundBlur}
            onClick={!disableBackdropClick && toggleDrawer}
            isBodyScroll={isBodyScroll}
            darkBackground={darkBackground}
          />
        ) : null}
        <DrawerContent
          isBodyScroll={isBodyScroll}
          isFullScreen={isFullScreen}
          showDrawer={showDrawer}
          width={width}
        >
          {children}
        </DrawerContent>
      </DrawerContainer>
    );

    return createPortal(drawer, this.el);
  }
}

Drawer.propTypes = {
  showDrawer: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  disableBackdropClick: PropTypes.bool,
  isBodyScroll: PropTypes.bool,
  backgroundBlur: PropTypes.bool,
  darkBackground: PropTypes.bool,
  isFullScreen: PropTypes.bool,
  width: PropTypes.string,
  children: PropTypes.node,
};

export default Drawer;
