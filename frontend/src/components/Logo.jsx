import { Link } from 'react-router-dom'
import LogoSrc from '../assets/images/logo.png'

/**
 * Sizes come through as inline style, not `w-${width}`: Tailwind never emits
 * classes built by interpolation, so the old version rendered with no size.
 */
const Logo = ({ width = 12, height = 12, classes = '' }) => {
    const size = { width: `${Number(width) * 0.25}rem`, height: `${Number(height) * 0.25}rem` }

    return (
        <Link to="/" aria-label="Blazin Grill — home" className="shrink-0">
            <div style={size} className={classes}>
                <img className="h-full w-full object-contain" src={LogoSrc} alt="Blazin Grill logo" />
            </div>
        </Link>
    )
}

export default Logo
