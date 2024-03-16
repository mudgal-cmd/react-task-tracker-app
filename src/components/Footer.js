import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {/* <a href="/about">About</a>// replacing the anchor tag with Link. */}
      <Link to="/about">About</Link>
    </footer>
  );
}

export default Footer;