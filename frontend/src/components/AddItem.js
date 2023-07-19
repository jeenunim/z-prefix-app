import React, { useState } from 'react'

const AddItem = () => {
    const [user_table_id, setUser_table_id] = useState(parseInt(0));
    const [Item_Name, setItem_Name] = useState('');
    const [Description, setDescription] = useState('');
    const [Quantity, setQuantity] = useState(parseInt(0));

    const handleSubmit = (e) => {
        // Simple POST request with a JSON body using fetch
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {user_table_id,
                Item_Name, 
                Description,  
                Quantity}
                )
        };
        fetch('http://localhost:3001/items', requestOptions)
        .then(() => {alert('Item added successfully'); setTimeout(window.location.href = '/', 3000)})
    }

    return (
        <div className='addItemContainer'>
            <div>
                <form onSubmit={handleSubmit}>
                    <label className="labelHeaders">User ID:
                        <input name="user"
                        type='text'
                        required
                        value={user_table_id} 
                        onChange={(e) => setUser_table_id(e.target.value)}/>
                    </label><br/><br/>
                    <label className="labelHeaders">Item Name:
                        <input name="item"
                        type='text'
                        required
                        value={Item_Name} 
                        onChange={(e) => setItem_Name(e.target.value)}/>
                    </label><br/><br/>
                    <label className="labelHeaders">Item Description:
                        <input name="description"
                        type='text'
                        required
                        value={Description} 
                        onChange={(e) => setDescription(e.target.value)}/>
                    </label><br/><br/>
                    <label className="labelHeaders">Item Quantity:
                        <input name="quantity"
                        type='text'
                        required
                        value={Quantity} 
                        onChange={(e) => setQuantity(e.target.value)}/>
                    </label><br/><br/>
                    <button className='submitButton'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddItem