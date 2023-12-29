import { createSlice } from "@reduxjs/toolkit";

export const getEmojiDetailsSlice=createSlice({
    name:'getEmoji',
    initialState:{
        details:[],
    },
    reducers:{
        getEmojiDetailsInfo:(state,action)=>{
            state.data=action.payload;
        }
    }
});

export default getEmojiDetailsSlice.reducer;

export const {getEmojiDetailsInfo}=getEmojiDetailsSlice.actions;