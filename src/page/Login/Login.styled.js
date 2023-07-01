import styled from 'styled-components';

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
`;

export const LoginInput = styled.input`
  width: 250px;
  height: 34px;
  padding: 4px;
  outline: none;

  font-size: 18px;
`;
