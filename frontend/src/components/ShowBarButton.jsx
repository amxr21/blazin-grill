const ShowBarButton = ({ isOpen, onToggle }) => {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="NavbarLinks"
            className="nav-bar relative z-[1000] flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border-[0.5px] p-2"
        >
            {/* Three bars that morph into an X, so the control states its own mode. */}
            <span className={`block h-[2px] w-5 bg-current transition-transform duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-5 bg-current transition-transform duration-300 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
    )
}

export default ShowBarButton
