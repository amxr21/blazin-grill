import Meal from "./Meal"

const CategoryMeals = ({meals}) => {
    return (
        <div className="meals grid gap-16 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 ">
           {
            meals.map((meal) => {
                return (
                    <Meal
                        image={meal.image}
                        name={meal.name}
                        ingredients={meal.description}
                        price={meal.price}
                    />
                )
            })
           } 

            



        </div>
    )
}

export default CategoryMeals