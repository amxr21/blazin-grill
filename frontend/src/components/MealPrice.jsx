const MealPrice = ({priceLabel, price, number}) => {
    return number == 1
    ?
        <div>
            <div className="relative min-w-fit flex items-center justify-center -mt-5 meal-price rounded-lg text-[#FBF7EE] ">
                <img src={priceLabel} className="w-32" alt="" />
                <p className="absolute font-[Stinger] font-normal text-3xl">{price}</p>
                <p className="absolute font-[Stinger] font-normal text-3xl">{price}</p>
            </div>
        </div>
    :
        <div className="h-full relative min-w-fit flex flex-col gap-2 z-50 items-center justify-center -mt-5 meal-price rounded-lg text-[#FBF7EE] ">
            <img src={priceLabel} className="w-28 h-24" alt="" />
            <div className="absolute text-center flex flex-col items-center justify-center">
                <p className="font-[Stinger] text-[1.6rem] -mt-1">{price}</p>
                <p className="font-[Stinger] uppercase text-[1rem] font-extralight ">{number} pcs</p>

            </div>
        </div>
}

export default MealPrice