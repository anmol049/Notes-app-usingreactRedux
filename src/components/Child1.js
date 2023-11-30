import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { setMessage } from '../redux/slices/MessageSlice';

function Child1() {
    const inputReference = useRef(null);
    const dispatch = useDispatch();
    function handleSubmit(e){

        e.preventDefault();
        const data = inputReference.current.value;
        dispatch(setMessage(data))
    }
  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
            <input type="text" ref ={inputReference} />
            <input type="submit" onClick={handleSubmit} />
        </form>
    </div>
  )
}

export default Child1