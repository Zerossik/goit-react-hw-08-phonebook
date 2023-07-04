import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  margin-top: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LoginInput = styled.input`
  width: 250px;
  height: 34px;
  padding: 4px;

  outline: none;
  font-size: 18px;

  border: none;
  border-bottom: 1px solid black;
  &:focus,
  &:hover {
    border-bottom: 1px solid #1976d2;
  }
`;
export const LoginButton = styled.button`
  font-size: 18px;
  font-weight: 500;

  padding: 4px 8px;
  margin-right: 20px;

  border-radius: 4px;
  border: none;

  background-color: #1976d2;

  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #005cb7;
    transform: scale(1.1);
    transition: transform 250ms linear;
  }
`;
export const LoginLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  color: #1976d2;

  font-size: 18px;

  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 250ms linear;
    color: #005cb7;
  }
`;
