import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './slice/modalSlice'

export default configureStore({
  reducer: {
    modal: modalReducer,
  },
})
