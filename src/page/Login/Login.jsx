import { useState } from 'react';
import {
  LoginWrap,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginLink,
} from './Login.styled';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/thunks';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // {name: 'zazaza', email: 'tl_wlad@mail.com', password: '1122334455'}
  const dispatch = useDispatch();

  const navigation = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => navigation('/', { replace: true }))
      .catch(error => console.log('error'));
    resetForm();
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

        <div>
          <LoginButton type="submit">LogIn</LoginButton>
          <LoginLink to="/singUp">Sing Up</LoginLink>
        </div>
      </LoginForm>
    </LoginWrap>
  );
};
export default Login;
