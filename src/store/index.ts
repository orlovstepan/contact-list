import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './user'

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>