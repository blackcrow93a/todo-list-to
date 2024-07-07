import React, { useState } from "react";
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App(){

    // 1. 초기값 설정 - input / todos  
    const [state,setState] = useState({
        input : '',
        todos : [
            { id : 0 , text : '리액트공부하기', done : true },
            { id : 1 , text : '컴포넌트 스타일링 해보기', done : false }
        ]
    });

    // 2. Input 에 입력시 데이터 설정 함수 
    const handleChange = (e) => {
        const { value } = e.target;
        const {todos} = state;
        setState({
            input : value,
            todos : [...todos]
        });
    };


    // 3. 추가 버튼 누를시 ID 처리 함수 
    const getId = ()=>{
        const {todos} = state;
        const length = todos.length;
        return length + 1 ;
    };

    // 4. 추가 버튼 누를시 데이터 추가 설정 함수 
    const handleInsert = ()=>{
        const {input , todos} = state;
        const newTodo = {
            text : input,
            done : false,
            id : getId()
        };

        setState({
            todos : [...todos,newTodo],
            input : ''
        });
    };

    // 5. todoItem Toggle 처리 함수 
    const handleToggle = (id)=>{
        const { todos } = state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done : !todos[index].done
        };

        setState({
           todos : [
            ...todos.splice(0,index),
            toggled,
            ...todos.splice(index+1,todos.length)
           ] 
        })
    };

    // 6. todoItem 지우기 버튼 클릭시 삭제 처리 함수 
    const handleRemove = (id)=>{
        const {todos} = state;
        const index = todos.findIndex(todo => todo.id === id);

        setState({
            todos : [
                ...todos.splice(0,index),
                ...todos.splice(index+1,todos.length)
            ]
        })

    }

    const {input , todos} = state;
    
    return (
        <PageTemplate>
            <>
                <TodoInput onChange={handleChange} value={input} onInsert={handleInsert} />
                <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
            </>
        </PageTemplate>
    )
}

export default App;
