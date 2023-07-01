import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  padding: 4px 8px;

  border-radius: 4px;

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
  &.active {
    background-color: #005cb7;
    transform: scale(1.1);
    transition: transform 250ms linear;
    color: orange;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 15px;
`;
