import { createSlice } from "@reduxjs/toolkit";

export const getEmojiSlice=createSlice({
    name:'getEmoji',
    initialState:{
        data:[]
    },
    reducers:{
        getEmojiInfo:(state,action)=>{
            state.data=action.payload;
        }
    }
});

export default getEmojiSlice.reducer;

export const {getEmojiInfo}=getEmojiSlice.actions;