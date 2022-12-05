import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shareData: {
    content: {},
    elementRef: {}
  },
  shareOpen: false
}

const shareSlice = createSlice({
  name: 'share',
  initialState,
  reducers: {
    shareData: (state, action) => {
      state.shareData = action.payload
    },
    shareOpen: (state, action) => {
      state.shareOpen = action.payload
    }
  }
})

export const { shareData, shareOpen } = shareSlice.actions

export const setShareOpen = (value) => (dispatch) => {
  dispatch(shareOpen(value))
}
export const setShareData = (value) => (dispatch) => {
  dispatch(shareData(value))
}

export default shareSlice.reducer