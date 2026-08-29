import { CategoryHeader, CategoryMeals } from "../../components"

import { menu } from '../../data'

const slug = (s) => s.replace(/\s+/g, '-')

const Categories = () => {
    return (
        <div>
            {/* Jump bar: 5 categories is a lot of scrolling to reach "sides". */}
            <nav
                aria-label="Menu categories"
                className="sticky top-0 z-40 mb-10 border-y border-black/10 bg-[#FBF7EE]/95 backdrop-blur px-8 lg:px-16 py-3"
            >
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base lg:text-xl uppercase font-[Antonio]">
                    {menu.map((group) => (
                        <li key={group.category}>
                            <a
                                href={`#${slug(group.category)}`}
                                className="hover:text-[#B20E05] transition-colors"
                            >
                                {group.category}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {
                menu.map((group, i) => {
                    return (
                        <section
                            key={i}
                            id={slug(group.category)}
                            // scroll-mt keeps the heading clear of the sticky bar.
                            className="category px-8 lg:px-16 mt-10 mb-40 scroll-mt-24"
                        >
                            <CategoryHeader
                                category={group['category']}
                                addOns="Add fries:+ $2.99"
                            />

                            <CategoryMeals meals={[group['category'], group['items']]} />
                        </section>
                    )
                })
            }
        </div>
    )
}

export default Categories
