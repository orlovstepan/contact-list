import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './user'
import filterSlice from './filter'

export const store = configureStore({
  reducer: {
    userState: usersSlice,
    filterState: filterSlice
  },
})

export type RootState = ReturnType<typeof store.getState>