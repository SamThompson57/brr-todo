import { useId, useState } from "react"
import addIcon from '../assets/add.svg'
import cancelIcon from '../assets/cancel.svg'

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
            <div className="editContainer">
                <div className="editTitle">
                    <input className={remind?'remindUser':null} maxLength={25} type="text" value={title} onInput={e => setTitle(e.target.value)}/>
                </div>
                <img src={cancelIcon} alt="Cancel" onClick={collapse}/>
                <textarea className="editDescription" type="text" value={desc} onInput={e => setDesc(e.target.value)}/>
                <div>
                    <input type="date" value={date} onInput={e => setDate(e.target.value)}/>
                    <input type="time" value={time} onInput={e => setTime(e.target.value)}/>
                </div>                    
                <img src={addIcon} alt="Add New Task" onClick={() => {
                    title.length > 0 ?
                    addNewTask([{
                    "taskName":title,
                    "taskDescription":desc,
                    "dueDate": date,
                    "dueTime": time,
                    "completed": false,
                    "id": id
                        }]):remindUser()
                    }}/>      
            </div>
            
        </div>
        
    )
}

export default NewTask