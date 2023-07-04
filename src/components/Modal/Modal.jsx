import { Backdrop, StyledModal, ModalBtn } from './Modal.styled';

export const Modal = ({ children, handleIsOpen }) => {
  return (
    <Backdrop>
      <StyledModal>
        <ModalBtn type="button" onClick={handleIsOpen}>
          X
        </ModalBtn>
        {children}
      </StyledModal>
    </Backdrop>
  );
};
