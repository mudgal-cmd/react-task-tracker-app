// import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {

  const [tasks, setTasks] = useState([]); //Using the shared state at the root component level

  const [toggleAddForm, seToggleAddForm] = useState(false);

  const toggleAddButton = () => {

    seToggleAddForm(!toggleAddForm);

    console.log(`Add Button clicked`, toggleAddForm);

  }

  useEffect(() => {

    const getTasks = async () => {

      const tasksFromServer = await fetchTasksFromServer();

      setTasks(tasksFromServer);

    }

    getTasks();

  }, []); //Empty dependency array to ensure that the function in the component body executes only once and not everytime the component re-renders.

  // useEffect(async ()=>{

  //   const tasksFromServer = await fetchTasksFromServer();

  //   setTasks(tasksFromServer);

  // }, []); //This version will throw an error - "destroy is not a function", because the callback inside the useEffect hook cannot be used for our async processing as it is used by the useFeect (depending on the dependency array) for cleanup, etc.


  //Fetch Task

  const fetchTasksFromServer = async () => {

    const response = await axios.get("http://localhost:5000/tasks");

    // console.log(response.data);

    return response.data;

  }

  //Fetch task from server by ID to toggle "Reminder"

  const fetchTaskById = async (id) => {

    const response = await axios.get(`http://localhost:5000/tasks/${id}`);

    // console.log(response.data);

    return response.data;

  }

  //Update the fetched task to toggle the reminder

  const updateReminderInTask = async (id) => {

    const taskToUpdate = fetchTaskById(id);

    // const modifiedTask = {...taskToUpdate, reminder : !taskToUpdate.reminder};

    let modifiedTask = await taskToUpdate;

    // await axios.put(`http://localhost:5000/tasks/${id}`, modifiedTask);

    // console.log(typeof modifiedTask);

    modifiedTask = { ...modifiedTask, reminder: !modifiedTask.reminder };

    await axios.put(`http://localhost:5000/tasks/${id}`, modifiedTask);

    console.log(modifiedTask);

  }

  // updateReminderInTask("f8a4");
  // Add Task 

  const addTask = async (task) => {

    console.log("Add task executed");

    await axios.post("http://localhost:5000/tasks",
      task)
      .then(res => setTasks([...tasks, res.data]))
      .catch(err => console.log(err));
  }

  //Delete task

  const deleteTask = async (id) => {

    await axios.delete(`http://localhost:5000/tasks/${id}`); //deleting from the server

    console.log(`Task deleted: ${id}`);
    setTasks(tasks.filter((task) => task.id !== id)); //This is just deleting from the UI and not from the server/backend
  }

  //Toggle Reminder

  const toggleReminder = (id) => {
    // console.log(`Id is ${id}`);

    updateReminderInTask(id);

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
    <Router>
      <div className="container">
        <Header title="Task Tracker" onToggleAddBtn={toggleAddButton} showAdd={toggleAddForm} />

        {/* Using the short-circuit operator which is kind of shorthand for ternary expression, i.e., without specifying the else */}
        {/* {toggleAddForm && <AddTask onAdd={addTask} />}

        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}></Tasks> : <p>No Tasks to show</p>} */}
        <Routes>
          <Route path="/*" element={ // "/* the wildcard asterisk ensures the exact match of the URL."
            <>
              {toggleAddForm && <AddTask onAdd={addTask} />}

              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}></Tasks> : <p>No Tasks to show</p>}
            </>
          }></Route>
          <Route path="/about" Component={About} /> //reference of About component to be rendered when this URL matches.
        </Routes>
        <Footer />
      </div>

    </Router>



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
