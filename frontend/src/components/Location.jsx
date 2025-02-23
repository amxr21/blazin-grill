import ActionButton from "./ActionButton";

const Location = ({state, city, address, phoneNumber}) => {
    return (
        <div className="location font-[Stinger] flex flex-col gap-y-3">
            <div>
                <h6 className="text-xl uppercase">{city}</h6>
                <h4 className="uppercase text-5xl font-bold">{state}</h4>
                <h5 className="uppercase text-3xl font-normal">{phoneNumber}</h5>
                <p className="text-xl font-extralight">{address}</p>
            </div>

            <ActionButton
                key={'Order now'}
                text={'Order now'}
                containerClasses={"bg-red-500 w-40 text-center flex justify-center items-center py-5 "}
                buttonClasses={"uppercase text-2xl text-[#FBF7EE] font-[Antonio]"}
                link={'#'}
                
                handleClick={() => {console.log('====================================');
                console.log('test');
                console.log('====================================');}}
            />

        </div>
    )
}


export default Location;