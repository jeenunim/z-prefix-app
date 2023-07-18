import React, { useState, useContext } from 'react'
import { ParentContext } from '../App'

const EditItem = () => {
    const { itemData } = useContext(ParentContext)
    const [user_table_id, setUser_table_id] = useState((itemData.user_table_id));
    const [Item_Name, setItem_Name] = useState(itemData.Item_Name);
    const [Description, setDescription] = useState(itemData.Description);
    const [Quantity, setQuantity] = useState((itemData.Quantity));

    let link = window.location.href;
    let linkArr = link.split('/');
    let linkID = linkArr.pop() || linkArr.pop();
    let found = itemData.find((e) => e.id == linkID);
    var id = found.id
    console.log(found)

    const handleSubmit = (e) => {
        // Simple POST request with a JSON body using fetch
        e.preventDefault();
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {user_table_id,
                Item_Name, 
                Description,  
                Quantity}
                )
        };
        fetch(`http://localhost:3001/items/${id}`, requestOptions)
        .then(() => {alert('Threat added successfully'); setTimeout(window.location.reload(), 3000)})
    }

    return (
        <div className='editItemContainer'>
            <div>
                <form onSubmit={handleSubmit}>
                    <label className="labelHeaders">User ID:
                        <input name="user"
                        type='text'
                        value={user_table_id} 
                        onChange={(e) =>{if(e.target.value !== null) setUser_table_id(e.target.value)}}/>
                    </label><br/><br/>
                    <label className="labelHeaders">Item Name:
                        <input name="item"
                        type='text'
                        value={Item_Name} 
                        onChange={(e) => {if(e.target.value !== null) setItem_Name(e.target.value)}}/>
                    </label><br/><br/>
                    <label className="labelHeaders">Item Description:
                        <input name="description"
                        type='text'
                        value={Description} 
                        onChange={(e) => {if(e.target.value !== null) setDescription(e.target.value)}}/>
                    </label><br/><br/>
                    <label className="labelHeaders">Item Quantity:
                        <input name="quantity"
                        type='text'
                        value={Quantity} 
                        onChange={(e) => {if(e.target.value !== null) setQuantity(e.target.value)}}/>
                    </label><br/><br/>
                    <button className='submitButton'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditItem