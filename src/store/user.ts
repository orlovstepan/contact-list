import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {User} from "../type"

export interface UserState {
  users: User[],
}

const initialState: UserState = {
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state: UserState, action: PayloadAction<User[]>) => {
      return {users: action.payload}
    },
    addUser: (state: UserState, action: PayloadAction<User>) => {
      return {users: [...state.users, action.payload]}
    }
  },
})

export const { addUser, addUsers } = usersSlice.actions

export default usersSlice.reducer