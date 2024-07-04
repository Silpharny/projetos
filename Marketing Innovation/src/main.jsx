import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './compontents/Header'
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home/>
  </React.StrictMode>,
)
