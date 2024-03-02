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
            "dueTime": task.dueTime,
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
                    <h2 className="taskTitle">{task.taskName}</h2>
                    <img className="checked" src={task.completed? checked : unchecked} onClick={toggleCheck}/>
                    <div>
                        <div className="taskInfo">{task.taskDescription}</div>
                        <div className="dueContainer">
                            <div>{task.dueTime || task.dueDate ?"Due:" :null }</div>
                            <div>
                                <div>{task.dueDate}</div>
                                <div>{task.dueTime}</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="taskControls">
                        <img className="editTask" src={editIcon} alt="edit task" onClick={()=>{setEditing(true)}}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default Task