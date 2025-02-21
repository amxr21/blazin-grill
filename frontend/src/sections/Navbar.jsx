import { ActionButton, Logo, Navlinks } from '../components/index'

const Navbar = () => {
    return (
        <div id="Navbar" className="flex justify-between items-center py-3 px-16 text-lg">
            <Logo width={12} height={12}/>
            <Navlinks/>
            <ActionButton
                text={"Order now"}
                classes={'bg-red-800 text-md px-6 py-4 text-[#FBF7EE] uppercase'}
                handleClick={()=>{}}
            />
        </div>
    )
}

export default Navbar;