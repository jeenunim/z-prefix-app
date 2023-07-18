import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import ItemDetails from './components/itemDetails'
import Header from './components/Header'
import AddItem from './components/AddItem'
import EditItem from './components/EditItem'

export const ParentContext = createContext();

function App() {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/items')
    .then(res => res.json())
    .then(data => setItemData(data))
  }, [])

  return (
    <ParentContext.Provider value={{ itemData, setItemData}}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/itemDetails/:id' element={<ItemDetails />} />
          <Route path='/addItem' element={<AddItem />} />
          <Route path='/editItem/:id' element={<EditItem />} />
        </Routes>
      </Router>
    </ParentContext.Provider>
  );
}

export default App;
