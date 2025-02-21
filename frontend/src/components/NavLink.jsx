import { Link } from 'react-router-dom';


const NavLink = ({text, link, classes}) => {
    return (
        <Link to={link.toLowerCase()}>
            <p>{text}</p>
        </Link>
    )
}

export default NavLink