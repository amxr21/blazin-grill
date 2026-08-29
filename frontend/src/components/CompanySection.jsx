import { Link } from 'react-router-dom'

const infoLinks = [
    { label: 'Menu PDF', to: '/menu' },
    { label: 'Locations', to: '/locations' },
    { label: 'Franchising', to: '/us' },
    { label: 'Our Secret', to: '/us' },
]

const companyLinks = [
    { label: 'About us', to: '/us' },
    { label: 'Get in touch', to: '/locations' },
    { label: 'Join the team!', to: '/us' },
    { label: 'FAQs', to: '/us' },
]

const LinkColumn = ({ title, links }) => (
    <div>
        <h3 className="text-lg lg:text-2xl font-normal lg:mb-6">{title}</h3>
        <ul className="space-y-1 text-sm lg:text-lg font-extralight">
            {links.map(({ label, to }) => (
                <li key={label}>
                    <Link to={to} className="hover:underline">{label}</Link>
                </li>
            ))}
        </ul>
    </div>
)

const CompanySection = () => (
    <div className="flex gap-x-16 lg:gap-x-36">
        <LinkColumn title="INFO" links={infoLinks} />
        <LinkColumn title="COMPANY" links={companyLinks} />
    </div>
)

export default CompanySection
