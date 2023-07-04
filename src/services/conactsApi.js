import axios from 'axios';

// const baseUrl = 'https://6499c72379fbe9bcf83ff66b.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = async () => {
  try {
    const { data } = await axios.get(`/contacts`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addContact = async contact => {
  try {
    return await axios.post('/contacts', contact);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const removeContact = async id => {
  try {
    return await axios.delete(`/contacts/${id}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUser = async body => {
  try {
    const { data } = await axios.patch(`/contacts/${body.id}`, body.user);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
