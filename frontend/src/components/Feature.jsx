const Feature = ({index, header, paragraph, imageLink}) => {
    return (
        <div className={`feature flex flex-col-reverse ${index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-4 lg:gap-24 w-full`}>
            <div className="text flex-8 text-center lg:text-justify">
                <div className="header text-justify text-4xl lg:text-7xl font-semibold uppercase">{header}</div>
                <div className="paragraph text-[1.2rem] lg:text-3xl font-light">{paragraph}</div>
            </div>
            <div className="image flex-7 bg-amber-500">
                <img src={imageLink} alt="" className="w-full" />
            </div>
        </div>
    )
}

export default Feature;