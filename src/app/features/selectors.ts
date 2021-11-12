import { RootState } from "../store"

export const searchFilterSelector = (state: RootState) => {
    return state.filterSlice.searchFilter
  }

  export const selectedFilterSelector = (state: RootState) => {
    return state.filterSlice.selectedFilter
  }

