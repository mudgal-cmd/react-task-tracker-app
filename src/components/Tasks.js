import Task from "./Task";
const Tasks = ({ tasks }) => {
  //Since the state might get used/shared between different components, hence, shifted it to the root component/App component. If we had kept it in this component, won't be able to use it outside without making it messy/more code.
  return (
    <>

      {
        tasks.map((task) => (
          // <h3 key={task.id}>{task.text}</h3>
          <Task key={task.id} task = {task}/>
          ))
      }

    </>
  );

}

export default Tasks;