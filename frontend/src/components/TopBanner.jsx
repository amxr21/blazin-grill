import ShatteredPapaer from "../assets/images/shattered-paper.png"

const TopBanner = ({Key, header, subheader}) => {
    
    console.log(Key);
    

    return (
        <div className="top-banner relative -mb-10">

            <img src={ShatteredPapaer} alt="" className={`w-full ${Key == 'Who are we?' ? 'h-64' : 'h-80'} lg:h-96`} />

            <div className="absolute text-white top-0 left-0 px-8 w-full h-8/12 lg:h-9/12 flex flex-col lg:items-center justify-center">
                <h2 className={`header ${(Key == 'Locations' || Key == 'Who are we?')  ? 'text-[2.9rem] text-justify' : 'text-[5rem]'} lg:text-[5.5rem] font-bold uppercase`}>{header}</h2>
                <p className="sub-header text-[1rem] lg:text-2xl font-extralight text-justify">{subheader}</p>

            </div>
        </div>
    )
}

export default TopBanner