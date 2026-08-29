import ShatteredPapaer from "../assets/images/shattered-paper.png"

/**
 * `size` replaces the old `Key` prop, which matched on magic strings
 * ('Who are we?') and shadowed React's reserved `key`. Menu never passed it,
 * so its heading silently fell through to the wrong branch.
 */
const TopBanner = ({ header, subheader, size = 'lg' }) => {
    const bannerHeight = size === 'sm' ? 'h-64' : 'h-80'
    const headingSize = size === 'sm' ? 'text-[2.9rem]' : 'text-[3.5rem] sm:text-[5rem]'

    return (
        <div className="top-banner relative -mb-10">
            <img
                src={ShatteredPapaer}
                alt=""
                aria-hidden="true"
                className={`w-full ${bannerHeight} lg:h-96 object-cover`}
            />

            <div className="absolute text-white top-0 left-0 px-8 w-full h-8/12 lg:h-9/12 flex flex-col lg:items-center justify-center">
                <h1 className={`header ${headingSize} lg:text-[5.5rem] font-bold uppercase`}>
                    {header}
                </h1>
                <p className="sub-header text-[1rem] lg:text-2xl font-extralight">{subheader}</p>
            </div>
        </div>
    )
}

export default TopBanner
