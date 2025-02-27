import { CompanyInfo, CompanySection, SocialmediaSection } from "../components"

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 lg:py-16 px-8 lg:px-16 overflow-hidden">
            <div className="max-w-full lg:grid lg:grid-cols-3 lg:gap-8 lg:px-6 ">
                <CompanyInfo />
                
                <CompanySection />
                
                <SocialmediaSection />
                
            </div>
        </footer>
    )
}


export default Footer