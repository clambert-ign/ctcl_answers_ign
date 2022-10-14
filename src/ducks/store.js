import { configureStore } from '@reduxjs/toolkit'
import acousticSlice from './acousticSlice'

export default configureStore({
  reducer: {
    acoustic: acousticSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })
})
