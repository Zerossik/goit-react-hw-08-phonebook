import styled from 'styled-components';

export const StyledBtn = styled.button`
  padding: 4px 8px;

  border: none;
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

export const StyledText = styled.p`
  display: inline-block;
  margin-right: 10px;

  font-size: 18px;
  font-weight: 500;
`;
