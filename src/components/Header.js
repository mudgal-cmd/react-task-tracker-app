// import React from "react"; No longer needed since v17
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom"; //using the useLocation hook to hide the "Add Task" button from the about section.
const Header = (props) => {
// We can even de-structure the props object and use {title}

  // const onClick = () =>{
  //   console.log("Clicked");
  // }

  const location = useLocation();

  return (
    <header className="header">
      <h1>{props.title}</h1>
      {/* If we're on the homepage then only show the "Add task" button */}
      {location.pathname === "/" && <Button color={`${props.showAdd? "red" : "green"}`} text ={`${props.showAdd? "Close" : "Add Task"}`} onToggleAddBtn = {props.onToggleAddBtn}></Button>} 
    </header>
  );
} 

// const styles = {
//   color : "Green",
//   backgroundColor : "yellow"
//} //ANother way of styling the components particularly for dynamic styling.

Header.defaultProps = {
  title : "Task Tracker"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;