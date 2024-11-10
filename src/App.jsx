import {Header} from "./components/Header.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";
import {Tabs} from "./components/Tabs.jsx";
import {useEffect, useState} from "react";

export default function App() {
    const [todos,setTodos]=useState([

    ])
    const [slectedIndexTab,setSlectedIndexTab]=useState('All')
    function handleAddTodo(newTodo){
        const newTodoList=[...todos,{input:newTodo,completed:false}]
        setTodos(newTodoList)
        handleSaveTodo(newTodoList)
    }
    function handleEditTodo(){
        let edit= <input type="text"></input>
        const newTodoList=[...todos,{input:valueOf(edit),completed:false}]
        setTodos(newTodoList)
        handleSaveTodo(newTodoList)
    }
    function handleCompletedTodo(index){
        let newTodoList=[...todos]
        let completedTodo=todos[index]
        completedTodo['completed']=true
        newTodoList[index]=completedTodo
        setTodos(newTodoList)
        handleSaveTodo(newTodoList)
    }
    function handleDeleteTodo(index){
        let newTodoList=todos.filter((val,valIndex)=>{
            return valIndex!==index;
        })
        setTodos(newTodoList)
        handleSaveTodo(newTodoList)
    }

    function handleSaveTodo(nowTodos) {
        localStorage.setItem('todo-app',JSON.stringify({todos:nowTodos}))
    }

    useEffect(()=>{
        if (!localStorage||!localStorage.getItem('todo-app')){
            return
        }
           let db=JSON.parse(localStorage.getItem('todo-app'))
        setTodos(db.todos)
    },[])
    return (
        <>
        <Header todos={todos}/>
            <Tabs todos={todos}
                  selectedTab={slectedIndexTab}
                  setSelectedTab={setSlectedIndexTab}
            />
            <TodoInput handleAddTodo={handleAddTodo}/>
            <TodoList
                todos={todos}
                selectedTab={slectedIndexTab}
                handleDeleteTodo={handleDeleteTodo}
                handleCompleteTodo={handleCompletedTodo}
                handleEditTodo={handleEditTodo}
            />

        </>
    )

}