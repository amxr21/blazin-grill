const CompanySection = () => {
    return (
        <div className="flex gap-x-36">
                    <div>
                    <h3 className="text-2xl font-normal mb-6">INFO</h3>
                    <ul className="space-y-1 text-lg font-extralight">
                        <li>Menu PDF</li>
                        <li>Locations</li>
                        <li>Franchising</li>
                        <li>Our Secret</li>
                    </ul>
                    </div>
                    
                    {/* Company Section */}
                    <div>
                        <h3 className="text-2xl font-normal mb-6">COMPANY</h3>
                        <ul className="space-y-1 text-lg font-extralight">
                            <li>About us</li>
                            <li>Get in touch</li>
                            <li>Join the team!</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                </div>
    )
}

export default CompanySection