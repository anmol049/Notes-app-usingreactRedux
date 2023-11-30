import {createSlice} from '@reduxjs/toolkit'
const NotesSlice = createSlice({
    name: 'NotesSlice',
    initialState: {
        notes: []
    },
    reducers: {
        addNote:(state, action)=>{
            state.notes.push(action.payload);
        },
        deleteNote:(state, action)=>{
            state.notes = state.notes.filter(note=> note.id!==action.payload)

        }


    }
})
export default NotesSlice.reducer;
export const{addNote,deleteNote} = NotesSlice.actions;