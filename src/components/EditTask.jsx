import { useState } from "react"
import edit from '../assets/edit.svg'
import remove from '../assets/delete.svg'



const EditTask = (props) => {

    const {task, update, toggle, removeTask} = props

    const [title, setTitle] = useState(task.taskName)
    const [desc, setDesc] = useState(task.taskDescription) 
    const [date, setDate] = useState(task.dueDate)
    const [time, setTime] =useState(task.dueTime)
    const [remind, setRemind] = useState(false)

    const remindUser = () => {
        setRemind(true)
    }

    return (
        <div>
            <div className="editContainer">
                <div className="editTitle">
                    <input className={remind?'remindUser':null} type="text" maxLength={25} value={title} onInput={e => setTitle(e.target.value)}/>
                </div>
                <img src={remove} alt={'Delete Task'} onClick={() => {removeTask(task.id)}}/>
                <textarea className="editDescription" type="text" value={desc} onInput={e => setDesc(e.target.value)}/>
                <div>
                    <input type="date" value={date} onInput={e => setDate(e.target.value)}/>
                    <input type="time" value={time} onInput={e => setTime(e.target.value)}/>
                </div>
                
                <img src={edit} alt={'confirm changes'} onClick={() => {
                    title.length > 0 ?

                    update({
                    "taskName":title,
                    "taskDescription":desc,
                    "dueDate": date,
                    "dueTime": time,
                    "completed": task.completed,
                    "id": task.id
                        }) + toggle():remindUser()
                    
                    }}></img>      
            </div>
        </div>
    )
}

export default EditTask