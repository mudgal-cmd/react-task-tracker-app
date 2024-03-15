// import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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
    ))

    // let newTask = tasks.filter(task => task.id === id);


    // Vinalla JS Logic

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
      <Header title="Task Tracker" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}></Tasks> : <p>No More tasks to show</p>}
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
