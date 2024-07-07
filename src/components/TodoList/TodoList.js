import React from "react";
import TodoItem from "../TodoItem";

export default function TodoList({todos,onToggle,onRemove}){
    console.log('todos :' + todos);
    const todolist = todos.map(todo=>(
        <TodoItem
        key={todo.id}
        done={todo.done}
        onToggle={()=>{
            onToggle(todo.id)
        }}
        onRemove={()=>{
            onRemove(todo.id)
        }}
        >
        {todo.text}
        </TodoItem>
    ));

    return(
        <div>
            {todolist}
        </div>
    )
};