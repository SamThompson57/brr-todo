import { useState } from "react"
import edit from '../assets/edit.svg'
import remove from '../assets/delete.svg'



const EditTask = (props) => {

    const {task, update, toggle, removeTask} = props

    const [title, setTitle] = useState(task.taskName)
    const [desc, setDesc] = useState(task.taskDescription) 
    const [date, setDate] = useState(task.dueDate)
    const [time, setTime] =useState(task.dueTime)

    return (
        <div>
            <div>
                <div>
                    <input type="text" value={title} onInput={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <input type="text" value={desc} onInput={e => setDesc(e.target.value)}/>
                </div>
                <div>
                    <input type="date" value={date} onInput={e => setDate(e.target.value)}/>
                </div>
                <div>
                    <input type="time" value={time} onInput={e => setTime(e.target.value)}/>
                </div>
                <img src={remove} alt={'Delete Task'} onClick={() => {removeTask(task.id)}}/>
                <img src={edit} alt={'confirm changes'} onClick={() => {
                    /*Check the form is valid first*/
                    update({
                    "taskName":title,
                    "taskDescription":desc,
                    "dueDate": date,
                    "dueTime": time,
                    "completed": task.completed,
                    "id": task.id
                        })
                    
                    toggle()
                    
                    }}></img>      
            </div>
        </div>
    )
}

export default EditTask