import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { lazy } from 'react';
import { selectContactsItems } from 'redux/selects';
import { Route, Routes } from 'react-router-dom';
import { Shared } from './SharedLayout/Shared';
import { Home } from 'page/Home/Home';
import { PrivateRoute, PublicRoute } from 'Routes/Routes';
import { useSelector } from 'react-redux';

const Login = lazy(() => import('../page/Login/Login'));
const Registration = lazy(() => import('page/Registration/Registration'));

export function App() {
  const contacts = useSelector(selectContactsItems); // получаем значение стейта - contacts

  return (
    <>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/SingUp"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                {' '}
                <PhoneForm />
                <Filter />
                <ContactsList
                  title={
                    contacts.length === 0 ? 'Phone book is empty' : 'Contacts'
                  }
                />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<div>Нет такой страницы</div>} />
      </Routes>
    </>
  );
}
