import Meal from "./Meal"

const CategoryMeals = ({meals}) => {
    return (
        <div className="meals grid gap-16 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
           {
            meals[1].map((meal, i) => {
                return (
                    <Meal
                        key={i}
                        image={meal.image}
                        name={meal.name}
                        ingredients={meal.description}
                        price={meal.price? meal.price : meal.prices}
                        category={meals[0]}
                    />
                )
            })
           } 

            



        </div>
    )
}

export default CategoryMeals