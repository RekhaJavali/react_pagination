import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App_paginate from "./App_paginate.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <App_paginate />
  </React.StrictMode>,
)
