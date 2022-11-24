import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalData: {
    content: {},
    type: 'modal'
  },
  open: false
}

const modalSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    modalData: (state, action) => {
      state.modalData = action.payload
    },
    open: (state, action) => {
      state.open = action.payload
    }
  }
})

export const { modalData, open } = modalSlice.actions

export const setModalOpen = (value) => (dispatch) => {
  if(value) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
  dispatch(open(value))
}
export const setModalData = (value) => (dispatch) => {
  dispatch(modalData(value))
}

export default modalSlice.reducer