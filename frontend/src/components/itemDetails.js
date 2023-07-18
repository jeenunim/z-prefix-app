import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ParentContext } from '../App'

const ItemDetails = () => {
    const { itemData } = useContext(ParentContext)
    const [itemDetails, setItemDetails] = useState([])
    const navigate = useNavigate();

    let link = window.location.href;
    let linkArr = link.split('/');
    let linkID = linkArr.pop() || linkArr.pop();
    let found = itemData.find((e) => e.id == linkID);
    console.log(found)

    useEffect(() => {

        fetch(`http://localhost:3001/item/${found.id}`)
          .then(
            response => response.json()
          )
          .then(data => setItemDetails(data))
      }, [itemDetails]);
    
    return (
        <div className="container">
            <div className="itemName">Item Name: {`${found.Item_Name}`}</div>
            <div className="itemDetails">Description: {`${found.Description}`}</div>
            <div className="itemQuantity">Quantity: {`${found.Quantity}`}</div>
            <div>
                <Link to={`/editItem/${found.id}`}><button>Edit</button></Link>
            </div>
        </div>
    )

}

export default ItemDetails