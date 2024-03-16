import { Link } from "react-router-dom";

const About = () => {

  return (
    <div>
      <h4>Version 1.0.0</h4>
      {/* <a href="/">Go Back</a> //When using the anchor tag, browser kind of refreshes/reloads, which is not the desirable behavior. */}

    {/* Use Link with routes, which basically makes it look instant without the reload behavior. */}

      <Link to="/">Go Back</Link> 

    </div>
  ); 

}

export default About;