import ActionButton from "./ActionButton";

const Location = ({ state, city, address, phoneNumber }) => {
    // Strip formatting so the tel: link dials correctly.
    const dial = String(phoneNumber || '').replace(/[^\d+]/g, '')

    return (
        <div className="location font-[Stinger] flex flex-col gap-y-3">
            <div>
                <h3 className="text-lg lg:text-xl uppercase">{city}</h3>
                <h4 className="uppercase text-4xl lg:text-5xl font-bold">{state}</h4>
                {/* A phone number on a restaurant page should be tappable. */}
                <a href={`tel:${dial}`} className="uppercase text-xl lg:text-3xl font-normal hover:underline">
                    {phoneNumber}
                </a>
                <p className="text-lg lg:text-xl font-extralight">{address}</p>
            </div>

            <ActionButton
                text="Order now"
                containerClasses="bg-red-500 w-full lg:w-36 text-center flex justify-center items-center py-1.5 lg:py-2"
                buttonClasses="uppercase text-xl lg:text-2xl text-[#FBF7EE] font-[Antonio]"
                link="/menu"
            />
        </div>
    )
}

export default Location;
