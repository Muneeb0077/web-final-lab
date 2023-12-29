import { configureStore } from "@reduxjs/toolkit";

import getEmojiSlice from "../features/GetEmojiSlice/getEmojiSlice";
import getEmojiDetailsSlice from "../features/GetEmojiDetails/getEmojiDetailsSlice";

export const store =configureStore({
    reducer:{
        getEmoji:getEmojiSlice,
        getEmojiDetails:getEmojiDetailsSlice,
    },
})