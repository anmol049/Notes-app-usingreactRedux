import {createSlice } from "@reduxjs/toolkit";
const MessageSlice = createSlice({
    name: "MessageSlice",
    initialState:{
        message:""
    },
    reducers:{
        setMessage:(state,action)=>{
            state.message= action.payload;
        },
        resetmessage:(state,action)=>{
            state.message="";
        }
    }

});
export default MessageSlice.reducer;
export const{setMessage,resetmessage}=MessageSlice.actions;
