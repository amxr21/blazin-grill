const ActionButton = ({text, link, containerClasses, buttonClasses, handleClick}) => {
    return (
        <div className={`${containerClasses} flex items-center justify-center py-1 grow lg:grow-0`}>
            <button className={`h-fit cursor-pointer  ${buttonClasses}`} onClick={handleClick}>
                <a href={link} className="">
                    {text}
                </a>
            </button>

        </div>
    )
}

export default ActionButton