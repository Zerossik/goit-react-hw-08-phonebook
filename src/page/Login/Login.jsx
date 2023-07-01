import { LoginWrap, LoginForm, LoginInput } from './Login.styled';
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

      <button type="submit">LogIn</button>
    </LoginForm>
  </LoginWrap>
);
