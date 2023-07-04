import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import { List } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsItems,
  selectFilterContacts,
  selectIsLoading,
} from 'redux/selects';
import { Dna } from 'react-loader-spinner';
import { useEffect, useState } from 'react';

import { fetchContactsThunk } from 'redux/thunks';

export function ContactsList({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const filter = useSelector(selectFilterContacts);
  const contacts = useSelector(selectContactsItems);
  const { error } = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const findByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleIsOpen = () => {
    setIsOpen(isOpen => (isOpen = !isOpen));
  };

  return (
    <>
      <List>
        <h2>{title}</h2>
        {isLoading && <Dna wrapperStyle={{ margin: 'auto' }} />}
        {error ? (
          <h2>{error}</h2>
        ) : (
          findByName().map(({ id, name, number }) => (
            <ContactListItem
              name={name}
              number={number}
              key={id}
              id={id}
              isOpen={isOpen}
              handleIsOpen={handleIsOpen}
            />
          ))
        )}
      </List>
    </>
  );
}
ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
};
