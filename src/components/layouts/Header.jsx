import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul>
            <li><Link class="active" href="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/books">Books</Link></li>
        </ul>

    )
}
export default Header;