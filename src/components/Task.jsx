import { useState } from "react"
import EditTask from "./EditTask"
import editIcon from '../assets/edit.svg'
import checked from '../assets/checked.svg'
import unchecked from '../assets/unchecked.svg'

const Task = (props) => {

    const {task, update, remove} = props

    const [editing, setEditing] = useState(false)

    const toggleEdit = () => {
        setEditing(!editing)
    }

    const toggleCheck = () => {
        update({
            "taskName":task.taskName,
            "taskDescription":task.taskDescription,
            "dueDate": task.dueDate,
            "dieTime": task.dueTime,
            "completed": !task.completed,
            "id": task.id
        })
    }

    return (
        <div>
            { editing ? 
                <EditTask
                    task={task}
                    update={update}
                    toggle={toggleEdit}
                    removeTask={remove}
                    />
                :
            
                <div className="taskContainer">
                    <h3>{task.taskName}</h3>
                    <div>{task.taskDescription}</div>
                    <div>{task.dueDate}</div>
                    <div>{task.dueTime}</div>
                    <img src={task.completed? checked : unchecked} onClick={toggleCheck}/>
                    <div className="taskControls">
                        <img src={editIcon} alt="edit task" onClick={()=>{setEditing(true)}}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default Task