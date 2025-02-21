const Feature = ({index, header, paragraph, imageLink}) => {
    return (
        <div className={`feature flex ${index % 2 ? 'flex-row-reverse' : 'flex-row'} gap-x-24 w-full`}>
            <div className="text flex-8 text-justify">
                <div className="header text-7xl font-bold uppercase">{header}</div>
                <div className="paragraph text-3xl font-light">{paragraph}</div>
            </div>
            <div className="image flex-7 bg-amber-500">
                <img src={imageLink} alt="" className="w-full" />
            </div>
        </div>
    )
}

export default Feature;