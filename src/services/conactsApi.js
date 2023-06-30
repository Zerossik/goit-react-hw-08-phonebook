import axios from 'axios';

const baseUrl = 'https://6499c72379fbe9bcf83ff66b.mockapi.io';

export const getContacts = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/contacts`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addContact = async contact => {
  try {
    return await axios.post(`${baseUrl}/contacts`, contact);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const removeContact = async id => {
  try {
    return await axios.delete(`${baseUrl}/contacts/${id}`);
  } catch (error) {
    throw new Error(error.message);
  }
};
