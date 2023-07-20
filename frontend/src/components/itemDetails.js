import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ParentContext } from '../App'

const ItemDetails = () => {
    const { itemData, userData } = useContext(ParentContext)
    const [ item, setItem ] = useState()
    let edit = null;
    let remove = null;

    // let link = window.location.href;
    // let linkArr = link.split('/');
    // let linkID = linkArr.pop() || linkArr.pop();
    // console.log(localStorage.getItem(linkID))

    // let item = itemData.find((e) => e.id == localStorage.getItem(linkID))
    useEffect(() => {
        let link = window.location.href;
        let linkArr = link.split('/');
        let linkID = linkArr.pop() || linkArr.pop();
        const storedItemId = localStorage.getItem(linkID);
    
        let items = itemData.find((e) => e.id == storedItemId);
        setItem(items);
    }, [itemData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/items/${item.id}`,  { method: 'DELETE' })
        .then(() => {alert('Item deleted successfully'); setTimeout(window.location.href = '/', 3000)})
    }

    let user = userData.map((e) => e.Username)
    let username = localStorage.getItem('username')
    if (user.includes(username) && item) {
        edit = <Link to={`/editItem/${item.id}`}><button>Edit</button></Link>
        remove = <form onSubmit={handleSubmit}><button >Remove</button></form>
    }

    if (!item) {
        return <div>Loading...</div>;
      }
    
    return (
        <div className="container">
            <div className="itemName">Item Name: {item.Item_Name}</div>
            <div className="itemDetails">Description: {item.Description}</div>
            <div className="itemQuantity">Quantity: {item.Quantity}</div>
            <div className='buttons'>
                {edit}{remove}
            </div>
        </div>
    )

}

export default ItemDetails