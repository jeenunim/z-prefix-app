import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ParentContext } from '../App.js'

const Home = () => {

    const { itemData } = useContext(ParentContext)

    return (
        <main>
            <section>
                <h1>Items</h1>
            </section>
            <div className="card-container">
                {itemData.map((e) => {
                    return (
                        <Link to={`/itemDetails/${e.id}`}>
                            <div className="card" key={`${e.id}`}> 
                                <p className="cardTitle">{`${e.Item_Name}`}</p>
                                <p className="cardDetails">{`${e.Description}`}</p>
                                <p className="cardDetails">{`${e.Quantity}`}</p>
                                {localStorage.setItem(`${e.id}`, e.id)}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    )

}

export default Home;