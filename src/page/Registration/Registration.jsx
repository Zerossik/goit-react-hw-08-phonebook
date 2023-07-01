import { RegWrap, RegForm, RegInput, RegButton } from './Registration.styled';
export const Registration = () => (
  <RegWrap>
    <h2>Registration new account</h2>
    <RegForm>
      <label>
        Name
        <RegInput type="text" required autoFocus placeholder="Name" />
      </label>

      <label>
        Email
        <RegInput type="email" required placeholder="Email" />
      </label>

      <label>
        Password
        <RegInput type="password" required placeholder="Password" />
      </label>
      <RegButton type="submit">Sing Up</RegButton>
    </RegForm>
  </RegWrap>
);
