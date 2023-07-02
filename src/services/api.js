import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const createAccount = async user => {
  try {
    console.log(user);
    const { data } = await axios.post('/users/signup', user);
    console.log(data);
    return data;
  } catch (error) {
    return console.log(error.message);
  }
};

export const login = async user => {
  try {
    const { data } = await axios.post('/users/login', user);
    return data;
  } catch (error) {
    return console.log(error.message);
  }
};
