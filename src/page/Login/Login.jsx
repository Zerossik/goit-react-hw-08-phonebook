import {
  LoginWrap,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginLink,
} from './Login.styled';
import { Link } from 'react-router-dom';
export const Login = () => (
  <LoginWrap>
    <h2>Login</h2>
    <LoginForm>
      <label>
        Email <br />
        <LoginInput type="email" required autoFocus placeholder="Email" />
      </label>
      <label>
        Password <br />
        <LoginInput type="password" required placeholder="Password" />
      </label>

      <LoginButton type="submit">LogIn</LoginButton>
      <LoginLink to="/singUp">Sing Up</LoginLink>
    </LoginForm>
  </LoginWrap>
);
