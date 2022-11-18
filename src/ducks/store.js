import { configureStore } from '@reduxjs/toolkit'
import acousticSlice from './acousticSlice'
import modalSlice from './modalSlice'

export default configureStore({
  reducer: {
    acoustic: acousticSlice,
    modal: modalSlice
  }
})
