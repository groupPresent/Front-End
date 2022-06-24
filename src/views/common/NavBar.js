import {Link} from 'react-router-dom'

const Navbar=()=>{
  return (
  <>
   <nav>
    <ul>
      <li><Link to="/">1</Link></li>
      <li><Link to="/">2</Link></li>
      <li><Link to="/">3</Link></li>
      <li><Link to="/">3</Link></li>
      <li><Link to="/">4</Link></li>
      <li><Link to="/">5</Link></li>
    </ul>
  </nav>
  </>    
  );
}

export default Navbar;
