import React from 'react'
import {ACTIONS} from './SimpleTodo'
const DsiplayTodo = ({todo, dispatch}) => {
    // function handleToggle(){
    //     dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})
    // }
  return (
    <div>
      {
        todo && <ul>
            <li>Todo: <span style={{color : todo.complete ? 'green' : 'red', fontSize: '25px'}}>{todo.todo}</span> <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button> <button>Delete</button></li>
        </ul>
      }
    </div>
  )
}

export default DsiplayTodo
