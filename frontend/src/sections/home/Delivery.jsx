import DeliveryBanner from "../../assets/images/Delivery.png"
import DeliveryBannerMobile from "../../assets/images/Delivery-mobile.png"

const Delivery = () => {
    return (
        <div id="Delivery" className="mb-32">
            <div className="banner-image relative">
                {
                    window.innerWidth > 1200
                    ?
                    <img src={DeliveryBanner} className="w-full" alt="" />
                    :
                    <img src={DeliveryBannerMobile} className="w-full" alt="" />
                    
                }
                <div className="banner-text font-[Stinger] text-5xl lg:text-7xl font-bold text-white absolute w-full h-full px-8 lg:px-16 top-0 uppercase flex items-center justify-center transform   lg:-translate-y-2">
                    <p className="text-justify">No matter where you are in Detroit, Michigan, <span className="text-amber-400">Blazin' Grill</span> is ready to bring the flavor straight to you!</p>
                </div>
            </div>

        </div>
    )
}

export default Delivery;