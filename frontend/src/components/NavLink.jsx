import { NavLink as RouterNavLink } from 'react-router-dom'

const NavLink = ({ text, link, classes = '', onNavigate, tabIndex }) => {
    // 'Blazin' is the brand/home entry; the rest map to their own route.
    const to = link.toLowerCase() === 'blazin' ? '/' : `/${link.toLowerCase()}`

    return (
        <RouterNavLink
            to={to}
            end={to === '/'}
            onClick={onNavigate}
            tabIndex={tabIndex}
            // Highlighting the current page is the cheapest orientation cue there is.
            className={({ isActive }) =>
                `transition-colors hover:opacity-70 ${isActive ? 'font-bold underline underline-offset-8' : ''} ${classes}`
            }
        >
            {text}
        </RouterNavLink>
    )
}

export default NavLink
