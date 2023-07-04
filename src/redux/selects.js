export const selectFilterContacts = state => state.filter;
export const selectContactsItems = state => state.contacts.items;
export const selectContacts = state => state.contacts;
export const selectAuth = state => state.auth;
export const selectIsLogin = state => state.auth.isLogin;
export const selectToken = state => state.access_token;
export const selectIsLoading = state => state.isLoading;
