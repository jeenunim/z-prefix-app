import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ParentContext } from '../App'

const ItemDetails = () => {
    const { itemData } = useContext(ParentContext)

    let link = window.location.href;
    let linkArr = link.split('/');
    let linkID = linkArr.pop() || linkArr.pop();
    localStorage.setItem('id', linkID)
    let ID = localStorage.getItem('id')
    let found = itemData.find((e) => e.id == ID);
    console.log(found)

    useEffect(() => {
    localStorage.setItem('Item_Name', found.Item_Name)
    localStorage.setItem('Description', found.Description)
    localStorage.setItem('Quantity', found.Quantity)
},[])
    
    
    return (
        <div className="container">
            <div className="itemName">Item Name: {`${localStorage.getItem('Item_Name')}`}</div>
            <div className="itemDetails">Description: {`${localStorage.getItem('Description')}`}</div>
            <div className="itemQuantity">Quantity: {`${localStorage.getItem('Quantity')}`}</div>
            <div>
                <Link to={`/editItem/${localStorage.getItem('id')}`}><button>Edit</button></Link>
            </div>
        </div>
    )

}

export default ItemDetails