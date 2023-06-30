import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsItems,
  selectFilterContacts,
} from 'redux/selects';
import { Dna } from 'react-loader-spinner';

export function ContactsList({ title }) {
  const filter = useSelector(selectFilterContacts); // получаем значение стейта - filter
  const contacts = useSelector(selectContactsItems); // получаем значение стейта - contacts
  const { isLoading, error } = useSelector(selectContacts);

  const findByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      <h2>{title}</h2>
      {isLoading && <Dna wrapperStyle={{ margin: 'auto' }} />}
      {error ? (
        <h2>{error}</h2>
      ) : (
        findByName().map(({ id, name, number }) => (
          <ContactListItem name={name} number={number} key={id} id={id} />
        ))
      )}
    </List>
  );
}
ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
};
