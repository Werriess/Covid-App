import "../css/index.css"

const HCard = (prop) => {
    return(
        <div className="homeButton">
            <img src={prop.src} alt={prop.alt} id="images"/>
            <p>{prop.name}</p>
        </div>
    )
}

export default HCard;