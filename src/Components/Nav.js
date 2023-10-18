import { Link } from "react-router-dom";
function Nav(){
  return(
    <div className="navbar">
      <h1>JP</h1>
     
      <Link to="/" className="link">Home</Link>
      <Link to="about" className="link">About</Link>
      <Link to="mywork" className="link">Projects</Link>
      <Link to="contactme" className="link con">Contact Me</Link>
  
    </div>
  )
}
export default Nav;