const BranchCard = ({Id, header, storyText, imageLink, classes, style}) => {

    let cardStyle = ''

    if(header == 'Coming Soon'){
        cardStyle = 'soon'
    }


    return (
        <div id={Id} style={style} className={`branch-card absolute flex flex-col bg-[#f6f0df] p-4 lg:p-8 w-[20rem] lg:w-[36rem] h-[22rem] lg:h-[40rem] gap-y-4 lg:gap-y-8 ${classes} ${cardStyle} overflow-hidden transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`} >

            <div className="image w-full h-44 lg:h-96 overflow-hidden bg-amber-300">
                <img src={imageLink} alt={header == 'Coming Soon' ? 'A new Blazin Grill branch, opening soon' : `The ${header} storefront`} loading="lazy" />
            </div>

            <div className="flex flex-col lg:gap-y-2">
                <h2 className="text-3xl lg:text-5xl font-bold font-[Stinger]">{Id+1 + ". " + header}</h2>
                <p className="text-xs lg:text-lg font-normal text-justify lg:leading-6">{storyText}</p>

            </div>
        </div>
    )
}

export default BranchCard;
