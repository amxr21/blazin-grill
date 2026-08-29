const BranchCard = ({ index, header, storyText, imageLink, classes = '' }) => {
    const isComingSoon = header === 'Coming Soon'

    return (
        <article
            className={`branch-card ${isComingSoon ? 'soon' : ''} flex w-full max-w-[20rem] lg:max-w-[36rem] flex-col gap-y-4 overflow-hidden bg-[#f6f0df] p-4 transition-transform duration-300 hover:rotate-0 lg:gap-y-8 lg:p-8 ${classes}`}
        >
            <div className="image h-44 w-full overflow-hidden bg-amber-300 lg:h-96">
                <img
                    src={imageLink}
                    alt={isComingSoon ? 'A new Blazin Grill branch, opening soon' : `The ${header} storefront`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-col lg:gap-y-2">
                <h2 className="font-[Stinger] text-3xl font-bold lg:text-5xl">
                    {`${index + 1}. ${header}`}
                </h2>
                <p className="text-xs font-normal lg:text-lg lg:leading-6">{storyText}</p>
            </div>
        </article>
    )
}

export default BranchCard
