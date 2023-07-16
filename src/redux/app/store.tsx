import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/bookCatalog/booksSlice';
import usersReducer from '../features/users/userSlice';
import { api } from './apiSlice';
const store = configureStore({
  reducer: {
    books: booksReducer,
    user: usersReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
