import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../redux/slices/NotesSlice';
const notestyle = {
    border: "2px solid green",
    borderRadius:"20px",
    backgroundColor:'#eff2e4',
    textAlign:"center"


}
const fakestyle = {
    marginTop: "30px",
    width: "89rem",
    // border:"2px solid blue",
    display:"grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap:"25px"


}
function ListNotes() {
    const notes = useSelector(state => state.NotesReducer.notes)
    // console.log("hello");
    const dispatch = useDispatch();
    function handleDelete(id){
        dispatch(deleteNote(id))
    }
  return (
    <div style={fakestyle}>
        {notes.map((note,index)=>{
            return <div key={index} style={notestyle}>
                <h2 style={{textAlign:"center"}}>{note.title}</h2>
                <p>{note.desc}</p>
                {/* <p>{note.id}</p> */}
                <button onClick={()=>handleDelete(note.id)}>Delete</button>

            </div>
        })}
    </div>
  )
}

export default ListNotes