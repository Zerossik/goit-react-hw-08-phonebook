import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  setToken(token) {
    axios.defaults.headers.common['Authorization'] = token;
  },
  unSetToken() {
    axios.defaults.headers.common['Authorization'] = null;
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
    if (data.token) token.setToken(`Bearer ${data.token}`);
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
