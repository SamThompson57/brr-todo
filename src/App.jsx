import { useState, useEffect } from 'react'
import './App.css'
import Task from './components/Task'
import NewTask from './components/NewTask'
import add from './assets/add.svg'
import editIcon from './assets/edit.svg'
import introProject from './assets/sampleProjects.json'
import storageAvailable from './components/checkStorage.js'

function App() {
  const [project, setProject] = useState("")
  const [tasks, setTasks] = useState([])
  const [taskForm, setTaskForm] = useState(false)
  const [editProject, setEditProject] = useState(false)

  const addTask = () => {
    setTaskForm(true)
  }

  const fetchData = () => {
    console.log(storageAvailable())

    if(storageAvailable() === true){
      console.log("storageAvailable")
      if(!localStorage.getItem('projectInfo')){
        localStorage.setItem('projectInfo', JSON.stringify(introProject))
        return introProject
      } return JSON.parse(localStorage.getItem('projectInfo'))
    }
    console.log("Storage unavailible")
    return introProject
  }

  useEffect(()=>{
    const data = fetchData()
    setProject(data.projectName)
    setTasks(data.tasks)
  },[])

  const deleteTask = (taskId) => {
    const idMatch = (task) =>{
      return task.id === taskId
    }
    const changeIndex = tasks.findIndex(idMatch)
    const updatedList = tasks.toSpliced(changeIndex, 1)

    setTasks(updatedList)
    if(storageAvailable){
      localStorage.setItem('projectInfo', JSON.stringify({"projectName":project,"tasks":updatedList}))
    }
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
    if(storageAvailable){
      localStorage.setItem('projectInfo', JSON.stringify({"projectName":project,"tasks":updatedList}))
    }
  }

  const updateProjectTitle = () => {
    setEditProject(!editProject)
    if(storageAvailable){
      localStorage.setItem('projectInfo', JSON.stringify({"projectName":project,"tasks":tasks}))
    }
  }

  return (
    <div>
      {
        editProject ?
        <div className='heading'>
          <input id="projectInput"type="text" value={project} onInput={e => setProject(e.target.value)}/> 
          <img className='smallLogo' src={editIcon} alt="commit Project Name" onClick={()=>{updateProjectTitle()}}/>
        </div>
        : 
          <div id='heading' className='heading'>
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
