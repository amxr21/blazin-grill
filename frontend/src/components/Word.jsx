const Word = ({text, classes}) => {
    return (
        <div className={`word w-fit ${classes}`}>{text}</div>
    )
}

export default Word