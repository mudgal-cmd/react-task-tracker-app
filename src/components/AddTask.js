import { useState } from "react";

import parseDateTime from "../utils/helper";

const AddTask = ({ onAdd }) => {

  // Defining 3 component level states for each input field in the add task form

  const [text, setText] = useState("");
  const [dayTime, setDayTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmitFunc = (e) => {
    
    console.log("on submit executed");

    e.preventDefault();

    if(!text){alert("Please add task"); return};

    // const id = Math.floor(Math.random()*10000)+1; //The new task id should be named as "id" only, to avoid the warning about unique key props. We do not need the ID when using the json-server as it automatically generates a unique ID.

    const day = parseDateTime(dayTime);

    console.log(`Beautiful Day ${day}`);

    onAdd({text, day, reminder}); //task object properties should be named the same as we've specified the name in the props in task.
    e.target.reset();
    setText("");
    setDayTime("");
    setReminder(false);

  }

  return (
    <form className="add-form" onSubmit={onSubmitFunc}>

      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Task Description" onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className="form-control">
        <label>Date and Time</label>
        <input type="datetime-local" placeholder="Task Description" onChange={(e) => setDayTime(e.target.value)}/>
      </div>
      <div className="form-control-check">
        <label>Reminder</label>
        <input type="checkbox" checked = {reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block"/>

    </form>
  );


}

export default AddTask;