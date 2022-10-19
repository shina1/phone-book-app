import React, { useReducer, useState } from 'react'

const ACTIONS = {
    ADD_TODO: 'add_todos'
}

function reducer(todos, action){
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, addTodo(action.payload.todoName)]
        default:
            return todos
    }
}

function addTodo(newTodo){
    return {id: Date.now(), todo: newTodo, completed: false}
}

const NewSimpleTodo = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [todoName, setTodoName] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload: {todoName}})
        setTodoName('')
    }
    console.log(todos);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={todoName} placeholder='todos....' onChange={(e) => setTodoName(e.target.value)}/>
      </form>
      <div>
        {
            todos.length !== 0 ? todos.map(todo => {
                return <ul key={todo.id}>
                    <li>Todo: <span>{todo.todo}</span></li>
                </ul>
            }) : <h3>Create your todo</h3>
        }
      </div>
    </div>
  )
}

export default NewSimpleTodo
