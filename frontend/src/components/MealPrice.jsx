const MealPrice = ({priceLabel, price, number}) => {
    return number == 1
    ?
        <div>
            <div className="relative min-w-fit flex items-center justify-center -mt-5 meal-price rounded-lg text-[#FBF7EE] ">
                <img src={priceLabel} className="w-32" alt="" />
                <p className="absolute font-[Stinger] text-3xl">{price}</p>
                <p className="absolute font-[Stinger] text-3xl">{price}</p>
            </div>
        </div>
    :
        <div className="h-full relative min-w-fit flex flex-col gap-2 z-50 items-center justify-center -mt-5 meal-price rounded-lg text-[#FBF7EE] ">
            <img src={priceLabel} className="w-32 h-24" alt="" />
            <div className="absolute text-center">
                <p className="font-[Stinger] text-3xl">{price}</p>
                <p className="font-[Stinger] text-lg font-extralight -mt-1.5">{number} pcs</p>

            </div>
        </div>
}

export default MealPrice