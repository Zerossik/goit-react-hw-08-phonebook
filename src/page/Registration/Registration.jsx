import { useState } from 'react';
import { RegWrap, RegForm, RegInput, RegButton } from './Registration.styled';
import { createAccount } from 'services/api';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = evt => {
    evt.preventDefault();

    createAccount({ name, email, password });

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
