import logo from './logo.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { Routes, Route, Router } from "react-router-dom";
import Dashboard from './mycomponents/Dashboard';
import Login from './mycomponents/Login';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
    
  );
}

export default App;
