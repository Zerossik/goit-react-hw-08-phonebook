import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../redux/thunks';
import { selectContactsItems } from 'redux/selects';

export function App() {
  const contacts = useSelector(selectContactsItems); // получаем значение стейта - contacts

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <Section title={'Phonebook'}>
      <PhoneForm />
      <Filter />

      <ContactsList
        title={contacts.length === 0 ? 'Phone book is empty' : 'Contacts'}
      />
    </Section>
  );
}
