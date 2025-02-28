const CategoryHeader = ({category, addOns}) => {
    return (
        <div className="header flex flex-col text-center border-b pb-4 lg:pb-8 uppercase mb-5 lg:mb-10">
            <h2 className="text-5xl lg:text-6xl font-bold lg:mb-2">{category}</h2>
            <p className="text-lg lg:text-xl font-normal font-[Stinger]">{addOns}</p>
        </div>
    )
}

export default CategoryHeader