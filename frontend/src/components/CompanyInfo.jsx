import Logo from "../assets/images/logo.png"

const CompanyInfo = () => {
    return (
        <div className="col-span-1 flex flex-col items-start font-[Antonio] font-normal">
            <img src={Logo} alt="Blaizing Grill Logo" className="min-w-9 w-20 lg:min-w-18 min-h-9 h-20 lg:min-h-18 mb-4" />
            <h2 className="text-4xl lg:text-5xl ">BLAIZING GRILL</h2>
            <p className="text-sm mb-5 lg:mb-0 mt-1 lg:mt-0 lg:text-xl font-thin tracking-wider">BURGERS, WRAPPERS, PHILLY'S & MORE !!!!</p>
        </div>
    )
}

export default CompanyInfo