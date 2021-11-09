import React, { useState } from 'react';
import * as S from '../styles';
import UseLoginForm from './services';

const Login = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const {
    loginUser,
  } = UseLoginForm();

  const changeHandler = (type) => (e) => {
    const { value } = e.target;

    if (type === 'username') setUsername(value);
    if (type === 'password') setPassword(value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!(username && password)) return;
    loginUser(username, password);
  };

  return (
    <S.Form onSubmit={submitForm}>
      <S.FormInput
        name='username'
        onChange={changeHandler('username')}
        placeholder='Employee ID'
        required={true}
        autoComplete='username'
      />
      <S.FormInput
        name='password'
        type='password'
        onChange={changeHandler('password')}
        placeholder='Password'
        required={true}
        autoComplete='new-password'
        showVisibility={true}
      />
      <S.LoginButton
        type='submit'
        text='Continue'
        disabled={!(username && password)}
        fullWidth={true}
      />
    </S.Form>
  );
};

export default Login;
