// import React from "react"; No longer needed since v17
import PropTypes from "prop-types";
import Button from "./Button";
const Header = (props) => {
// We can even de-structure the props object and use {title}

  const onClick = () =>{
    console.log("Clicked");
  }
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="Green" text ="Add" onClick={onClick}></Button>
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