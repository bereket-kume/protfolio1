import { Link } from "react-router-dom";
import { useState } from "react";
import ReorderIcon from '@material-ui/icons/Reorder';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-center bg-dark" style={{ width:'100%',top:0,zIndex:'1'}}>
      <div className="container">
        <Link className="navbar-brand text-white" to="/">Logo</Link>
        
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <ReorderIcon className="text-white" />
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-white text-decoration-none" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-decoration-none" to="/project">Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-decoration-none" to="/experience">Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;