import React from 'react';
import './header.css'
import { NavLink, Link} from 'react-router-dom';

const Header = () => {

    return (
      <div className="navbar  navbar-dark navbar-expand-lg navbar-fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="./images/logo.jpg" alt=""className="logo"/>
            </Link>
            <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/story">Our Story</NavLink>
            </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/games">Games</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/career">Careers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/support">Support</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fairplay">Safe & Fair Play</NavLink>
            </li>
          </ul>
          <ul className="nav">
           <img src="./images/logo2.jpg" alt="" className="logo2"/>
              <div className="search-icon">
            <i className="fa fa-search"></i>
           </div>
          </ul>
        </div>
    </div>
     );
}
 
export default Header;
