import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import ItemDetails from './components/itemDetails'
import Header from './components/Header'
import AddItem from './components/AddItem'
import EditItem from './components/EditItem'
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/logout';

export const ParentContext = createContext();

function App() {
  const [itemData, setItemData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/items')
    .then(res => res.json())
    .then(data => setItemData(data))
  }, [])

  useEffect(() => {
      fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUserData(data))
  }, [])

  return (
    <ParentContext.Provider value={{ itemData, setItemData, userData}}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/itemDetails/:id' element={<ItemDetails />} />
          <Route path='/addItem' element={<AddItem />} />
          <Route path='/editItem/:id' element={<EditItem />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Router>
    </ParentContext.Provider>
  );
}

export default App;
