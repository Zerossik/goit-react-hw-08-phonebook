import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSetToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const createAccount = async user => {
  try {
    const { data } = await axios.post('/users/signup', user);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async user => {
  try {
    const { data } = await axios.post('/users/login', user);
    if (data.token) token.setToken(data.token);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUser = async () => {
  try {
    const { data } = await axios('/users/current');

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const userLogout = async () => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unSetToken();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
