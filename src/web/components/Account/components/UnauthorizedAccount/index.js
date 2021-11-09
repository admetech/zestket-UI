import React, { useState } from 'react';
import Icon from 'src/web/components/atoms/icons';
import Main from 'src/web/components/templates/main';
import Button from 'src/web/components/atoms/button';
import { toaster } from 'src/web/components/atoms';
import { RESPONSE_CODES } from 'src/config/definitions';
import { isInputANumber, PHONE_NUMBER_LENGTH } from 'src/web/common/utils';
import {
  setAuthCredentials,
  reloadWindow,
} from 'src/web/common/authUtils';
import UseLoginForm from './services';
import * as S from './styles';

const UnauthorizedAccount = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showSuccessOtpMessage, setShowSuccessOtpMessage] = useState(false);
  const { getOtp, loginUser } = UseLoginForm();

  const handlePhoneNumber = (e) => {
    const { value } = e.target;
    if (isInputANumber(value)) setPhoneNumber(value);
    return null;
  };

  const handleOtp = (e) => {
    const { value } = e.target;
    if (isInputANumber(value)) setOtp(value);
    return null;
  };

  const sendOtp = async () => {
    const response = await getOtp(phoneNumber);

    if (response && response.status === RESPONSE_CODES.ACCEPTED) {
      setShowSuccessOtpMessage(true);
    }
  };

  const handleLogin = async () => {
    const response = await loginUser(phoneNumber, otp);
    if (response && (response.status === RESPONSE_CODES.OK)) {
      const { access, refresh } = response.data;
      setAuthCredentials(access, refresh);
      reloadWindow();
    } else {
      toaster({
        type: 'error',
        msg: 'Either employee ID or password is incorrect!',
      });
    }
  };

  return (
    <S.Container>
      <Main>
        <S.SubContainer>
          <S.Title>Login</S.Title>
          <S.Info>We will send you a <strong>4 digit</strong> verification code</S.Info>
          <S.PhoneNumberAndOtp>
            <S.TextInput
              name='phoneNumber'
              inputAdornment={'+91'}
              placeholder={'enter your phone number'}
              maxLength={PHONE_NUMBER_LENGTH}
              inputMode={'numeric'}
              isAutoFocus={true}
              value={phoneNumber || ''}
              onChange={handlePhoneNumber}
              isFocused={false}
              isValid={phoneNumber.length === Number(PHONE_NUMBER_LENGTH)}
            />
            {phoneNumber.length === Number(PHONE_NUMBER_LENGTH) ? (
              <S.SendOtpButton onClick={sendOtp}>Send OTP</S.SendOtpButton>
            ) : null}
          </S.PhoneNumberAndOtp>
          {showSuccessOtpMessage ? (
            <S.SuccessOtp>
              <Icon name='checkmark' width={24} height={24} />
              <div><strong>4 digit</strong> OTP is sent on above mobile number.</div>
            </S.SuccessOtp>
          ) : null}

          {showSuccessOtpMessage ? (
            <S.TextInputOtp
              name='otp'
              placeholder={''}
              maxLength={'4'}
              inputMode={'numeric'}
              autoComplete={'one-time-code'}
              value={otp || ''}
              onChange={handleOtp}
              isFocused={false}
            />
          ) : null}

          {otp.length === 4 ? (
            <Button
              text='Verify and proceed'
              onClick={handleLogin}
            />
          ) : null}
        </S.SubContainer>
      </Main>
    </S.Container>
  );
};

export default UnauthorizedAccount;
