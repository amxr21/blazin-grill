import Logo from "../assets/images/logo.png"

const CompanyInfo = () => {
    return (
        <div className="col-span-1 flex flex-col items-start font-[Queering] font-normal">
            <img src={Logo} alt="Blaizing Grill Logo" className="w-18 h-18 mb-4" />
            <h2 className="text-6xl tracking-widest">BLAIZING GRILL</h2>
            <p className="text-xl font-thin tracking-wider">BURGERS, WRAPPERS, PHILLY'S & MORE !!!!</p>
        </div>
    )
}

export default CompanyInfo