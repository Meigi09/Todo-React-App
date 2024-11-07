export function Tabs(props) {
    const {todos}=props
    const tabs=['All','Open','Completed']

    return (
        <nav className="navbar navbar-default">
            {tabs.map((tab,i)=>{
                const numOfTasks = tab ==='All'?
                    todos.length:
                    tab==='Open'?
                        todos.filter(val => !val.completed).length:
                        todos.filter(val => val.completed).length
                return (
                    <button
                    className="navbar-toggler"
                        key={i}
                        onClick={()=>{
                            console.log(tab)}}>
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}