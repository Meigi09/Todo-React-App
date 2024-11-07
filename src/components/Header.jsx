export function Header(props) {
    const {todos}=props
    const todosLength=todos.length

    const isTasksPlural =todos.length!=1
    const tasks=isTasksPlural?'Tasks':'Task'
    return (
        <header>
            <h3>You have {todosLength} Open {tasks}</h3>
        </header>
    )
}