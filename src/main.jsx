import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Body from './body.jsx';


import Nav from './Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Nav />
    <Body />
    

  </React.StrictMode>,
)
