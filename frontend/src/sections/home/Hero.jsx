import HeroVideo from '../../assets/images/Bf.mp4'

import { HeroText } from '../../components/index'

const Hero = () => {
    return (
        <div id="Hero" className="bg-red-500 h-[100vh]"> 
            <div className='hero-video relative w-full h-full overflow-hidden lg:py-4'>
                <video autoPlay playsInline muted loop className='absolute scale-120 lg:scale-100 w-full -right-30 lg:-right-50  lg:-bottom-[150%]'>
                    <source src={HeroVideo} />
                </video>
                <HeroText />
            </div>
        </div>
    )
}

export default Hero