import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, removeContact } from '../services/conactsApi';
import { getUser, login, userLogout } from 'services/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await removeContact(id);

      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserThunk = createAsyncThunk(
  'phoneBook/getUser',
  (_, { rejectWithValue }) => {
    try {
      return getUser();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'PhoneBook/login',

  async (user, { rejectWithValue }) => {
    try {
      const data = await login(user);
      // dispatch(getUserThunk());

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'PhoneBook/Logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await userLogout();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
