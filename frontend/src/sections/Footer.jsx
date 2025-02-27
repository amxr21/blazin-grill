import { CompanyInfo, CompanySection, SocialmediaSection } from "../components"

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-16 overflow-hidden">
            <div className="max-w-full grid grid-cols-3 gap-8 px-6">
                <CompanyInfo />
                
                <CompanySection />
                
                <SocialmediaSection />
                
            </div>
        </footer>
    )
}


export default Footer