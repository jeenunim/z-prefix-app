import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import ItemDetails from './components/itemDetails'

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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/itemDetails/:id' element={<ItemDetails />} />
        </Routes>
      </Router>
    </ParentContext.Provider>
  );
}

export default App;
