import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';
import './NavBar.css'

function NavBar() {
  return (

<nav>
   <ul>
   <li>
     <a class='nav'>Predict</a>
   </li>
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
       <Link to="/About">About</Link>
     </li>
     <li>
       <Link to="/FAQ">FAQ</Link>
     </li>

   </ul>
 </nav>

  );
};
export default NavBar;