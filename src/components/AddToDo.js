import React, { useRef } from 'react'

export default function AddToDo(props) {


    const addNewItem = props.addItem

    const inputRef = useRef(null)
  return (
    <div>
        <input ref={inputRef}/>
        <button onClick={() => addNewItem(inputRef.current.value)}>ADD</button>
    </div>
  )
}
