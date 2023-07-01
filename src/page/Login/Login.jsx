import { useState } from 'react';
import {
  LoginWrap,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginLink,
} from './Login.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log({ email, password });
    // ТУТ диспатчик юзера на авторизацию
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

        <LoginButton type="submit">LogIn</LoginButton>
        <LoginLink to="/singUp">Sing Up</LoginLink>
      </LoginForm>
    </LoginWrap>
  );
};
export default Login;
