import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Active: true,
    Aprove: true,
    Decline: true,
}

const OrderStatusFilter = createSlice({
    name: 'orderStatusFilter',
    initialState: initialState,
    reducers: {
        saveAct: (state, action) => {
            console.log(action)
            state.Active = action.payload
        },
        saveApr: (state, action) => {
            console.log(action)
            state.Aprove = action.payload
        },
        saveDec: (state, action) => {
            console.log(action)
            state.Decline = action.payload
        },
    }
})

export const { saveAct, saveApr, saveDec} = OrderStatusFilter.actions
export default OrderStatusFilter.reducer