import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import App1 from './App1.jsx'
import App2 from './App2.jsx'
import TopNavigator from './TopNavigator.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountingFirm from './Home.jsx'
import Contact from './Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/app1" element={<App1 />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/" element={<AccountingFirm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)