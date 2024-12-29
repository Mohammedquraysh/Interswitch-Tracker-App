import { configureStore } from '@reduxjs/toolkit';
import transportReducer from './transportSlice.js';
export const store = configureStore({
  reducer: {
    transport: transportReducer, 
  },
});


// Define RootState type based on the store's state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;