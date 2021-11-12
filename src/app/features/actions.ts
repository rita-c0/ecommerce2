import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {stockFilter} from '../../model/models'

export interface FilterState {
  searchFilter: string
  selectedFilter: stockFilter
};

const initialState: FilterState = {
    searchFilter: "",
    selectedFilter: "none"
};

export const filterSlice = createSlice({
  name: 'FilterSlice',
  initialState,
  reducers: {
    setSelectedFilter: (state: FilterState, action: PayloadAction<stockFilter>) => {
        state.selectedFilter = action.payload
    },
    setSearchFilter: (state: FilterState, action: PayloadAction<string>) => {
        state.searchFilter = action.payload
    }
  }
});

// Action creators are generated for each case reducer function
export const filterActions = filterSlice.actions;
export default filterSlice.reducer;