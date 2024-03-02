// store.js
import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../reduces/blogSlice';

export default configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});
