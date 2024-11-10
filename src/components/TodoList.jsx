import {TodoCard} from "./TodoCard.jsx";

export function TodoList(props) {
    const {todos,selectedTab}=props

    const filterTodoList = selectedTab ==='All'?
        todos :
        selectedTab==='Completed'?
            todos.filter(val => val.completed):
            todos.filter(val => !val.completed)
    return (
        <div className="list-group">
            {filterTodoList.map((todo,todoIndex)=>{
                return (
                    <TodoCard
                        key={todoIndex}
                        todoIndex={todos.findIndex(val=>val.input== todo.input)}
                        {...props}
                        todo={todo}/>
                )
            })}
        </div>
    )
}