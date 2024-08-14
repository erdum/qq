import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountCreated from './AccountCreated';
import AccountDeleted from './AccountDelete';
import Logout from './LogOut';
import './App.css'; // Import the stylesheet



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountCreated />} />
        <Route path="/Created" element={<AccountCreated />} />
        <Route path="/deleted" element={<AccountDeleted />} />
        <Route path="/logout" element={<Logout />} />


        




        

      </Routes>
    </Router>
  );
}
