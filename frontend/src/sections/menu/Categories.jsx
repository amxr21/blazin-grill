import { CategoryHeader, CategoryMeals } from "../../components" 

import { menu } from '../../data'
 
const Categories = () => {
    return (
        <div>

            {
                menu.map((group, i) => { 
                    return (
                        <div key={i} className="category px-8 lg:px-16 mt-10 mb-40">
                            
                            <CategoryHeader
                                category={group['category']}
                                addOns="Add fries:+ $2.99"
                            />

                            <CategoryMeals meals={[group['category'],group['items']]} />
                            
                            

                        </div>
                    )
                })
            }



        </div>
    )
}

export default Categories