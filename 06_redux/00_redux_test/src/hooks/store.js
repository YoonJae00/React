import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState : [{
    username : 'user01',
    email : 'user01@gmail.com',
    password : 'pass01'
    },
    {
      name : 'user02',
      email : 'user02@gmail.com',
      password : 'pass02'
    }],
    reducers : {
      addUser: (state, action) => {
        return [...state, action.payload];
      },
      updateUser : (state, action) => {
        return state.map(user => 
          user.username === action.payload.username ? { ...user, ...action.payload } : user
      );
      }
    }
})

let myInfo = createSlice({
  name: 'myInfo',
  initialState: {
      username: '',
      email: '',
      password: ''
  },
  reducers: {
      setMyInfo: (state, action) => {
          return { ...action.payload };
      }
  }
});

export const { addUser, updateUser } = user.actions;
export const {setMyInfo} = myInfo.actions;
export default configureStore({
  reducer: { 
    user : user.reducer,
    myInfo : myInfo.reducer
  }
})