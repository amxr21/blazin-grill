import DeliveryBanner from "../../assets/images/Delivery.png"
import DeliveryBannerMobile from "../../assets/images/Delivery-mobile.png"

const Delivery = () => {
    return (
        <div id="Delivery" className="mb-32">
            <div className="banner-image relative">
                {/* <picture> lets the browser pick the source at layout time. The old
                    JS width check ran once on mount, so a resize kept the wrong art. */}
                <picture>
                    <source media="(min-width: 1200px)" srcSet={DeliveryBanner} />
                    <img
                        src={DeliveryBannerMobile}
                        className="w-full"
                        alt=""
                        aria-hidden="true"
                    />
                </picture>

                <div className="banner-text font-[Stinger] text-3xl sm:text-4xl lg:text-7xl font-bold text-white absolute w-full h-full px-8 lg:px-16 top-0 uppercase flex items-center justify-center lg:-translate-y-2">
                    <p>No matter where you are in Detroit, Michigan, <span className="text-amber-400">Blazin&apos; Grill</span> is ready to bring the flavor straight to you!</p>
                </div>
            </div>
        </div>
    )
}

export default Delivery;
