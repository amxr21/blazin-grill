const BranchCard = ({ Id, header, storyText, imageLink, tilt = 0, nudge = 0, step, index = 0 }) => {

    let cardStyle = ''

    if (header == 'Coming Soon') {
        cardStyle = 'soon'
    }

    // Later cards sit lower and on top, so the pile reads front-to-back.
    const style = {
        '--tilt': `${tilt}deg`,
        '--nudge': `${nudge}px`,
        '--top': `${index * step.base}rem`,
        '--top-lg': `${index * step.desktop}rem`,
        zIndex: index + 1,
    }

    return (
        <div
            id={Id}
            style={style}
            className={`branch-card pile-card absolute left-0 flex flex-col bg-[#f6f0df] p-4 lg:p-8 w-[20rem] lg:w-[36rem] h-[22rem] lg:h-[40rem] gap-y-4 lg:gap-y-8 ${cardStyle} overflow-hidden`}
        >
            <div className="image w-full h-44 lg:h-96 overflow-hidden bg-amber-300">
                <img
                    src={imageLink}
                    alt={header == 'Coming Soon' ? 'A new Blazin Grill branch, opening soon' : `The ${header} storefront`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col lg:gap-y-2">
                <h2 className="text-3xl lg:text-5xl font-bold font-[Stinger]">{Id + 1 + ". " + header}</h2>
                <p className="text-xs lg:text-lg font-normal text-justify lg:leading-6">{storyText}</p>
            </div>
        </div>
    )
}

export default BranchCard;
