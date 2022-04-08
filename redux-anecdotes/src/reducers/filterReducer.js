import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    newFil: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterAnecdotes(state, action) {
           return {...state, newFil: action.payload}
        }
    }
})

export const { filterAnecdotes } = filterSlice.actions
export default filterSlice.reducer