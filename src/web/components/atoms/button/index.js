import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import SendIcon from 'src/assets/icons/send.png';
import { BaseButton, BaseIcon } from './styles.js';

const Button = forwardRef(({
  text = 'button',
  variant = 'primary',
  disabled = false,
  type = 'button',
  fullWidth = false,
  size = 'md',
  title,
  iconType,
  ...rest
}, ref) => (
  <BaseButton
    type={type}
    disabled={disabled}
    size={size}
    variant={variant}
    fullWidth={fullWidth}
    title={title}
    ref={ref}
    {...rest}
  >
    <div>{text}</div>
    {iconType === 'send' ? (
      <BaseIcon src={SendIcon} alt='Send' />
    ) : null}
  </BaseButton>
));

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'ternary',
    'transparent',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  fullWidth: PropTypes.bool,
  iconType: PropTypes.string,
};

Button.displayName = 'Button';

export default Button;
