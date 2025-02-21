import { CategoryHeader, CategoryMeals } from "../../components" 

import { menu } from '../../data'
 
const Categories = () => { 
    return (
        <div>

            {
                menu.map((group) => {
                    return (
                        <div className="category px-16 mt-10 mb-40">
                            
                            <CategoryHeader
                                category={group['category']}
                                addOns="Add fries:+ $2.99"
                            />

                            <CategoryMeals meals={group['items']} />
                            
                            

                        </div>
                    )
                })
            }



        </div>
    )
}

export default Categories