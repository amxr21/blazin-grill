import { useEffect, useRef } from "react"
import { Logo, NavLink } from "./index"
import { useIsDesktop } from "../hooks/useMediaQuery"

const links = ['Blazin', 'Menu', 'Locations', 'Us']

const NavLinks = ({ isOpen = false, onClose = () => {} }) => {
    const isDesktop = useIsDesktop()
    const panelRef = useRef(null)

    // Close on Escape — a drawer with no keyboard exit traps keyboard users.
    useEffect(() => {
        if (isDesktop || !isOpen) return
        const onKeyDown = (e) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [isDesktop, isOpen, onClose])

    // Stop the page scrolling behind the open drawer.
    useEffect(() => {
        if (isDesktop) return
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isDesktop, isOpen])

    if (isDesktop) {
        return (
            <nav id="NavbarLinks" aria-label="Main" className="relative flex flex-row w-fit h-fit gap-x-32 text-black">
                {links.map((element) => (
                    <NavLink key={element} text={element} link={element} />
                ))}
            </nav>
        )
    }

    return (
        <>
            {/* Backdrop: gives an obvious tap-to-dismiss target and dims the page. */}
            <div
                onClick={onClose}
                aria-hidden="true"
                className={`fixed inset-0 z-[998] bg-black/50 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
            />

            <nav
                id="NavbarLinks"
                ref={panelRef}
                aria-label="Main"
                aria-hidden={!isOpen}
                className={`fixed top-0 left-0 z-[999] flex h-[100dvh] w-64 flex-col gap-y-8 overflow-y-auto bg-red-900 px-8 py-8 text-white transition-transform duration-300 ease-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <Logo width={22} height={22} classes="p-2 rounded-md border-[0.5px] border-red-600" />
                {links.map((element) => (
                    <NavLink
                        key={element}
                        text={element}
                        link={element}
                        onNavigate={onClose}
                        tabIndex={isOpen ? 0 : -1}
                    />
                ))}
            </nav>
        </>
    )
}

export default NavLinks
