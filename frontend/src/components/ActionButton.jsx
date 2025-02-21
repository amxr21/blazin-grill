const ActionButton = ({text, classes, handleClick}) => {
    return (
        <div className="">
            <button className={`${classes} h-fit leading-0`} onClick={handleClick}>
                {text}
            </button>

        </div>
    )
}

export default ActionButton