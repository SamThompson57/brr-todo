import { useId, useState } from "react"
import uniqueId from "uniqueid"

const NewTask = (props) =>{
    const {addNewTask, collapse} = props

    const [title, setTitle] = useState('TITLE')
    const [desc, setDesc] = useState('Task Description') 
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [remind, setRemind] = useState(false)

    const id = useId()

    const remindUser = () => {
        setRemind(true)
    }

    return(
        <div>
            <div>
                <div>
                    <input className={remind?'remindUser':null} type="text" value={title} onInput={e => setTitle(e.target.value)}/>
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
                <button onClick={() => {
                    title.length > 0 ?
                    addNewTask([{
                    "taskName":title,
                    "taskDescription":desc,
                    "dueDate": date,
                    "dueTime": time,
                    "completed": false,
                    "id": id
                        }]):remindUser()
                    }}>Add New</button>      
            </div>
            <button onClick={collapse}>Cancel</button>
        </div>
        
    )
}

export default NewTask