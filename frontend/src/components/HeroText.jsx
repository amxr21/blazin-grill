import HeroFeatures from "./HeroFeatures"
import QrCode from "./QrCode"

const HeroText = () => {
    return (
        <div className='absolute flex flex-col gap-y-20 lg:gap-y-10 justify-end lg:h-[100vh] top-0 left-0 z-50 lg:w-8/12 px-8 lg:px-16 py-10 lg:py-20 font-semibold uppercase text-white'>
            <h2 className="text-[4rem] lg:text-8xl" >Detroit’s Newest food lovers spot!</h2>
            <div className="flex flex-row-reverse lg:flex-col gap-5 lg:gap-10 lg:w-fit w-full justify-between">
                <HeroFeatures />
                <QrCode />

            </div>
        </div>
    )
}

export default HeroText