// Начальное состояние.
export const initialState = {
  contacts: {
    items: [],

    error: null,
  },
  auth: { name: '', email: '', isLogin: false },
  filter: '',
  access_token: null,
  isLoading: false,
};
