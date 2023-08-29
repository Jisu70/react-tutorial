import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const Obj = React.createElement(
  "a" ,
  {
    href : "http://www.google.com", target : "_blank"
  },
  "Click to open google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
