import './header.css';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    // a: anchor
    return (
        <>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
            </ul>
        </>
    )
}

export default Header;