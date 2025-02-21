import NavLink from "./NavLink"

const NavLinks = () => {

    const links = ['Blazin', 'Menu', 'Locations', 'Us']



    return (
        <div className="flex h-fit gap-x-32">

            {
                links.map((element) => {
                    return (
                        <NavLink
                            key={element}
                            text={element}
                            link={''+element}
                            classes={""}
                        />

                    )
                })
            }

        </div>
    )
}

export default NavLinks