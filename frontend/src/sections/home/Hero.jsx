import HeroVideo from '../../assets/images/Bf.mp4'
import { HeroText } from '../../components/index'

const Hero = () => {
    return (
        <div id="Hero" className="bg-red-500 h-[100svh]">
            <div className="hero-video relative w-full h-full overflow-hidden lg:py-4">
                <video
                    autoPlay
                    playsInline
                    muted
                    loop
                    // Decorative background footage: keep it out of the a11y tree, and
                    // don't let a 6 MB file block first paint on a phone.
                    aria-hidden="true"
                    tabIndex={-1}
                    preload="metadata"
                    className="absolute scale-120 lg:scale-100 w-full -right-30 lg:-right-50 lg:-bottom-[150%]"
                >
                    <source src={HeroVideo} type="video/mp4" />
                </video>
                <HeroText />
            </div>
        </div>
    )
}

export default Hero
