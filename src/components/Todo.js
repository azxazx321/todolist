import React from 'react'

export default function Todo(props) {
    const {todo, completed} = props.item
    const {changeStatus} = props
    const completedStyle = {
        textDecoration: 'line-through',
    }
  return (
    <li style={completed ? completedStyle : null}>
        
    {todo}
    <input type='checkbox' checked={completed} onChange={changeStatus}/>
    </li>
  )
}
