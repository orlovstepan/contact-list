import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {TypeSearch} from "../type"


export interface FilterState {
    searchValue: string,
    searchType: TypeSearch
  }
  
  const initialState: FilterState = {
    searchValue: "",
    searchType: "name"
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
    },
  })
  
  export const { setSearchValue, setSearchType } = filterSlice.actions
  
  export default filterSlice.reducer