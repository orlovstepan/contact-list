import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {User} from "../type"

export interface UserState {
  users: User[],
  checked: number[], 
}

const initialState: UserState = {
  users: [],
  checked: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state: UserState, action: PayloadAction<User[]>) => {
      return {...state, users: action.payload}
    },
    addUser: (state: UserState, action: PayloadAction<User>) => {
      return {...state, users: [...state.users, action.payload]}
    },
    deleteUser: (state: UserState, action: PayloadAction<number[]>) =>{
      const newUsers = state.users.filter((user) => !action.payload.includes(user.id))
      return {...state, users: newUsers}
    },
    setChecked: (state: UserState, action: PayloadAction<number[]>) =>{
      return {...state, checked: action.payload }
    },
    
  },
})

export const { addUser, addUsers, deleteUser, setChecked } = usersSlice.actions

export default usersSlice.reducer