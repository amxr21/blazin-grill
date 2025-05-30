import ActionButton from "./ActionButton";

const Location = ({state, city, address, phoneNumber}) => {
    return (
        <div className="location font-[Stinger] flex flex-col gap-y-3">
            <div>
                <h6 className="text-lg lg:text-xl uppercase">{city}</h6>
                <h4 className="uppercase text-4xl lg:text-5xl font-bold">{state}</h4>
                <h5 className="uppercase text-xl lg:text-3xl font-normal">{phoneNumber}</h5>
                <p className="text-lg lg:text-xl font-extralight">{address}</p>
            </div>

            <ActionButton
                key={'Order now'}
                text={'Order now'}
                containerClasses={"bg-red-500 w-full lg:w-36 text-center flex justify-center items-center py-1.5 lg:py-2"}
                buttonClasses={"uppercase text-xl lg:text-2xl text-[#FBF7EE] font-[Antonio]"}
                link={'#'}
                
                handleClick={() => {console.log('====================================');
                console.log('test');
                console.log('====================================');}}
            />

        </div>
    )
}


export default Location;