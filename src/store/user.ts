import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {User} from "../type"

export interface UserState {
  users: User[],
  checked: number[], 
  favourite: number[]
}

const initialState: UserState = {
  users: [],
  checked: [],
  favourite: []
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
      const newFavourites = state.favourite.filter((userId) => !action.payload.includes(userId));
      return {...state, users: newUsers, checked: [], favourite: newFavourites}
    },
    setChecked: (state: UserState, action: PayloadAction<number[]>) =>{
      return {...state, checked: action.payload }
    },
    setFavourite: (state: UserState, action: PayloadAction<number[]>) =>{
      return{...state, favourite: action.payload}
    }
    
  },
})

export const { addUser, addUsers, deleteUser, setChecked, setFavourite } = usersSlice.actions

export default usersSlice.reducer