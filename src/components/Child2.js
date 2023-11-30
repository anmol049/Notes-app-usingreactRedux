import React from 'react'
import { useSelector } from 'react-redux'

function Child2() {
    const select = useSelector(state=>state.MessageReducer.message)
  return (
    <div>the value of child1: {select}</div>
  )
}

export default Child2