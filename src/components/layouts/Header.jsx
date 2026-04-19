import './Header.css'
import { Link } from 'react-router-dom';
import './Header.css'
import { NavLink } from 'react-router-dom'; // 1. Đổi Link thành NavLink

const Header = () => {
    return (
        <ul>
            {/* 2. Sử dụng NavLink và thuộc tính 'to' thay vì 'href' */}
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/users"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/books"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Books
                </NavLink>
            </li>
        </ul>
    )
}
export default Header;
