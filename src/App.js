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
  }])

  return (
      <div className="App">
        {/* <h1>Hello from React</h1> */}
        {/* <h2>Hello</h2> */}
        <Header title="Task Tracker"/>
        <Tasks tasks = {tasks}></Tasks>
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
