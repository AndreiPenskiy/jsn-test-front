import { configureStore } from '@reduxjs/toolkit';
import { superherosApi } from './superheroApiSlice';

const store = configureStore({
  reducer: {
    [superherosApi.reducerPath]: superherosApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    superherosApi.middleware,
  ],
});

export default store;