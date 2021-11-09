import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  ModalContainer,
  ModalBackdrop,
  ModalContent,
} from './styles';
import './styles.scss';
// import { ESCAPE_KEY } from '../../../common/utils';

let modalRoot = document.getElementsByTagName('body')[0];

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    if (!modalRoot) {
      modalRoot = document.getElementsByTagName('body')[0];
    }
    modalRoot.appendChild(this.el);
    document.addEventListener('keydown', this.escFunction, true);
  }

  componentWillUnmount() {
    if (modalRoot) modalRoot.removeChild(this.el);
    document.removeEventListener('keydown', this.escFunction, true);
  }

  escFunction = (event) => {
    if (event.defaultPrevented) {
      return; // return if default action cancelled
    }

    // checking all possible values for cross browser support
    const key = event.key || event.keyIdentifier || event.keyCode;
    const handled = false;
    // if (key === 'Escape' || key === 'Esc' || key === ESCAPE_KEY) {
    if (key === 'Escape' || key === 'Esc') {
      this.props.toggleModal();
    }

    if (handled) {
      // Suppress "double action" if event handled
      event.preventDefault();
    }
  };

  render() {
    const {
      toggleModal,
      disableBackdropClick = false,
      children,
      isBodyScroll = false,
      backgroundBlur = true,
    } = this.props;
    const modal = (
      <ModalContainer isBodyScroll={isBodyScroll}>
        <ModalBackdrop
          backgroundBlur={backgroundBlur}
          onClick={!disableBackdropClick && toggleModal}
          isBodyScroll={isBodyScroll}
        />
        <ModalContent isBodyScroll={isBodyScroll}>
          {children}
        </ModalContent>
      </ModalContainer>
    );

    return createPortal(modal, this.el);
  }
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func,
  disableBackdropClick: PropTypes.bool,
  isBodyScroll: PropTypes.bool,
  backgroundBlur: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
