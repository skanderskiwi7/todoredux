import { configureStore } from '@reduxjs/toolkit';
import reducerTodo from './Todo'
export const store = configureStore({
  reducer: {
    todo : reducerTodo
  },
});