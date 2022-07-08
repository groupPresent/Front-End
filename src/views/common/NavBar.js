import {Link} from 'react-router-dom'
import "./navbar.css";
import Menu from '../mainPage/components/Menu'
import { useState } from 'react'

const Navbar=()=>{
  const [menuClicked,setMenuClicked]=useState(false)

  const onClick=()=>{
    setMenuClicked(menuClicked ? false : true)
  }

  return (
  <>
   <nav>
    <button onClick={onClick} class='hamburger'></button>
     {menuClicked&& <Menu/>}
     <Link to="/"><div class='logo'></div></Link>
     <div class='magnifier'></div>
     <div class='addFriends'></div>     
    
  </nav>
  </>    
  );
}

export default Navbar;
