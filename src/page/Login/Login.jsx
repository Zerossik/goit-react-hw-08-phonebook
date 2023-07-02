import { useEffect, useState } from 'react';
import {
  LoginWrap,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginLink,
} from './Login.styled';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/thunks';
import { selectIsLogin } from 'redux/selects';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // {name: 'zazaza', email: 'tl_wlad@mail.com', password: '1122334455'}
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  const navigation = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   if (isLogin) navigation('/');
  // }, [isLogin, navigation]);

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(loginThunk({ email, password }));
    resetForm();
    console.log(isLogin);
  };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
    }
  };
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <LoginWrap>
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit}>
        <label>
          Email <br />
          <LoginInput
            type="email"
            name="email"
            required
            autoFocus
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password <br />
          <LoginInput
            type="password"
            name="password"
            required
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <LoginButton type="submit">LogIn</LoginButton>
        <LoginLink to="/singUp">Sing Up</LoginLink>
      </LoginForm>
    </LoginWrap>
  );
};
export default Login;
