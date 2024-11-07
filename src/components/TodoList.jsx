import {TodoCard} from "./TodoCard.jsx";

export function TodoList(props) {
    const {todos}=props
    const tab ='All'
    const filterTodoList = tab ==='All'?
        todos :
        tab==='Completed'?
            todos.filter(val => val.completed):
            todos.filter(val => !val.completed)
    return (
        <div className="list-group">
            {filterTodoList.map((todo,todoIndex)=>{
                return (
                    <TodoCard
                        key={todoIndex}
                        todo={todo}/>
                )
            })}
        </div>
    )
}