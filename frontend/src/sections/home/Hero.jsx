import HeroVideo from '../../assets/images/Bf.mp4'

import { HeroText } from '../../components/index'

const Hero = () => {
    return (
        <div id="Hero" className="bg-red-500 h-[90vh]"> 
            <div className='hero-video relative w-full h-full overflow-hidden py-4'>
                <video autoPlay muted loop className='absolute w-full -right-50  -bottom-[150%]'>
                    <source src={HeroVideo} />
                </video>
                <HeroText />
            </div>
        </div>
    )
}

export default Hero