import React, { useState } from 'react'
import Todo from './Todo'
import AddToDo from './AddToDo'

export default function ToDoList() {
    const [items, setItems] = useState(
        [
        {todo: 'task a',completed: true},
        {todo: 'task b',completed: true},
        { todo: 'task c',completed: true}
    ]
    )
    const [inputValue, setInputValue] = useState('')

    const changeStatus = (item) => {
        const {completed, todo} = item

        const newItem = {todo, completed:!completed}
        console.log(newItem)
        const newItems = items.map(
            element => {
                if (element.todo === todo) {
                    return {todo, completed: !completed}
                } 
                return element
            }
        )
       
         console.log(newItems)
         setItems(newItems)

        
        console.log('change status',completed)
        
    }
    const item_list = items.map(item => {
        return <ul>
            <Todo item={item} changeStatus={() => changeStatus(item)}/>
        </ul>
    })
    
    const addItem = (item) => {
        const newItem = {todo: item, completed: false}
         setItems([...items,newItem])
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const deleteAllItems = () => {
        setItems([])
    }

    const deleteFirstItem = () => {
        const newItems = [...items]
        newItems.shift()
        setItems(newItems)
        
    }

    const clearCompletedItems = () => {
        const newItems = items.filter( item => item.completed === false)
        setItems(newItems)
    }

    const addNewItem = (item) => {
        console.log('add new item',item)
        const newItem = {todo: item, completed: false}
         setItems([...items,newItem])
    }
  return (
    <div>
        <input value={inputValue} onChange={handleChange}/>
        <button onClick={()=> {addItem(inputValue)}}>ADD</button>

        <button onClick={()=> {deleteAllItems()}}>DELETE ALL!</button>
        <button onClick={()=> {deleteFirstItem()}}>DELETE the First One</button>
        <button onClick={()=> {clearCompletedItems()}}>Clear</button>

        {item_list}
        
        <hr />
        <AddToDo addItem={addNewItem}/>
    </div>
  )
}
