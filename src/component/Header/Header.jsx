import { NavLink } from 'react-router-dom';
import './Custom.css'
const Header = () => {
    return (
        <div className='divider'>
            <h1>React Router</h1>
            <ul className='nav'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </div>
    );
};

export default Header;