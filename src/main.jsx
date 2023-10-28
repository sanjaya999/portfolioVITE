import React from 'react'
import ReactDOM from 'react-dom/client'

import Body from './body.jsx';


import Nav from './Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <Nav />
    <Body />
    

  </React.StrictMode>,
)
