import HeroFeatures from "./HeroFeatures"
import QrCode from "./QrCode"

const HeroText = () => {
    return (
        <div className='absolute flex flex-col gap-y-10 justify-end h-full top-0 left-0 z-50 w-8/12 px-16 py-20 font-bold text-8xl text-white'>
            <h2>Detroit’s Newest food lovers spot!</h2>
            <HeroFeatures />
            <QrCode />
        </div>
    )
}

export default HeroText