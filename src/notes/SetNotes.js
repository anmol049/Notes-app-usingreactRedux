import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/slices/NotesSlice';
import { nanoid } from '@reduxjs/toolkit';
const mainstyle = {
    display:"flex",
    justifyContent:"center",
    padding:"20px"
}
const style ={
    display:"flex",
    gap:"20px"
}

function SetNotes() {
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");
    const dispatch = useDispatch();
    const test = useRef();
    function handleSubmit(e){
        e.preventDefault();
        dispatch(addNote({
            title,
            desc,
            id: nanoid(10)
        }
        ))

    }
  return (
    <div style={mainstyle}>
        <form onSubmit={handleSubmit} style={style}>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} placeholder='enter title' ref={test}/>
            <input type="text" onChange={(e)=>{setDesc(e.target.value)}}  placeholder='enter desc'/>
            <input type="submit" onClick={handleSubmit}/>
        </form>
    </div>
  )
}

export default SetNotes