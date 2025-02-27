const BranchCard = ({Id, header, storyText, imageLink, classes}) => {

    let style = ''

    if(header == 'Coming Soon'){
        style = 'soon'
    }


    return (
        <div id={Id} className={`branch-card absolute flex flex-col bg-[#f6f0df] p-8 w-[36rem] h-[40rem] gap-y-8 ${classes} ${style} overflow-hidden`} >

            <div className="image w-full h-96 overflow-hidden bg-amber-300">
                <img src={imageLink} alt="" />
            </div>

            <div className="flex flex-col gap-y-2">
                <h2 className="text-5xl font-bold font-[Stinger]">{Id+1 + ". " + header}</h2>
                <p className="text-lg font-normal text-justify leading-6">{storyText}</p>

            </div>
        </div>
    )
}

export default BranchCard;