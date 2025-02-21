import DeliveryBanner from "../../assets/images/Delivery.png"

const Delivery = () => {
    return (
        <div id="Delivery" className="mb-32">
            <div className="banner-image relative">
                <img src={DeliveryBanner} className="w-full" alt="" />
                <div className="banner-text font-[Stinger] text-7xl font-bold text-white absolute w-full h-full px-16 top-0 uppercase flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                    <p>No matter where you are in Detroit, Michigan, <span className="text-amber-400">Blazin' Grill</span> is ready to bring the flavor straight to you!</p>
                </div>
            </div>

        </div>
    )
}

export default Delivery;