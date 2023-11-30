import { configureStore } from "@reduxjs/toolkit";
import MessageSlice from "./slices/MessageSlice";
import NotesSlice from "./slices/NotesSlice";
const store = configureStore({
    reducer: {
        MessageReducer : MessageSlice,
        NotesReducer : NotesSlice

    }
})
export default store;