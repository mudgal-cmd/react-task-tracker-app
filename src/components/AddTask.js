import { useState } from "react";

const AddTask = ({ onAdd }) => {

  // Defining 3 component level states for each input field in the add task form

  const [text, setText] = useState("");
  const [dayTime, setDayTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmitFunc = (e) => {
    
    e.preventDefault();

    if(!text){alert("Please add task"); return};

    onAdd({text, dayTime, reminder});
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