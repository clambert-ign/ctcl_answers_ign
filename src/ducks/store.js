import { configureStore } from '@reduxjs/toolkit'
import acousticSlice from './acousticSlice'
import modalSlice from './modalSlice'
import shareSlice from './shareSlice'
import alertSlice from './alertSlice'

export default configureStore({
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['share/shareData'],
        ignoredPaths: ['share.shareData.elementRef']
      }
    })
  ,
  reducer: {
    acoustic: acousticSlice,
    modal: modalSlice,
    share: shareSlice,
    alert: alertSlice
  }
})
