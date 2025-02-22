const CompanySection = () => {
    return (
        <div className="flex gap-x-36">
                    <div>
                    <h3 className="text-2xl font-normal mb-6">INFO</h3>
                    <ul className="space-y-1 text-lg font-extralight">
                        <a href="#"><li>Menu PDF</li></a>
                        <a href="#"><li>Locations</li></a>
                        <a href="#"><li>Franchising</li></a>
                        <a href="#"><li>Our Secret</li></a>
                    </ul>
                    </div>
                    
                    {/* Company Section */}
                    <div>
                        <h3 className="text-2xl font-normal mb-6">COMPANY</h3>
                        <ul className="space-y-1 text-lg font-extralight">
                            <a href="#"><li>About us</li></a>
                            <a href="#"><li>Get in touch</li></a>
                            <a href="#"><li>Join the team!</li></a>
                            <a href="#"><li>FAQs</li></a>
                        </ul>
                    </div>

                </div>
    )
}

export default CompanySection