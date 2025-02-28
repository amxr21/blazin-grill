import { ActionButton, Logo, Navlinks, ShowBarButton } from '../components/index'

const Navbar = () => {
    return (
        <div id="Navbar" className="relative flex justify-between items-center py-3 px-8 lg:px-16 text-2xl lg:text-lg gap-x-10 lg:gap-x-0">
            <Logo width={12} height={12}/>
            <Navlinks/>
            {/* <div className='flex gap-x-2 justify-between '> */}
                <ActionButton
                    text={"Order now"}
                    containerClasses={'bg-[#FFB80E] px-4 lg:py-1 w-28 text-center '}
                    buttonClasses={'uppercase text-[#0D0606] text-lg font-bold'}
                    link={'/menu/Order'}
                    handleClick={()=>{}}
                />
                {window.innerWidth < 1200 ? <ShowBarButton/> : ""}

            {/* </div> */}
        </div>
    )
}

export default Navbar;