import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './app.css';


function Nav(){
    return(
      <>
       <BrowserRouter >
          <div className="nav">
            <ul className="menu">
            <li><Link to="/" id="home">Home</Link></li>
            <li><Link to="/"> About Me</Link> </li>
            <li><Link to="/"> Resume</Link></li>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/" id="contact">Contact</Link></li>
          </ul>
         </div>
        </BrowserRouter>
     
   

        
        </>
    );
}

export default Nav;