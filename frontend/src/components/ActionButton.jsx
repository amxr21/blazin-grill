const ActionButton = ({text, link, containerClasses, buttonClasses, handleClick}) => {
    return (
        <div className={`${containerClasses}`}>
            <button className={`h-fit cursor-pointer ${buttonClasses}`} onClick={handleClick}>
                <a href={link}>
                    {text}
                </a>
            </button>

        </div>
    )
}

export default ActionButton