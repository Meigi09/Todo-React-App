import {Header} from "./components/Header.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";
import {Tabs} from "./components/Tabs.jsx";
import {useState} from "react";

export default function App() {
    // const todos=[
    //     {input:'Hello, Add your first todo!',completed:false},
    //     {input:'Get the grocery',completed:false},
    //     {input:'Learn how to do web design',completed:true},
    //     {input:'Learn how to do web design',completed:true},
    //     {input:'Learn how to do web design',completed:false},
    //     {input:'Learn how to do web design',completed:false},
    //     {input:'Learn how to do web design',completed:false},
    // ];
    const [todos,setTodos]=useState([
        {input:'Learn how to do web design',completed:true}
    ])
    function handleAddTodo(newTodo){
        const newTodoList=[...todos,{input:newTodo,completed:false}]
        setTodos(newTodoList)
    }
    function handleEditTodo(){}
    function handleDeleteTodo(){}
    return (
        <>
        <Header todos={todos}/>
            <Tabs todos={todos}/>
            <TodoInput handleAddTodo={handleAddTodo}/>
            <TodoList todos={todos}/>

        </>
    )

}