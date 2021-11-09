import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import './styles.scss';

const CloseButton = ({ closeToast }) => (
  <div
    title='Close'
    className='toastify-close-button'
    onClick={closeToast}
  >&times;</div>
);

CloseButton.propTypes = {
  closeToast: PropTypes.func,
};

const toaster = ({
  msg,
  type,
  unique = true,
  autoClose = 3000,
  position = 'bottom-left',
}) => (
  toast[type](msg, {
    toastId: unique ? `${type}_${msg}` : null,
    hideProgressBar: true,
    autoClose,
    position,
  })
);

export default toaster;
export {
  CloseButton,
};
