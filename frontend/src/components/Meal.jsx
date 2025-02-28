import PriceLabel from "../assets/images/label.png"

import { MealPrice } from './index'

const Meal = ({image, name, category, ingredients, price}) => {
 
    return (
        <div className="meal flex flex-col items-center">
            
            <div className={`meal-image ${category == 'sub' ? 'w-96' : 'w-fit'} relative flex flex-col items-center`}>
                <img src={image} alt="" className="z-50 w-fit h-full " />

                <div className="absolute bottom-4 z-0 meal-shadow opacity-80 w-64 h-10 bg-black rounded-[50%] shadow-lg"></div>
            </div>

            <div className="line font-extralight bg-[#FBF7EE] h-6 mt-4 text-[#FBF7EE] border-t border-black w-3/4">...</div>

            <div className="h-24 text-center">
                <h4 className="meal-name text-2xl font-normal uppercase">{name}</h4>
                <p className="meal-name text-[1.18rem] lg:text-lg font-extralight">{ingredients}</p>
            </div>
            <div className="w-full flex justify-center gap-6">
                {
                    typeof price != "object"
                    ?
                    <MealPrice priceLabel={PriceLabel} price={'$' + price} number={1} />
                    :
                    Object.entries(price).map((p, i) => {
                        return (
                            <MealPrice key={i} priceLabel={PriceLabel} price={'$' + p[1]} number={p[0]} />
                        )
                    })
                }

            </div>

            

        </div>
    )
}

export default Meal