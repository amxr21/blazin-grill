import { ActionButton, Logo, Navlinks } from '../components/index'

const Navbar = () => {
    return (
        <div id="Navbar" className="flex justify-between items-center py-3 px-8 lg:px-16 text-lg">
            <Logo width={12} height={12}/>
            <Navlinks/>
            <ActionButton
                text={"Order now"}
                containerClasses={'bg-[#FFB80E] px-4 py-1 w-28 text-center '}
                buttonClasses={'uppercase text-[#0D0606] text-md font-bold'}
                link={'/menu/Order'}
                handleClick={()=>{}}
            />
        </div>
    )
}

export default Navbar;