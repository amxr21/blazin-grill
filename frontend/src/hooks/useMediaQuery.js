import { useEffect, useState } from 'react'

/**
 * Subscribes to a media query and re-renders when it changes.
 *
 * Replaces bare `window.innerWidth` reads in render: those are sampled once on
 * mount and never update, so the layout stays stuck at whatever the width was
 * when the component first rendered (resize, or rotating a phone, did nothing).
 */
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(
        () => typeof window !== 'undefined' && window.matchMedia(query).matches
    )

    useEffect(() => {
        const mql = window.matchMedia(query)
        const onChange = (e) => setMatches(e.matches)

        setMatches(mql.matches)
        mql.addEventListener('change', onChange)
        return () => mql.removeEventListener('change', onChange)
    }, [query])

    return matches
}

export default useMediaQuery

// The breakpoint the layout switches at. Matches the `lg:` usage across the app.
export const useIsDesktop = () => useMediaQuery('(min-width: 1200px)')
