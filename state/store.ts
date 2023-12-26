import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import productsReducer from './features/products/productsSlice';
import modeReduser from './features/mode/modeSlice'
export const store = configureStore({
  reducer: {
    user:userReducer,
    products: productsReducer,
    mode: modeReduser
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;