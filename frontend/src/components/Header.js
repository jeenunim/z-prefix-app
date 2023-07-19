import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ParentContext } from '../App';
import './Header.css'

const Header = () => {

  const { userData } = useContext(ParentContext)
  let user = userData.map((e) => e.Username)
  let addItem = null;
  let logout = null;
  let userInfo = null;
  let username = localStorage.getItem('username')
  let login = <Link to="/login">Login</Link>

  if (user.includes(username)) {
    addItem = <Link to="/addItem">Add Item</Link>
    logout = <Link to={'/logout'}><button>Log out</button></Link>
    userInfo = <div>Logged in as: {username}</div>
    login = null;
  }

  return (
    <div>
    <ul className='menu'>
      <li><Link to="/">Home</Link></li>
      <li>{login}</li>
      <li>{addItem}</li>
      <li>{logout}</li>
      <li>{userInfo}</li>
    </ul>
    </div>
  )
}

export default Header