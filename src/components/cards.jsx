const Card = ({prop, onClick}) => {
    return (
        <div className="stats-buttons-div">
            <button className="buttons" onClick={onClick}>{prop.name}</button>
        </div>
    )
}

export default Card;
