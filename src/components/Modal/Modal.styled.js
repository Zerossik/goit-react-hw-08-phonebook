import styled from 'styled-components';

export const Backdrop = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;
export const StyledModal = styled.div`
  position: relative;
  padding: 20px;
  width: calc(100% - 50px);

  border-radius: 10px;

  background-color: #ffffff;
`;

export const ModalBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  display: inline-block;
  padding: 5px;

  border: none;
  font-size: 24px;

  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.5);
    transition: transform 250ms linear;
  }
`;
