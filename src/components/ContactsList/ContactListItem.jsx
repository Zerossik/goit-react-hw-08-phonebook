import PropTypes from 'prop-types';
import { ContactItem, ContactListButton } from './ContactsList.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/thunks';

export function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <ContactListButton
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </ContactListButton>
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
