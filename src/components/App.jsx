import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { fetchContactsThunk } from '../redux/thunks';
import { selectContactsItems, selectIsLogin } from 'redux/selects';
import { Route, Routes } from 'react-router-dom';
import { Shared } from './SharedLayout/Shared';
import { Home } from 'page/Home/Home';

const Login = lazy(() => import('../page/Login/Login'));
const Registration = lazy(() => import('page/Registration/Registration'));

export function App() {
  const contacts = useSelector(selectContactsItems); // получаем значение стейта - contacts
  const isLogin = useSelector(selectIsLogin);

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
          <Route path="/SingUp" element={<Registration></Registration>} />
        </Route>
        <Route path="*" element={<div>Нет такой страницы</div>} />
      </Routes>

      {}
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
