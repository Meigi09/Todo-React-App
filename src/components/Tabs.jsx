export function Tabs(props) {
    const {todos ,selectedTab,setSelectedTab}=props
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
                    <nav>
                    <button
                        onClick={() => {
                            setSelectedTab(tab)
                        }}
                    className={"navbar-toggler" +
                        (tab==selectedTab?"tab-selected":'')}
                        key={i}
                        >
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                        <hr/>
                    </nav>
                )
            })}
        </nav>
    )
}