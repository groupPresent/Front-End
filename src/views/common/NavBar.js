import {Link} from 'react-router-dom'
import "./navbar.css";
const Navbar=()=>{


  function logoClick(e) {
    window.location.href = "/"
  }


  function friendClick(e) {
    window.location.href = "/friend"
  }

  return (
  <>
   <nav>
     <button class='hamburger' onClick={logoClick}></button>
     <button class='logo' onClick={logoClick}></button>
     <button class='magnifier'></button>
     <button class='addFriends' onClick={friendClick}></button>

     
    
  </nav>
  </>    
  );
}

export default Navbar;
