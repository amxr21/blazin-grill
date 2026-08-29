import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Browsers restore scroll on history navigation, but a client-side route change
 * is not a document load — without this you land halfway down the new page.
 */
const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTop
