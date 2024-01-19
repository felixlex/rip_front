import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user_id: -1,
    username: "",
    is_authenticated: false,
    is_moderator: false
}

const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        updateUser: (state, action) => {
            state.is_authenticated = action.payload.is_authenticated
            state.is_moderator = action.payload.is_moderator
            state.user_id = action.payload.pk
            state.username = action.payload.username
        },
        cleanUser: (state) => {
            state.is_authenticated = false
            state.is_moderator = false
            state.user_id = -1
            state.username = ""
        }
    }
})

export const { updateUser, cleanUser } = authSlice.actions

export default authSlice.reducer