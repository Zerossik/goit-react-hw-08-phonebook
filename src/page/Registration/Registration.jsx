import { useState } from 'react';
import { RegWrap, RegForm, RegInput, RegButton } from './Registration.styled';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log({ name, email, password });
    // ТУТ Диспатчим объект с юзером в thunk для РЕГИСТРАЦИИ
    resetForm();
  };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <RegWrap>
      <h2>Registration new account</h2>
      <RegForm onSubmit={handleSubmit}>
        <label>
          Name
          <RegInput
            type="text"
            name="name"
            required
            autoFocus
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <RegInput
            type="email"
            name="email"
            required
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <RegInput
            type="password"
            name="password"
            required
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <RegButton type="submit">Sing Up</RegButton>
      </RegForm>
    </RegWrap>
  );
};
export default Registration;
