import { Logo, Navlink } from "./index"

const NavLinks = () => {

    const links = ['Blazin', 'Menu', 'Locations', 'Us']



    return (
        <div id="NavbarLinks" className="lg:relative fixed top-0 left-0 bg-red-900 lg:bg-transparent text-white lg:text-black flex flex-col lg:flex-row lg:w-fit w-0 lg:h-fit h-[100vh] px-0 lg:px-0 py-8 lg:py-0 z-[999] gap-y-8 lg:gap-x-32 overflow-hidden">

{
    window.innerWidth < 1200
    ?
    (
        <>
            <Logo width="22" height="22" classes={' p-2 rounded-md border-[0.5px] border-red-600'} />
            {links.map((element) => (
                <NavLink
                    key={element}
                    text={element}
                    link={element}
                    classes=""
                />
            ))}
        </>
    )
    :
    (
        links.map((element) => (
            <NavLink
                key={element}
                text={element}
                link={element}
                classes=""
            />
        ))
    )
}

        </div>
    )
}

export default NavLinks