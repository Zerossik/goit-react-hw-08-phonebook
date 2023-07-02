// Начальное состояние.
export const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  user: { name: '', email: '', token: null, isLogin: false },
  filter: '',
};
