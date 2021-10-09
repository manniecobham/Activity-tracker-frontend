import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./Components/Header";
import Tasks from './Components/Tasks';
import AddTask from "./Components/AddTask";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] =useState([
    {
          id: 1,
          text: "Doctors Appointment",
          day: "Feb 5th at 2:30pm",
          reminder: true
        },
        {
          id: 2,
          text: "Meeting at School",
          day: "Feb 6th at 1:30pm",
          reminder: true
        }
  ]);

 //Add a task
  const addTask = (task) =>{
  
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
}
//Delete Task
const deleteTask =/*async*/ (id) => {
  //Delete from server
  // await fetch(`http://localhost:5000/task/${id}`,{
  // method: 'DELETE',})
  setTasks(tasks.filter((task) => task.id !==id))
}
//For reminder
const reminderSet = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
}
  return (
    <Router>
    <div className="container">
      <Header showAdd={showAddTask} onAdd={()=> setShowAddTask(!showAddTask)}/>
      
      <Route path='/' exact render={(props) => (
        <>
        { showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminderSet} />) : (
      <>
      <h3>No Activity to show</h3><br /><p style={{color:'red', backgroundColor:'black',borderRadius: '5px', width: '40%'}}>Tap the "Add" button above to add</p>
      </>)}
        </>
      )} />
      <Route path="/about" component={About}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
