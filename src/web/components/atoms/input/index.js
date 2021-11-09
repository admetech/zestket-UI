import React, { forwardRef, useState } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { Tooltip } from 'react-tippy';
import VisibilityOnIcon from 'src/assets/icons/visibility_on.svg';
import VisibilityOffIcon from 'src/assets/icons/visibility_off.svg';
import * as S from './styles';

const Input = forwardRef(({
  type = 'text',
  name,
  placeholder,
  required = false,
  isAutoFocus = false,
  isDisabled = false,
  defaultValue,
  onChange,
  onBlur,
  value,
  pattern,
  supportedFileExtensions,
  maxLength,
  autoComplete,
  onFocus,
  showVisibility = false,
  inputAdornment,
  patternHelpText = 'This field is required',
  span = 8,
  max,
  min,
  step,
  multiple,
  id,
  inputMode = 'text',
  isFocused = true,
  ...rest
}, ref) => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <S.BaseInputContainer {...rest} span={span} disabled={isDisabled}>
      {inputAdornment ? (
        <S.BaseInputAdornment>{inputAdornment}</S.BaseInputAdornment>
      ) : null}
      {(defaultValue || value) && isFocused ? (
        <S.BaseInputLabel isInputAdornment={inputAdornment}>
          {placeholder}
        </S.BaseInputLabel>
      ) : null}
      <S.BaseInput
        id={id}
        type={passwordShown ? 'text' : type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoFocus={isAutoFocus}
        disabled={isDisabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        accept={supportedFileExtensions}
        ref={ref}
        pattern={pattern}
        maxLength={maxLength}
        onFocus={onFocus}
        autoComplete={autoComplete}
        isInputAdornment={inputAdornment}
        max={max}
        min={min}
        step={step}
        defaultValue={defaultValue}
        multiple={multiple}
        inputMode={inputMode}
      />
      {patternHelpText && required ? (
        <Tooltip title={patternHelpText} position='top-end' size='small'>
          <S.BaseInputPatternHelpInfo />
        </Tooltip>
      ) : null}
      {/* {!isEmpty(errors) ? errors.condition && (
        <S.BaseInputErrorMsg>{errors.msg}</S.BaseInputErrorMsg>
      ) : null} */}
      {showVisibility ? (
        <S.BaseInputPasswordVisibility>
          <S.VisibilityIcon
            src={passwordShown ? VisibilityOnIcon : VisibilityOffIcon}
            onClick={() => setPasswordShown(!passwordShown)}
            alt=''
          />
        </S.BaseInputPasswordVisibility>
      ) : null}
    </S.BaseInputContainer>
  );
});

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  isAutoFocus: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: oneOfType([PropTypes.string, PropTypes.number]),
  pattern: PropTypes.string,
  maxLength: PropTypes.string,
  status: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: oneOfType([
      PropTypes.string,
      PropTypes.elementType,
    ]).isRequired,
  }),
  onFocus: PropTypes.func,
  autoComplete: PropTypes.string,
  showVisibility: PropTypes.bool,
  supportedFileExtensions: PropTypes.string,
  patternHelpText: PropTypes.string,
  span: PropTypes.number,
  inputAdornment: PropTypes.string,
  max: PropTypes.string,
  min: PropTypes.string,
  step: PropTypes.string,
  shrink: PropTypes.bool,
  multiple: PropTypes.bool,
  id: PropTypes.string,
  inputMode: PropTypes.string,
  isFocused: PropTypes.bool,
};

Input.displayName = 'Input';

export default Input;
