import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    myPosts: []
}

export const slice = createSlice({
    name: 'Posts',
    initialState,
    reducers: {
        addPosts: (state, action) => {
            state.myPosts = action.payload
        }
    }
})

export const {addPosts} = slice.actions;
export const selectPosts = (state) => state.myNewPosts.myPosts

export default slice.reducer;