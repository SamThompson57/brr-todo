import { useState, useEffect } from 'react'
import './App.css'
import Task from './components/Task'
import NewTask from './components/NewTask'
import add from './assets/add.svg'
import editIcon from './assets/edit.svg'
import checkIcon from './assets/checked.svg'

function App() {
  const [project, setProject] = useState("Your Project")
  const [tasks, setTasks] = useState([])
  const [taskForm, setTaskForm] = useState(false)
  const [editProject, setEditProject] = useState(false)

  const addTask = () => {
    setTaskForm(true)
  }

  const deleteTask = (taskId) => {
    const idMatch = (task) =>{
      return task.id === taskId
    }
    const changeIndex = tasks.findIndex(idMatch)
    const updatedList = tasks.toSpliced(changeIndex, 1)

    setTasks(updatedList)
  }

  const collapseTask = () => {
    setTaskForm(false)
  }

  const addNewTask = (newTask) => {
    const newList = tasks.concat(newTask)
    setTasks(newList)
    setTaskForm(false)
    console.log(tasks)
  }

  const updateTask = (changedTask) => {
    
    const idMatch = (task) =>{
      return task.id === changedTask.id
    }

    const changeIndex = tasks.findIndex(idMatch)
    const updatedList = tasks.toSpliced(changeIndex, 1, changedTask)

    setTasks(updatedList)
  }

  return (
    <div>
      {
        editProject ?
        <div className='heading'>
          <input type="text" value={project} onInput={e => setProject(e.target.value)}/> 
          <img className='smallLogo' src={editIcon} alt="commit Project Name" onClick={()=>{setEditProject(!editProject)}}/>
        </div>
        : 
          <div className='heading'>
            <h1>{project}</h1>
            <img className='smallLogo' src={editIcon} alt="Edit Project Name" onClick={()=>{setEditProject(!editProject)}}/>
          </div>
      }

      

      {tasks?tasks.map(task => {
        return( <Task 
          key={task.id}
          task={task}
          update={updateTask}
          remove={deleteTask}
        />)
      }
       
      ):null}

     {taskForm ?
      <NewTask addNewTask={addNewTask} collapse={collapseTask}/>
      : 
      <div className='controls'>
        <img className='controls' src={add} alt='New Task' onClick={addTask}/>
      </div> 
     } 
    </div>

  )
}

export default App
