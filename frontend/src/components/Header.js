import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul className='menu'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/addItem">Add Item</Link></li>
    </ul>
  )
}

export default Header