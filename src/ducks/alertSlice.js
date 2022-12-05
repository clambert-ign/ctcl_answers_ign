import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  alertData: {
    content: {}
  },
  alertOpen: false
}

const alertSlice = createSlice({
  name: 'share',
  initialState,
  reducers: {
    alertData: (state, action) => {
      state.alertData = action.payload
    },
    alertOpen: (state, action) => {
      state.alertOpen = action.payload
    }
  }
})

export const { alertData, alertOpen } = alertSlice.actions

export const setAlertOpen = (value) => (dispatch) => {
  dispatch(alertOpen(value))
}
export const setAlertData = (value) => (dispatch) => {
  dispatch(alertData(value))
}

export default alertSlice.reducer