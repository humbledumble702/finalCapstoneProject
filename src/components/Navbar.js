import { Link } from 'react-router-dom'
import logo from '../images/main logo.png'

export default function Navbar() {
  return (
    <nav className='nav'>
        <Link to="/home"><img src={logo} alt="logo" /></Link>
        <ul>
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/menu">MENU</Link></li>
            <li><Link to="/reservations">RESERVATIONS</Link></li>
            <li><Link to="/order online">ORDER ONLINE</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
        </ul>
    </nav>
  )
}
