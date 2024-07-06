import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState : [{
    email : 'user01@gmail.com',
    password : 'pass01'
    },
    {
      email : 'user02@gmail.com',
      password : 'pass02'
    }],
    reducers : {
      addUser: (state, action) => {
        return [...state, action.payload];
      }
    }
})

export const { addUser } = user.actions;
export default configureStore({
  reducer: { 
    user : user.reducer
  }
})