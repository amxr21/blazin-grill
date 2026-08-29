import { Link } from 'react-router-dom'

/**
 * Renders a real <a> (via Link) when it navigates, and a real <button> when it
 * acts. Previously it nested an <a> inside a <button> — invalid HTML, and the
 * raw href forced a full page reload instead of client-side routing.
 */
const ActionButton = ({ text, link, containerClasses = '', buttonClasses = '', handleClick }) => {
    const classes = `h-fit cursor-pointer inline-flex items-center justify-center ${buttonClasses}`
    const wrapper = `${containerClasses} flex items-center justify-center py-1 grow lg:grow-0`

    // Internal route -> client-side Link. Anything else stays a plain anchor.
    const isInternal = typeof link === 'string' && link.startsWith('/')

    return (
        <div className={wrapper}>
            {link && link !== '#' ? (
                isInternal ? (
                    <Link to={link} onClick={handleClick} className={classes}>{text}</Link>
                ) : (
                    <a href={link} onClick={handleClick} className={classes} rel="noopener noreferrer">{text}</a>
                )
            ) : (
                <button type="button" onClick={handleClick} className={classes}>{text}</button>
            )}
        </div>
    )
}

export default ActionButton
