import { configureStore } from '@reduxjs/toolkit';
import selectCharReducer from './selectedCharSlice';

export const store = configureStore({
  reducer: {
    selectedChar: selectCharReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
