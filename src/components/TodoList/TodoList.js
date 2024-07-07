import React from "react";
import TodoItem from "../TodoItem";

const TodoList = React.memo(({todos,onToggle,onRemove}) => {
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
});

export default TodoList;