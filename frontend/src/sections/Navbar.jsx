import { ActionButton, Logo, Navlinks } from '../components/index'

const Navbar = () => {
    return (
        <div id="Navbar" className="flex justify-between items-center py-3 px-16 text-lg">
            <Logo width={12} height={12}/>
            <Navlinks/>
            <ActionButton
                text={"Order now"}
                containerClasses={'bg-red-800 text-md px-4 py-1 w-28 text-center text-[#FBF7EE] uppercase'}
                link={'/menu/Order'}
                handleClick={()=>{}}
            />
        </div>
    )
}

export default Navbar;