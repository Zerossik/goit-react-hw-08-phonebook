import PropTypes from 'prop-types';
import { ContactItem, ContactListButton } from './ContactsList.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/thunks';
import { Modal } from 'components/Modal/Modal';
import { UserUpdate } from 'components/PhonebookForm/UserUpdateForm';

export function ContactListItem({ id, name, number, isOpen, handleIsOpen }) {
  const dispatch = useDispatch();

  return (
    <>
      <ContactItem>
        <p>
          {name}: {number}
        </p>
        <ContactListButton type="button" onClick={handleIsOpen}>
          Update user
        </ContactListButton>
        <ContactListButton
          type="button"
          onClick={() => dispatch(deleteContactThunk(id))}
        >
          Delete
        </ContactListButton>
      </ContactItem>
      {isOpen && (
        <Modal handleIsOpen={handleIsOpen}>
          <UserUpdate id={id} />
        </Modal>
      )}
    </>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
