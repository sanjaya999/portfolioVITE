import React from 'react';
import './Body.css';
import Image from './assets/sanjaya.png';

function Body() {
  return (
    <>
    
    <div className="me">
    <h1>I'M SANJAYA POUDEL WEB DEVELOPER
    <p>I specialize in Frontend using React.My goal is to create website which visually appealing but also  functional.</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b78705" fillOpacity="0.99" d="M0,256L34.3,250.7C68.6,245,137,235,206,197.3C274.3,160,343,96,411,90.7C480,85,549,139,617,144C685.7,149,754,107,823,122.7C891.4,139,960,213,1029,208C1097.1,203,1166,117,1234,85.3C1302.9,53,1371,75,1406,85.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
    <button className='download'>Download CV</button>
    <button className='HireMe'> Hire Me</button>
    
    </h1>
    
    
      <img src={Image} className='sanIMG' />
   </div>

   


    </>
  );
}

export default Body;
