import Task from "./Task"
const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <>
            <p style={{color:'pink'}}>Double Click to set reminder</p>
            {tasks.map((task)=>(
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
