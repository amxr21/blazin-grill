import ShatteredPapaer from "../assets/images/shattered-paper.png"

const TopBanner = ({header, subheader}) => {
    return (
        <div className="top-banner relative -mb-10">

            <img src={ShatteredPapaer} alt="" className="w-full h-96" />

            <div className="absolute text-white top-0 left-0 px-8 w-full h-9/12 flex flex-col items-center justify-center">
                <h2 className="header text-[5.5rem] font-bold uppercase">{header}</h2>
                <p className="sub-header text-2xl font-extralight">{subheader}</p>

            </div>
        </div>
    )
}

export default TopBanner