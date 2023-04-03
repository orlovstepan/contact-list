import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {TypeSearch} from "../type"


export interface FilterState {
    searchValue: string,
    searchType: TypeSearch,
    showFavourite: boolean
  }
  
  const initialState: FilterState = {
    searchValue: "",
    searchType: "name",
    showFavourite: false
  }
  
  export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      setSearchValue: (state: FilterState, action: PayloadAction<string>) => {
        return {...state, searchValue: action.payload }
      },
      setSearchType: (state: FilterState, action: PayloadAction<TypeSearch>) => {
        return {...state, searchType: action.payload}
      },
      resetFilter: () => {
        return initialState
      },
      setShowFavourite: (state: FilterState, action: PayloadAction<boolean>) => {
        return {...state, showFavourite: action.payload}
      }
    },
  })
  
  export const { setSearchValue, setSearchType, resetFilter, setShowFavourite } = filterSlice.actions
  
  export default filterSlice.reducer