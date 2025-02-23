const CategoryHeader = ({category, addOns}) => {
    return (
        <div className="header flex flex-col text-center border-b pb-8 uppercase mb-10">
            <h2 className="text-6xl font-bold mb-2">{category}</h2>
            <p className="text-xl font-normal font-[Stinger]">{addOns}</p>
        </div>
    )
}

export default CategoryHeader