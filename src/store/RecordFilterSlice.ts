import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name_filter: ''
}

const RecordListFilter = createSlice({
    name: 'recordFilter',
    initialState: initialState,
    reducers: {
        saveFilter: (state, action) => {
            console.log(action)
            state.name_filter = action.payload
        },
    }
})

export const { saveFilter } = RecordListFilter.actions
export default RecordListFilter.reducer