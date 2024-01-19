import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    start_date: "",
    end_date: "",
}

const OrderDateFilter = createSlice({
    name: 'OrderDateFilter',
    initialState: initialState,
    reducers: {
        saveStart: (state, action) => {
            console.log(action)
            state.start_date = action.payload
        },
        saveEnd: (state, action) => {
            console.log(action)
            state.end_date = action.payload
        },
    }
})

export const { saveStart, saveEnd} = OrderDateFilter.actions
export default OrderDateFilter.reducer