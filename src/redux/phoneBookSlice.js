import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './thunks';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = payload;
};
const handleRejected = (state, { payload }) => {
  state.contacts.error = payload;
  state.contacts.isLoading = false;
};
const handleFulfilledAddContact = (state, { payload }) => {
  return {
    ...state,
    contacts: {
      ...state.contacts,
      items: [...state.contacts.items, payload],
      isLoading: false,
    },
  };
};
const handleDeletContact = (state, { payload }) => {
  return {
    ...state,
    contacts: {
      ...state.contacts,

      items: state.contacts.items.filter(({ id }) => id !== payload),
      isLoading: false,
    },
  };
};
const phoneBook = createSlice({
  name: 'Phonebook',
  initialState,
  reducers: {
    filterAction: (state, { payload }) => ({
      ...state,
      filter: payload,
    }),
  },
  extraReducers: builder =>
    builder

      .addCase(fetchContactsThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContactThunk.fulfilled, handleDeletContact)

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected),
});

export const phoneBookReducer = phoneBook.reducer; // объект состояния
export const { filterAction } = phoneBook.actions; //Экшены
