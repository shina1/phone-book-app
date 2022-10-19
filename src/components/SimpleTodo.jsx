import React, { useReducer, useState } from 'react';
import DsiplayTodo from './DsiplayTodo';

export const ACTIONS = {
    ADD_TODO : "add_todo",
    TOGGLE_TODO : "toogle_todo"
}
function reducer(state, action){
    switch (action.type) {
        case ACTIONS.ADD_TODO:
          return [...state, addTodo(action.payload.todoName)];
        case ACTIONS.TOGGLE_TODO:
            return state.map(todo => {
                if(todo.id === action.payload.id){
                    return {...todo, complete: !todo.complete}
                }
                return state
            })
        default:
            return state
    }
}

function addTodo(newTodo){
    return {id: Date.now() + Math.floor(Math.random() * 100), todo: newTodo, complete: false}
}
const SimpleTodo = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const [todoName , setTodoName] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: {todoName: todoName}})
        setTodoName('');
    }
    return(
        <div>
            <h2>A simple todo with useReducer Hook</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={todoName} placeholder='todo...' onChange={(e) => setTodoName(e.target.value)}/>
            </form>
            <div>
                {
                   state ? state.map(todo => {
                        return <DsiplayTodo key={todo.id} todo={todo} dispatch={dispatch} />
                }) : <h3>Create your todos</h3>
                }
            </div>
        </div>
    )
}

export default SimpleTodo;