const socials = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'Snapchat', href: 'https://snapchat.com' },
    { label: '(Delivery App)', href: 'https://ubereats.com' },
]

const SocialmediaSection = () => {
    return (
        <div>
            <h3 className="text-lg lg:text-2xl font-normal lg:mt-0 mt-8 lg:mb-6">SOCIAL MEDIA</h3>
            {/* <li> must be the direct child of <ul>; the anchor goes inside it. */}
            <ul className="flex space-x-4 text-sm justify-between lg:text-lg font-extralight">
                {socials.map(({ label, href }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialmediaSection
