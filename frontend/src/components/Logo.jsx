import { Link } from 'react-router-dom';

import LogoSrc from "../assets/images/logo.png"

const Logo = ({width, height, classes}) => {
    return (
        <Link to="/">
            <div className={`w-${width} h-${height} ${classes}`}>
                <img className="w-full h-full" src={LogoSrc} alt="" />
            </div>
        </Link>
    )
}

export default Logo;