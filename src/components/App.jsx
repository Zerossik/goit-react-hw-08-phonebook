import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../redux/thunks';
import { selectContactsItems } from 'redux/selects';
import { Route, Routes } from 'react-router-dom';
import { Shared } from './SharedLayout/Shared';
import { Navigation } from './Navigation/Navigation';
import { Home } from 'page/home/Home';
import { Login } from 'page/Login/Login';

export function App() {
  const contacts = useSelector(selectContactsItems); // получаем значение стейта - contacts

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      {/* <Section title={'Phonebook'}>
        <PhoneForm />
        <Filter />

        <ContactsList
          title={contacts.length === 0 ? 'Phone book is empty' : 'Contacts'}
        />
      </Section> */}
    </>
  );
}
