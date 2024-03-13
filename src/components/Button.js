import  PropTypes  from "prop-types";

const Button = ({color, text, onClick}) => { //destructured the props. onClick function from Button component will go to Header and the logic present in the header will get executed.

  // const clickFunc = ()=> {
  //   console.log("Click");
  // }

  return (

    <div>
      <button className="btn" style={{backgroundColor : color}} onClick={onClick}>{text}</button>
    </div>

  );

}

Button.defaultProps = {
  color : "steelblue"
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;