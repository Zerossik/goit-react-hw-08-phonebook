// Начальное состояние.
export const initialState = {
  contacts: {
    items: [],

    error: null,
  },
  auth: { name: '', email: '', isLogin: false },
  filter: '',
  token: null,
  isLoading: false,
};
