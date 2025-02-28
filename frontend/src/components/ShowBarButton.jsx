import { useEffect, useRef, useState } from "react";

const ShowBarButton = () => {
    const navbarLinksButton = useRef();
    const [isClicked, setIsClicked] = useState(true);

    const handleClickOutside = (e) => {
        if (navbarLinksButton.current != e.target) {
            setIsClicked(true);
        }
    };
    
    window.addEventListener('click', handleClickOutside);


    useEffect(() => {
        const navbarLinks = document.getElementById('NavbarLinks');
        if (isClicked) {
            navbarLinks.classList.replace('px-8', 'px-0');
            navbarLinks.classList.replace('w-48', 'w-0');
        } else {
            navbarLinks.classList.replace('px-0', 'px-8');
            navbarLinks.classList.replace('w-0', 'w-48');
        }
    }, [isClicked])



    const handleClick = () => {
        const navbarLinks = document.getElementById('NavbarLinks');
        if (navbarLinks) {
            if (isClicked) {
                navbarLinks.classList.replace('px-8', 'px-0');
                navbarLinks.classList.replace('w-48', 'w-0');
            } else {
                navbarLinks.classList.replace('px-0', 'px-8');
                navbarLinks.classList.replace('w-0', 'w-48');
            }
        }
        setIsClicked((prev) => !prev);
    };

    return (
        <button
            ref={navbarLinksButton}
            onClick={handleClick}
            className="nav-bar flex items-center justify-center text-3xl leading-0 w-10 h-10 border-[0.5px] rounded-lg p-2"
        >
            =
        </button>
    );
};

export default ShowBarButton;