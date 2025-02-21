const Meal = ({image, name, category, ingredients, price}) => {
    return (
        <div className="meal flex flex-col items-center">
            
            <div className={`meal-image ${category == 'sub' ? 'w-96' : 'w-fit'} relative flex flex-col items-center`}>
                <img src={image} alt="" className=" z-50 w-fit h-full " />

                <div className="absolute bottom-4 z-0 meal-shadow opacity-80 w-64 h-10 bg-black rounded-[50%] shadow-lg"></div>
            </div>

            <div className="line font-extralight bg-[#FBF7EE] h-6 mt-4 text-[#FBF7EE] border-t border-black w-3/4">...</div>

            <div className="h-24 text-center">
                <h4 className="meal-name text-2xl font-normal uppercase">{name}</h4>
                <p className="meal-name text-sm font-light">{ingredients}</p>
            </div>
                

            <div className="meal-price bg-red-700 rounded-lg text-[#FBF7EE] py-2 px-6">
                <p className="font-[Stinger] text-3xl">$ {price}</p>
            </div>

        </div>
    )
}

export default Meal