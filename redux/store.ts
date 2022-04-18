import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import appSlice from './slices/appSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    app: appSlice,
  },
  devTools: true
});
export type RootState = ReturnType<typeof store.getState>;
