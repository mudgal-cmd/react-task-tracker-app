// import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [tasks, setTasks] = useState([{ //Using the shared state at the root component level
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30 PM",
    reminder: true
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30 PM",
    reminder: true
  },
  {
    id: 3,
    text: "Grocery Shopping",
    day: "Feb 5th at 2:30 PM",
    reminder: true
  }]);

  const[toggleAddForm, seToggleAddForm] = useState(false);

  const toggleAddButton = () => {
    
    seToggleAddForm(!toggleAddForm);

    console.log(`Add Button clicked`, toggleAddForm);

  }


  // Add Task 

  const addTask = (task) =>{

    setTasks([...tasks, task]);

    // console.log(newTask);
  }

  //Delete task

  const deleteTask = (id) => {
    console.log(`Task deleted: ${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle Reminder

  const toggleReminder = (id) => {
    // console.log(`Id is ${id}`);

    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ));

    // let newTask = tasks.filter(task => task.id === id);


    //------------- Vinalla JS Logic

    // const taskElement = document.getElementById(id);

    // console.log(taskElement);

    // const findTask = tasks.filter(task => task.id === parseInt(taskElement.id));

    // const mod = findTask.map(()=> {
    //   return {...findTask, id: findTask.id+10}
    // })


    // if(findTask[0].reminder === false){
    //   taskElement.classList.add("reminder");
    //   findTask[0].reminder = true;
    //   console.log(`Inside false`, findTask[0].reminder);
    // }
    // else{
    //   taskElement.classList.remove("reminder");
    //   findTask[0].reminder = false;
    //   console.log(`Inside true`, findTask[0].reminder);
    // }

  }


  return (
    <div className="container">
      <Header title="Task Tracker" onToggleAddBtn = {toggleAddButton} showAdd = {toggleAddForm}/>

      {/* Using the short-circuit operator which is kind of shorthand for ternary expression, i.e., without specifying the else */}
      {toggleAddForm && <AddTask onAdd = {addTask}/> }

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}></Tasks> : <p>No Tasks to show</p>}
    </div>


  );
}

// class App extends React.Component{
//   render(){
//     return (
//       <h1>Hi From Class Component!</h1>
//     );
//   }
// } A class based component;

export default App;
