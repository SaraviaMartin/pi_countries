import "./card.styles.css"

function Card({name}){
    return(
        <div className="card-container">
            <h2>{name}</h2>
            <h2>Continente:</h2>
        </div>
    )
}

export default Card;